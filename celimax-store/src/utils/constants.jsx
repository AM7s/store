export const initialProducts = [
  {
    id: 1,
    name: 'Dual Barrier Creamy Toner',
    description: 'Кремовый тонер с церамидами восстанавливает поврежденный барьер кожи',
    image: '/img/creamytoner.jpg',  // Путь к картинке в папке public/img
    price: 2500,
    category: 'toner',
    rating: 4.8,
    inStock: true,
    badge: 'Популярный'
  },
  {
    id: 2,
    name: 'Celimax The Real Noni Serum',
    description: 'Сыворотка с ферментированным экстрактом нони для восстановления кожи',
    image: '/img/noniserum.jpg',
    price: 3500,
    category: 'serum',
    rating: 4.9,
    inStock: true,
    badge: 'Хит'
  },
  {
    id: 3,
    name: 'Celimax The Real Noni Ultimate Eye Cream',
    description: 'Крем восстанавливающий вокруг глаз с нони и пептидами',
    image: '/img/eyecream.jpg',
    price: 3200,
    category: 'cream',
    rating: 4.7,
    inStock: true
  },
  {
    id: 4,
    name: 'Celimax The Real Noni Cleanser',
    description: 'Мягкий очищающий гель с экстрактом нони для ежедневного ухода',
    image: '/img/nonicleanser.jpg',
    price: 1800,
    category: 'cleanser',
    rating: 4.6,
    inStock: true
  },
  {
    id: 5,
    name: 'Celimax Pore+Dark Spot Brightening Pad',
    description: 'Тонер-пэды для выравнивания тона и рельефа кожи',
    image: '/img/porepads.jpg',
    price: 2800,
    category: 'cleanser',
    rating: 4.5,
    inStock: true,
    badge: 'Новинка'
  },
  {
    id: 6,
    name: 'Celimax The Vita-A Retinal Shot Tightening Booster',
    description: 'Бустер-крем подтягивающий с ретиналем',
    image: '/img/booster.jpg',
    price: 4200,
    category: 'cream',
    rating: 4.9,
    inStock: true,
    badge: 'Премиум'
  }
];

// Версия товаров (увеличивайте при обновлении)
export const PRODUCTS_VERSION = '1.0.0';

export const categories = [
  { id: 'all', label: 'Все товары', icon: '📦' },
  { id: 'toner', label: 'Тонеры', icon: '💧' },
  { id: 'serum', label: 'Сыворотки', icon: '✨' },
  { id: 'cream', label: 'Кремы', icon: '🧴' },
  { id: 'cleanser', label: 'Очищение', icon: '🧼' }
];

export const orderStatuses = {
  pending: 'В обработке',
  processing: 'Готовится',
  shipped: 'Отправлен',
  delivered: 'Доставлен',
  cancelled: 'Отменен'
};