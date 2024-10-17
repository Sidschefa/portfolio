import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className='app'>

        {/* Define as rotas de acordo com role do usuário logado */}
        <Routes>

          <Route path="/" element={<Login />} />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
