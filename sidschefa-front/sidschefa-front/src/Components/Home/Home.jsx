import React from 'react';
import { FaUser, FaLock, FaGithub } from "react-icons/fa";
import "./Home.css"


const Home = () => {
  return (
    <div className='ground'>
      <div className='container1'>
        <div>
          <div className='nameS'>
            <h1 className="">Sidney Adrian Schaefer</h1>          
          <nav>            
            <a href='/Curriculum'>Curriculum</a>
            <a href='/Projetos'>Projetos</a>
            <a href='/Contact'>Contato</a>            
          </nav>
          <a className="i"href='https://github.com/Sidschefa' target='_blank'><i><FaGithub className='icon'/></i></a>          
        </div>
        </div>

        <div className='container2'>
          <div>
            <h1>Desenvolvedor Java</h1>
          </div>          
          <div>
            <img className='foto' src="/src/assets/foto.jpg"/>  
          </div>          
        </div>
        <div className='container3'>
         <h1>sobre</h1>
          <div className='bar'></div>
        </div>
        <div className='sobre'>
          <h3>Desenvolvedor java iniciante em busca de oportunidade.</h3>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
