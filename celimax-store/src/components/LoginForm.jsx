import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { loginUser } from "../services/UserService";

export default function LoginForm({ toggleLogin }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const result = loginUser(formData.email, formData.password);
      console.log('Успешный вход:', result);
      setFormData({ email: "", password: "" });
      navigate('/');
      window.location.reload();
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-gray-50 px-4 md:px-8">
      <div className="min-h-[79vh] flex flex-col items-center justify-center">
        <div className="max-w-md w-full">
          <a href="/">
            <img src={Logo} alt="logo" className="w-14 min-h-14 mb-8 mx-auto block" />
          </a>

          <div className="p-6 rounded-lg bg-white border border-slate-300 shadow-xs md:p-8">
            <h1 className="text-slate-900 text-center text-3xl font-bold">Авторизация</h1>
            {error && <p className="text-red-500 text-center mt-2 text-sm">{error}</p>}

            <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
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

              <button
                type="submit"
                className="w-full py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-rose-600 bg-rose-600 hover:bg-rose-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              >
                Войти
              </button>

              <div className="text-slate-900 text-sm text-center">
                Нет аккаунта? 
                <span
                  onClick={() => toggleLogin(false)}
                  className="text-rose-600 hover:underline ml-1 font-medium cursor-pointer"
                >
                  Зарегистрируйтесь
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}