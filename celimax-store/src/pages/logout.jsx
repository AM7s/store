import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/UserService";

export default function Logout() {
  const navigate = useNavigate();
  
  useEffect(() => {
    logoutUser();
    navigate("/");
    window.location.reload();
  }, [navigate]);
  
  return (
    <div className="min-h-[79vh] flex items-center justify-center">
      <h1 className="text-xl text-gray-600">Выход из системы...</h1>
    </div>
  );
}