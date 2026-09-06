import ProductsList from "../components/ProductsList";

export default function Home() {
  return (
    <div className='container mx-auto max-w-screen-xl'>
      {/* Баннер */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-2xl my-6">
        <div className="w-full h-full bg-gradient-to-r from-rose-400 via-pink-400 to-rose-300 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">✨ Celimax ✨</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Натуральная корейская косметика с экстрактом нони для сияющей и здоровой кожи
            </p>
            <div className="mt-6 flex gap-4 justify-center">
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">🌿 Натуральные ингредиенты</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">🇰🇷 Корейский уход</span>
              <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">💧 Интенсивное увлажнение</span>
            </div>
          </div>
        </div>
      </div>
      
      <ProductsList />
    </div>
  );
}