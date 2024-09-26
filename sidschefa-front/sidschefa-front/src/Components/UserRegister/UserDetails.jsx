import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./UserRegister.css"

const UserDetails = () => {

    const id = localStorage.getItem('idUser');
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {       

        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:8080/user/pegarUSer/" + id)           
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();

            setUserName(result.username);
                setEmail(result.email);
                setLogin(result.login);
                setPassword(result.password);
                setRole({ role: result.role });

            

          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };  
        fetchData();
      }, 
      
      []);
    
      

    const handleSubmit = async (event) => {
        event.preventDefault();       

        try {
            const response = await axios.put('http://localhost:8080/user/alter', {

                id: id,
                userName: userName,
                email: email,
                role: role,
                login: login,
                password: password,    
                
            });

            navigate('/Userpainel');

        } catch (err) {
            console.error("erro ao fazer login", err);
            setError("Credenciais inválidas. Tente novamente.");
        }  

    }

    return (
        <div className='ground'>
            <div className='container1'>
                <div className='container'>
                
                <form onSubmit={handleSubmit}>
                    <h1>Editar Usuário</h1>

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

                    <div className='select-field'>
                        <select value={role.role} onChange={(e) => setRole(e.target.value)}>
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>

                    <button>Alterar</button>

                </form>
                
            </div>
            </div>
        </div>
    )
}

export default UserDetails
