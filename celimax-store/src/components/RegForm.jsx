import { useState } from "react";
import { registerUser } from "../services/UserService";

export default function SignupForm({ toggleLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [status, setStatus] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Отправка...');
    
    try {
      const result = registerUser(formData.email, formData.password, formData.name);
      setStatus('Успешно зарегистрированы!');
      setFormData({ email: '', password: '', name: '' });
      toggleLogin(true);
    } catch (error) {
      setStatus(error.message);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const confirmation = (e) => {
    const value = e.target.value;
    setIsConfirmed(formData.password === value && formData.password.length > 0);
  };

  return (
    <main className="px-4 md:px-8 min-h-[79vh] flex flex-col items-center justify-center">
      <div className="max-w-md w-full">
        <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-6">
          <h1 className="text-slate-900 text-center text-2xl font-bold">Регистрация</h1>
          {status && <p className={`text-center mt-2 text-sm ${status.includes('Ошибка') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}

          <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="mb-2 text-slate-900 font-medium text-sm inline-block">Имя</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ваше имя"
                value={formData.name}
                onChange={handleChange}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 text-slate-900 font-medium text-sm inline-block">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="mail@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"
              />
            </div>
            <div>
              <label htmlFor="password" className="mb-2 text-slate-900 font-medium text-sm inline-block">Пароль</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleChange}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="mb-2 text-slate-900 font-medium text-sm inline-block">Подтвердите пароль</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="••••••••"
                required
                onChange={confirmation}
                className="px-3 py-2.5 text-sm text-slate-900 rounded-md bg-white w-full outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-rose-600"
              />
            </div>

            <div className="flex items-start flex-wrap gap-2">
              <label className="flex items-center group has-[input:checked]:text-slate-900">
                <input
                  id="tmc"
                  name="tmc"
                  type="checkbox"
                  required
                  className="sr-only"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded outline-1 outline-slate-300 bg-white group-has-[input:checked]:bg-rose-600 group-has-[input:checked]:outline-rose-600 group-focus-within:outline-2 group-focus-within:outline-rose-600" aria-hidden="true">
                  <svg className="size-3 text-white opacity-0 group-has-[input:checked]:opacity-100" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                </span>
                <span className="ml-3 text-sm text-slate-700">Я соглашаюсь с</span>
              </label>
              <a href="#" className="ml-1 text-sm font-medium text-rose-600 hover:underline">условиями регистрации</a>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-rose-600 bg-rose-600 hover:bg-rose-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
              disabled={!(isConfirmed && isChecked)}
            >
              Создать аккаунт
            </button>
          </form>

          <div className="mt-6 text-slate-900 text-sm text-center">
            Есть аккаунт?
            <span
              onClick={() => toggleLogin(true)}
              className="text-rose-600 hover:underline ml-1 font-medium cursor-pointer"
            >
              Авторизуйтесь
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}