import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
// import PrivateRoute from './Routes/PrivateRoute';
import UserRegister from './Components/UserRegister/UserRegister';
import ProtectedRoute from './Routes/ProtectedRoute';
import NoAccessPage from './Components/NoAccessPage/NoAccessPage';


// import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <Router>
      <div className='header'>
        <div className='navigate'>
          <div>
            <h1>Sidney Adrian Schaefer</h1>
          </div>
          <nav>
            <a>Curriculum</a>
            <a>Aplicações</a>
          </nav>
        </div>
       
      <div className="App">       

        <Routes>
        
          <Route path="/Login/" element={<Login />} />
          
          <Route path="/" element={<Home />} />        

          <Route path='/UserRegister' element={<ProtectedRoute element={<UserRegister />} requiredRole="ADMIN" />} />       

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
      </div>
    </Router>
  );  
}

export default App;
