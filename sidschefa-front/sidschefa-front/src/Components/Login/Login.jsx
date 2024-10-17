import React from 'react'
import { FaUser, FaLock, FaArrowCircleLeft } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Login.css"


const Login = () => {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const navigate = useNavigate();


    // Função para requidição post de login
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/login', {
                login: login,
                password: password
            });

            const token = response.data.token;

            localStorage.setItem('token', token);

            console.log("Login bem sucedido", token);

            navigate('/');
            location.reload();

            setLogin("");
            setPassword("");

        } catch (err) {
            console.error("erro ao fazer login", err);
            setError("Credenciais inválidas. Tente novamente.");
            alert("Usuário ou senha inválido.")

            setLogin("");
            setPassword("");

        }

    }

    return (

        <div className='ground'>
            <div className='container1'>
                <div>
                    <a href="/" className='backArrowLogin'><i><FaArrowCircleLeft /></i></a>
                </div>
                <div className='container'>


                    <form onSubmit={handleSubmit}>
                        <h1>Entrar</h1>
                        <div className='input-field'>
                            <input type='text' placeholder='Login' value={login}
                                onChange={(e) => setLogin(e.target.value)} />
                            <FaUser className='icon' />
                        </div>
                        <div className='input-field'>
                            <input type="password" placeholder='Senha' value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <FaLock className='icon' />
                        </div>

                        <div className="recall-forget">
                            <label>
                                <input type='checkbox' />
                                Lembre de mim
                            </label>
                            <a href='#'>Esqueci minha senha</a>
                        </div>
                        <button>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
