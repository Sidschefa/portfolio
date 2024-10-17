import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserRegister.css'
import { useNavigate } from 'react-router-dom';
import { FaEdit, FaGithub, FaTrash } from "react-icons/fa";


const UserPainel = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/user');
                setUsers(response.data);
            } catch (error) {
                console.error('Erro ao buscar usuários:', error);
            }
        };
        fetchUsers();
    }, []);

    const userDelete = async (id) => {

        try {
            await axios.delete('http://localhost:8080/user/delete/' + id);
            setUsers(users.filter(user => user.id !== id));


            const token = response.data.token;

            localStorage.setItem('token', token);

            navigate('/UserRegister');

        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    }

    const userEdit = (id) => {
        navigate('/UserDetails');
        location.reload();
        localStorage.setItem('idUser', id)
    }

    return (
        <div className='ground'>
            <div className='container1'>

                <table className='itens'>
                    <tbody>
                        <tr>
                            <td>Nome</td>
                            <td>E-mail</td>
                            <td>Autorizações</td>
                        </tr>

                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>

                                <td>
                                    <label onClick={() => userEdit(user.id)}><i><FaEdit /></i></label>

                                </td>
                                <td>
                                    <label onClick={() => userDelete(user.id)}><i><FaTrash /></i></label>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPainel;

