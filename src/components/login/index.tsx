import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate=useNavigate();

    const login=()=>{
        navigate("/manager");//visitor or manager?
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={login}>登录</button>
    </div>
  )
}
