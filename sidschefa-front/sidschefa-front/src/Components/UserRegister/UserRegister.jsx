import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./UserRegister.css"

const UserRegister = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("USER")
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/auth/register', {
                
                userName: userName,
                email: email,
                role: role,    
                login: login,
                password: password                
            });

            const token = response.data.token;

            localStorage.setItem('token', token); 

            navigate('/UserRegister');

            setLogin(""); 
            setPassword("");
            setUserName("")
            setEmail("");
            setRole("USER");

        } catch(err){
            console.error("erro ao fazer login", err);
            setError("Credenciais inválidas. Tente novamente.");            
            
            setLogin(""); 
            setPassword("");
            setUserName("")
            setEmail("");
            setRole("USER");

        }
    
    }

  return (
    <div className='container'>
        <div>teste</div>

        <form onSubmit={handleSubmit}>
            <h1>Cadastro de novo Usuário</h1>

            <div className='input-field'>
                 <input type='text' placeholder='Nome' value={userName}
                 onChange={(e) => setUserName(e.target.value)} />                 
            </div>

            <div className='input-field'>
                 <input type='text' placeholder='E-mail' value={email}
                 onChange={(e) => setEmail(e.target.value)} />                 
            </div>

            <div className='input-field'>
                 <input type='text' placeholder='Login' value={login}
                 onChange={(e) => setLogin(e.target.value)} />                 
            </div>

            <div className='input-field'>
                 <input type="password" placeholder='Senha' value={password}
                 onChange={(e) => setPassword(e.target.value)} />                 
            </div>

            <div className='input-field'>
                 <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="USER">USER</option> 
                    <option value="ADMIN">ADMIN</option>  
                </select>                                
            </div>
            
                <button>Salvar</button>
            
        </form>
      
    </div>
  )
}

export default UserRegister
