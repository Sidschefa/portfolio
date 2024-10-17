import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import UserRegister from './Components/UserRegister/UserRegister';
import ProtectedRoute from './Routes/ProtectedRoute';
import NoAccessPage from './Components/NoAccessPage/NoAccessPage';
import Curriculum from './Components/Curriculum/Curriculum';
import Contact from './Components/Contact/Contact';
import Projetos from './Components/Projetos/Projetos';
import { getUserRole } from './utils/auth';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import UserPainel from './Components/UserRegister/UserPainel';
import UserDetails from './Components/UserRegister/UserDetails';
import { FaCog } from 'react-icons/fa';

function App() {


  let logspace = "";
  let button = "";
  let dropButton = ""


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // retorna o código do usuário descriptografado
  let userId = () => {
    const token = localStorage.getItem('token');
    const decode = jwtDecode(token);
    return decode.userId;
  }

  // Função retorna o nome do usuário no cabeçalho
  if (getUserRole() !== null) {
    const id = userId().trim();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:8080/user/" + id)
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.text();
          setData(result);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, []);
  }

  // Função para fazer fazer logout do usuário
  const logout = () => {
    localStorage.removeItem('token');
    window.location.href = './';
  };

  // Função carrega os ítens do cabeçalho caso esteja logado ou não
  if (getUserRole() === null) {
    logspace = <a href='./login'><p>Entre</p></a>;
  } else {
    logspace = <p>Olá, {data}</p>;

    button = <p onClick={logout}>Sair</p>;

    if(getUserRole() === "ADMIN"){
    dropButton = <div class="dropdown">
      <button><i><FaCog /></i></button>
      <div class="dropdown-content">
        <a href="/UserPainel">Usuários</a>
        <a href="/UserRegister">Cadastrar Usuários</a>
        <a href="/UserPainel">Alterar Usuários</a>
      </div>
    </div>;
    }

  }

  return (
    <Router>
      <div className='app'>
        <div className='login'>
          {logspace}
          {button}
          {dropButton}
        </div>

        <div className='title'>
          <nav>
            <a className='a1'>Port</a>
            <a className='a2'>folio</a>
          </nav>
        </div>

        {/* Define as rotas de acordo com role do usuário logado */}
        <Routes>

          <Route path="/Login/" element={<Login />} />

          <Route path="/" element={<Home />} />

          <Route path='/UserRegister' element={<ProtectedRoute element={<UserRegister />} requiredRole="ADMIN" />} />

          <Route path='/Curriculum' element={<ProtectedRoute element={<Curriculum />} requiredRole={['USER', 'ADMIN']} />} />

          <Route path='/Contact' element={<ProtectedRoute element={<Contact />} requiredRole={['USER', 'ADMIN']} />} />

          <Route path='Projetos' element={<ProtectedRoute element={<Projetos />} requiredRole={['USER', 'ADMIN']} />} />

          <Route path='UserPainel' element={<ProtectedRoute element={<UserPainel />} requiredRole={'ADMIN'} />} />

          <Route path='UserDetails' element={<ProtectedRoute element={<UserDetails />} requiredRole={'ADMIN'} />} />

          <Route path="/NoAccessPage" element={<NoAccessPage />} />




          {/* <Route
            path="/UserRegister/"
            element={
              <PrivateRoute>
                <UserRegister />
              </PrivateRoute>
            }
            allowedRoles={['ADMIN']}
          /> */}

          {/* Rota para páginas não encontradas */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>

    </Router>
  );
}

export default App;
