import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fbf9fa' }}>
      {/* Hero секция */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/10 via-transparent to-rose-400/5"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-400/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1 border border-rose-400/30 rounded-full text-sm text-rose-500 bg-rose-400/10">
              🌿 О бренде
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6" style={{ color: '#1a1a1a' }}>
              Celimax
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto" style={{ color: '#4a4a4a' }}>
              Корейская косметика премиум-класса с экстрактом нони для здоровья и красоты вашей кожи
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="px-6 py-2 bg-white border border-rose-400/20 rounded-full text-sm" style={{ color: '#1a1a1a' }}>
                🌱 100% натуральные ингредиенты
              </span>
              <span className="px-6 py-2 bg-white border border-rose-400/20 rounded-full text-sm" style={{ color: '#1a1a1a' }}>
                🇰🇷 Сделано в Корее
              </span>
              <span className="px-6 py-2 bg-white border border-rose-400/20 rounded-full text-sm" style={{ color: '#1a1a1a' }}>
                🏆 10 лет на рынке
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Наша история */}
      <section className="py-20 border-t border-rose-400/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#e11d48' }}>Наша история</span>
              <h2 className="text-4xl font-bold mt-2 mb-6" style={{ color: '#1a1a1a' }}>
                Путь к совершенству в уходе за кожей
              </h2>
              <div className="space-y-4" style={{ color: '#4a4a4a' }}>
                <p className="leading-relaxed">
                  Бренд Celimax был основан в 2014 году в Сеуле группой энтузиастов, вдохновленных 
                  силой природы и желанием создать идеальные средства для ухода за кожей. 
                  Главный секрет нашей формулы — экстракт нони, который обладает уникальными 
                  антивозрастными и увлажняющими свойствами.
                </p>
                <p className="leading-relaxed">
                  Сегодня Celimax — это признанный бренд в мире корейской косметики, который 
                  сочетает традиционные восточные рецептуры с инновационными биотехнологиями. 
                  Мы верим, что красота начинается со здоровой кожи.
                </p>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#e11d48' }}>20+</div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>Продуктов в линейке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#e11d48' }}>50к+</div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold" style={{ color: '#e11d48' }}>4.9</div>
                  <div className="text-sm" style={{ color: '#4a4a4a' }}>Средний рейтинг</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-white p-2 shadow-xl">
                {/* ЗАМЕНЕНО: теперь здесь картинка */}
                <div 
                  className="w-full h-full rounded-xl bg-cover bg-center"
                  style={{ backgroundImage: "url('/img/vibe.jpg')" }}
                >
                </div>
                {/* КОНЕЦ ЗАМЕНЫ */}
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-xl px-6 py-4 shadow-2xl" style={{ backgroundColor: '#e11d48' }}>
                <div className="text-2xl font-bold text-white">✨</div>
                <div className="text-sm text-white">Красота изнутри</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши ценности */}
      <section className="py-20" style={{ backgroundColor: '#f5f0ed' }}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#e11d48' }}>Ценности</span>
            <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: '#1a1a1a' }}>Почему выбирают Celimax</h2>
            <p style={{ color: '#4a4a4a' }}>Мы создаем косметику, которая действительно работает</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4" style={{ backgroundColor: '#e11d48/20' }}>
                🌱
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Натуральные ингредиенты</h3>
              <p className="leading-relaxed" style={{ color: '#4a4a4a' }}>
                Мы используем только экологически чистые ингредиенты, выращенные на органических фермах в Корее.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4" style={{ backgroundColor: '#e11d48/20' }}>
                🔬
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Научный подход</h3>
              <p className="leading-relaxed" style={{ color: '#4a4a4a' }}>
                Разработки ведутся с использованием современных биотехнологий и клинических исследований.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl mb-4" style={{ backgroundColor: '#e11d48/20' }}>
                💧
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#1a1a1a' }}>Глубокое увлажнение</h3>
              <p className="leading-relaxed" style={{ color: '#4a4a4a' }}>
                Формулы с экстрактом нони обеспечивают длительное увлажнение и восстановление кожи.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Команда */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#e11d48' }}>Команда</span>
            <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: '#1a1a1a' }}>Наша команда</h2>
            <p style={{ color: '#4a4a4a' }}>Люди, которые создают качественную косметику для вас</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Ми Ён Ким',
                role: 'Основатель и CEO',
                image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400&h=400&fit=crop',
                experience: '20 лет в косметологии'
              },
              {
                name: 'Сон Хи Пак',
                role: 'Главный технолог',
                image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&h=400&fit=crop',
                experience: '15 лет разработки'
              },
              {
                name: 'Чжун Хо Ли',
                role: 'Директор по качеству',
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
                experience: '18 лет контроля качества'
              }
            ].map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p style={{ color: '#e11d48' }} className="text-sm font-semibold">{member.role}</p>
                    <p className="text-gray-300 text-xs mt-1">{member.experience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Процесс создания */}
      <section className="py-20" style={{ backgroundColor: '#f5f0ed' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#e11d48' }}>Процесс</span>
              <h2 className="text-4xl font-bold mt-2" style={{ color: '#1a1a1a' }}>Как создается косметика</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: '01', label: 'Исследования', icon: '🔬', desc: 'Научные разработки' },
                { step: '02', label: 'Ингредиенты', icon: '🌿', desc: 'Натуральные компоненты' },
                { step: '03', label: 'Производство', icon: '🏭', desc: 'Строгий контроль' },
                { step: '04', label: 'Тестирование', icon: '✅', desc: 'Клинические испытания' },
              ].map((item, index) => (
                <div key={index} className="text-center group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative mb-3">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mx-auto transition-colors" style={{ backgroundColor: '#e11d48/20' }}>
                      {item.icon}
                    </div>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-1/2 -right-[10%] w-[20%] h-0.5" style={{ backgroundColor: '#e11d48/30' }}></div>
                    )}
                  </div>
                  <div className="text-sm font-bold" style={{ color: '#e11d48' }}>{item.step}</div>
                  <div className="font-semibold" style={{ color: '#1a1a1a' }}>{item.label}</div>
                  <div className="text-xs" style={{ color: '#4a4a4a' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#e11d48' }}>Отзывы</span>
            <h2 className="text-4xl font-bold mt-2 mb-4" style={{ color: '#1a1a1a' }}>Что говорят наши клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Елена Смирнова',
                text: 'Лучшая корейская косметика, которую я пробовала! Кожа стала гладкой и сияющей. Тонер просто волшебный!',
                rating: 5,
                date: '2 дня назад'
              },
              {
                name: 'Игорь Морозов',
                text: 'Подарил жене набор Celimax на день рождения. Она в восторге! Очень качественные средства, видимый результат.',
                rating: 5,
                date: '5 дней назад'
              },
              {
                name: 'Анна Ковальчук',
                text: 'Сыворотка с нони — это любовь! Кожа увлажненная, тон выровнялся. Буду заказывать еще!',
                rating: 5,
                date: '1 неделя назад'
              }
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="leading-relaxed mb-4" style={{ color: '#4a4a4a' }}>"{review.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold" style={{ color: '#1a1a1a' }}>{review.name}</div>
                    <div className="text-sm" style={{ color: '#4a4a4a' }}>{review.date}</div>
                  </div>
                  <div style={{ color: '#e11d48' }}>❤️</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-20" style={{ backgroundColor: '#e11d48' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Откройте для себя Celimax
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Попробуйте наши продукты и почувствуйте разницу
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              style={{ color: '#e11d48' }}
            >
              Смотреть каталог
            </Link>
            {/* ИЗМЕНЕНО: ссылка на несуществующий путь /contact ведет на 404 */}
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              Связаться с нами
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;