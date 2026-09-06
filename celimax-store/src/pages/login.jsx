import { useState } from "react";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/RegForm";

export default function Login(){
    const [isLogin, setIsLogin] = useState(false)
    return(
        <>
            {isLogin ? (<LoginForm toggleLogin={setIsLogin}/>) : (<SignupForm toggleLogin={setIsLogin}/>)}
        </>
        
    )
}