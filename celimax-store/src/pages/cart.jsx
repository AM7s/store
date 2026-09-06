import { useContext, useEffect, useMemo, useState } from "react";
import CartItem from "../components/CartItem";
import { cartState } from "../App";
import Total from "../components/TotalCart";
import { getCurrentUser, createOrder } from "../services/UserService";

export default function Cart() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPopup, setIsPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState('');
  const cartContext = useContext(cartState).state.items;
  const dispatch = useContext(cartState).dispatch;
  
  const total = useMemo(() => {
    return cartContext.reduce((sum, item) => sum + (item.price * item.qty), 0);
  }, [cartContext]);
  
  const delivery = 0; // Бесплатная доставка для косметики

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  const confirmOrder = async () => {
    try {
      if (cartContext.length === 0) {
        throw new Error("Корзина пуста");
      }
      
      const currentUser = getCurrentUser();
      if (!currentUser) {
        throw new Error("Пожалуйста, войдите в систему");
      }
      
      // Создаем заказ в localStorage
      const order = createOrder(
        currentUser.id,
        cartContext.map(item => ({
          id: item.id,
          name: item.name,
          qty: item.qty,
          price: item.price
        })),
        total + delivery
      );
      
      console.log('Заказ создан:', order);
      
      // Очищаем корзину
      dispatch({ type: 'CLEAR_CART' });
      setIsPopup(true);
      setOrderStatus('✅ Заказ успешно оформлен! Спасибо за покупку!');
      
    } catch (error) {
      console.error('Ошибка оформления заказа:', error.message);
      setOrderStatus('❌ ' + error.message);
      alert(error.message);
    }
  };

  return (
    <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16 min-h-[79vh]">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Корзина</h2>

        <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
          <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              {cartContext.length > 0 ? (
                cartContext.map(item => (
                  <CartItem key={item.id} {...item} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">Корзина пуста</p>
                  <p className="text-gray-400 text-sm">Добавьте товары из каталога</p>
                  {isPopup && (
                    <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-700 font-medium">{orderStatus}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <Total 
            total={total} 
            delivery={delivery} 
            isLoggedIn={isLoggedIn} 
            confirmOrder={confirmOrder}
          />
        </div>
      </div>
    </section>
  );
}