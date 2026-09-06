// services/UserService.js

const USERS_KEY = 'celimax_users';
const CURRENT_USER_KEY = 'celimax_current_user';

// Инициализация пользователей по умолчанию
const initUsers = () => {
  if (!localStorage.getItem(USERS_KEY)) {
    const defaultUsers = [
      { id: '1', email: 'user@example.com', password: 'password123', name: 'Test User' },
      { id: '2', email: 'admin@example.com', password: 'admin123', name: 'Admin' }
    ];
    localStorage.setItem(USERS_KEY, JSON.stringify(defaultUsers));
  }
};

// Получить всех пользователей
export const getUsers = () => {
  initUsers();
  return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
};

// Найти пользователя по email
export const findUserByEmail = (email) => {
  const users = getUsers();
  return users.find(user => user.email === email);
};

// Регистрация нового пользователя
export const registerUser = (email, password, name = '') => {
  const users = getUsers();
  
  if (findUserByEmail(email)) {
    throw new Error('Пользователь с таким email уже существует');
  }
  
  const newUser = {
    id: Date.now().toString(),
    email,
    password,
    name: name || email.split('@')[0],
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
  return newUser;
};

// Вход пользователя
export const loginUser = (email, password) => {
  const user = findUserByEmail(email);
  
  if (!user) {
    throw new Error('Пользователь не найден');
  }
  
  if (user.password !== password) {
    throw new Error('Неверный пароль');
  }
  
  // Создаем токен
  const token = btoa(JSON.stringify({ userId: user.id, email: user.email, timestamp: Date.now() }));
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify({ id: user.id, email: user.email, name: user.name }));
  
  return { token, user };
};

// Выход из системы
export const logoutUser = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

// Получить текущего пользователя
export const getCurrentUser = () => {
  const userData = localStorage.getItem('user');
  if (!userData) return null;
  try {
    return JSON.parse(userData);
  } catch {
    return null;
  }
};

// Проверить авторизацию
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};

// Получить заказы пользователя
export const getUserOrders = (userId) => {
  const ordersKey = 'celimax_orders';
  const orders = JSON.parse(localStorage.getItem(ordersKey) || '[]');
  return orders.filter(order => order.userId === userId);
};

// Создать заказ
export const createOrder = (userId, items, total) => {
  const ordersKey = 'celimax_orders';
  const orders = JSON.parse(localStorage.getItem(ordersKey) || '[]');
  
  const newOrder = {
    id: Date.now().toString(),
    userId,
    items,
    total,
    status: 'pending',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  orders.push(newOrder);
  localStorage.setItem(ordersKey, JSON.stringify(orders));
  return newOrder;
};

// Получить все заказы (для админа)
export const getAllOrders = () => {
  const ordersKey = 'celimax_orders';
  return JSON.parse(localStorage.getItem(ordersKey) || '[]');
};

export default {
  getUsers,
  findUserByEmail,
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  isAuthenticated,
  getUserOrders,
  createOrder,
  getAllOrders
};