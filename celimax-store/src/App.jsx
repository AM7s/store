import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useReducer, useState } from 'react';
import Home from './pages/home';
import About from './pages/about';
import NotFound from './pages/404';
import Cart from './pages/cart';
import Login from './pages/login';
import Logout from './pages/logout';
import Header from './components/header';
import Footer from './components/footer';
import { initialProducts, PRODUCTS_VERSION } from './utils/constants';

export const cartState = createContext();
export const productsContext = createContext();

const initialStateCart = {
  items: [],
  totalqty: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemInCart = state.items.find(item => item.id === action.payload.id);
      let updatedItems;
      if (itemInCart) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: item.qty + action.payload.qty }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.payload }];
      }
      let total = updatedItems.reduce((sum, item) => sum + item.qty, 0);
      return {
        ...state,
        items: updatedItems,
        totalqty: total
      };
    }
    case 'CLEAR_CART': {
      return initialStateCart;
    }
    case 'DELETE_CART_ITEM': {
      let updatedItems = state.items.filter(item => item.id !== action.payload.id);
      let total = updatedItems.reduce((sum, item) => sum + item.qty, 0);
      return {
        ...state,
        items: updatedItems,
        totalqty: total
      };
    }
    case 'UPDATE_CART_ITEM_QTY': {
      const { id, qty } = action.payload;
      let updatedItems = state.items.map(item => {
        if (item.id === id) {
          const newQty = item.qty + qty;
          if (newQty <= 0) {
            return null;
          }
          return { ...item, qty: newQty };
        }
        return item;
      }).filter(item => item !== null);
      let total = updatedItems.reduce((sum, item) => sum + item.qty, 0);
      return {
        ...state,
        items: updatedItems,
        totalqty: total
      };
    }
    default:
      return state;
  }
};

function App() {
  const [cartStateValue, dispatch] = useReducer(cartReducer, initialStateCart, () => {
    try {
      const savedCart = localStorage.getItem('celimax_cart');
      if (savedCart) {
        return JSON.parse(savedCart);
      }
    } catch (err) {
      console.error('Не удалось загрузить корзину из localStorage', err);
    }
    return initialStateCart;
  });

  const [products, setProducts] = useState(() => {
    try {
      const savedVersion = localStorage.getItem('celimax_products_version');
      const savedProducts = localStorage.getItem('celimax_products');
      
      // Если версия не совпадает или товаров нет - загружаем начальные
      if (savedVersion !== PRODUCTS_VERSION || !savedProducts) {
        // Сохраняем новую версию и товары
        localStorage.setItem('celimax_products_version', PRODUCTS_VERSION);
        localStorage.setItem('celimax_products', JSON.stringify(initialProducts));
        return initialProducts;
      }
      
      return JSON.parse(savedProducts);
    } catch (err) {
      console.error('Не удалось загрузить товары из localStorage', err);
      return initialProducts;
    }
  });

  // Сохранение корзины в localStorage
  useEffect(() => {
    try {
      localStorage.setItem('celimax_cart', JSON.stringify(cartStateValue));
    } catch (err) {
      console.error('Не удалось сохранить корзину в localStorage', err);
    }
  }, [cartStateValue]);

  // Сохранение товаров в localStorage
  useEffect(() => {
    try {
      localStorage.setItem('celimax_products', JSON.stringify(products));
      localStorage.setItem('celimax_products_version', PRODUCTS_VERSION);
    } catch (err) {
      console.error('Не удалось сохранить товары в localStorage', err);
    }
  }, [products]);

  return (
    <BrowserRouter>
      <cartState.Provider value={{ dispatch, state: cartStateValue }}>
        <productsContext.Provider value={{ products, setProducts }}>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </productsContext.Provider>
      </cartState.Provider>
    </BrowserRouter>
  );
}

export default App;