import { memo } from "react";
import { useNavigate } from "react-router-dom";

function Total({ total, delivery, isLoggedIn, confirmOrder }) {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
      <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">Итого:</p>

        <div className="space-y-4">
          <div className="space-y-2">
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Сумма заказа:</dt>
              <dd className="text-base font-medium text-gray-900 dark:text-white">{total} ₽</dd>
            </dl>

            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Доставка</dt>
              <dd className="text-base font-medium text-green-600 dark:text-green-400">Бесплатно</dd>
            </dl>
          </div>

          <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
            <dt className="text-base font-bold text-gray-900 dark:text-white">Итого к оплате:</dt>
            <dd className="text-base font-bold text-rose-600 dark:text-rose-400">{total + delivery} ₽</dd>
          </dl>
        </div>

        <button
          onClick={isLoggedIn ? confirmOrder : () => navigate('/login')}
          className="flex w-full items-center justify-center rounded-lg bg-rose-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-rose-700 focus:outline-none focus:ring-4 focus:ring-rose-300 transition-colors"
        >
          Оформить заказ
        </button>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400"> или </span>
          <a href="/" className="inline-flex items-center gap-2 text-sm font-medium text-rose-600 underline hover:no-underline">
            Продолжить покупки
            <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(Total);