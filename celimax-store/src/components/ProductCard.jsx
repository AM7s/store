import { useContext, useState } from "react";
import { cartState } from "../App";

export default function ProductCard({ id, name, description, image, price, rating }) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(1);
  const contextDispatch = useContext(cartState).dispatch;

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const addToCart = (id, name, price, qty) => {
    contextDispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: id,
        name: name,
        price: price,
        qty: qty,
        img: image
      }
    });
  };

  // Звезды рейтинга
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    return stars;
  };

  return (
    <div className="w-76 bg-white shadow-lg rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div 
        className="h-56 w-full bg-gradient-to-br from-pink-50 to-rose-50 flex flex-col justify-between p-4 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex justify-between">
          <span className="bg-white/80 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-rose-600">
            {rating} ⭐
          </span>
          <button className="text-gray-400 hover:text-red-500 transition-colors" onClick={toggleLike}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill={isLiked ? 'red' : 'none'} stroke={isLiked ? 'red' : 'currentColor'} strokeWidth='1.5'>
              <path d='M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z' />
            </svg>
          </button>
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-2 mt-auto">
          <span className="text-white text-xs font-medium">✨ Корейская косметика</span>
        </div>
      </div>
      
      <div className="p-4 flex flex-col items-start">
        <h2 className="text-gray-800 font-bold text-lg">{name}</h2>
        <p className="text-gray-500 text-sm h-10 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between w-full mt-2">
          <span className="text-rose-600 font-bold text-xl">{price} ₽</span>
          <div className="flex items-center gap-1 text-xs text-gray-500">
            {renderStars()}
          </div>
        </div>
        
        <div className="inline-flex items-center mt-3 w-full justify-between">
          <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
            <button 
              onClick={() => setCount(Math.max(1, count - 1))} 
              disabled={count === 1}
              className="bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-50 inline-flex items-center px-3 py-1.5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
            <div className="bg-gray-50 text-gray-700 inline-flex items-center px-4 py-1.5 select-none font-medium text-sm min-w-[32px] justify-center">
              {count}
            </div>
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-white text-gray-600 hover:bg-gray-100 inline-flex items-center px-3 py-1.5 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          
          <button 
            onClick={() => addToCart(id, name, price, count)}
            className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 active:bg-rose-700 transition-colors text-sm font-medium flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}