import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[79vh] flex items-center justify-center bg-gradient-to-br from-rose-400 via-pink-400 to-rose-300 px-4">
      <div className="text-center text-white max-w-2xl">
        <div className="flex items-center justify-center text-[120px] md:text-[150px] font-bold mb-8">
          <span className="drop-shadow-lg">4</span>
          <div className="relative w-[100px] h-[100px] md:w-[130px] md:h-[130px] border-[12px] border-white rounded-full mx-2 animate-bounce-slow flex items-center justify-center text-6xl">
            🌿
          </div>
          <span className="drop-shadow-lg">4</span>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          Упс! Страница не найдена
        </h1>
        
        <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
          Похоже, вы забрели в неизведанные уголки интернета.
          Давайте вернем вас в безопасное место!
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-white text-rose-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}