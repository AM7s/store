import { NavLink, useLocation } from 'react-router-dom';
import CartIcon from '../assets/cart.svg';
import { useContext, useEffect, useState } from 'react';
import { cartState } from '../App';

function LogoBlock({ url, title }) {
  return (
    <a href={url}>
      <div className='flex font-black text-xl items-center gap-4'>
        <span className='text-rose-600'>{title}</span>
      </div>
    </a>
  );
}

function Menu({ list }) {
  return (
    <ul className='flex flex-row gap-4 p-4'>
      {Object.entries(list).map(([url, title]) => (
        <NavLink 
          key={Math.floor(Math.random()*1000)} 
          to={url} 
          className={({ isActive }) => isActive ? "font-medium text-rose-600" : "hover:font-medium hover:text-rose-500 transition-colors"}
        >
          {title}
        </NavLink>
      ))}
    </ul>
  );
}

function Cart({ count }) {
  return (
    <div className='relative inline-flex justify-center items-center'>
      <img src={CartIcon} alt="cartIcon" className='h-14'/>
      <span className='absolute top-0 right-0 bg-rose-500 text-white rounded-full size-6 text-center text-sm font-bold'>{count}</span>
    </div>
  );
}

export default function Header() {
  const location = useLocation();
  const count = useContext(cartState).state.totalqty;
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem('token');
  });

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, [location]);

  let menu = (isLoggedIn)
    ? {
        "/": 'Каталог',
        "/about": 'О бренде',
        '/profile': 'Личный кабинет',
        "/logout": 'Выйти',
      }
    : {
        "/": 'Каталог',
        "/about": 'О бренде',
        '/login': 'Войти',
      };

  return (
    <header className='bg-white shadow-sm'>
      <div className='container mx-auto flex justify-between p-4'>
        <LogoBlock  url='/' title='Celimax' />
        <div className='flex'>
          <Menu list={menu} />
          <NavLink to="/cart">
            <Cart count={count} />
          </NavLink>
        </div>
      </div>
    </header>
  );
}