import React from 'react'
import { FaArrowAltCircleUp, FaGit, FaGithub, FaLinkedin, FaSeedling, FaVoicemail, FaWhatsapp } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
    return (
        <div className='ground2'>
            <div className='container4'>
                <div className='content'>
                    <h1>Entre em contato pelos canais:</h1>
                    <p className="item">Celular: (47) 98455-6935 <a href="https://wa.me/554784556935?text=Olá,%20assim%20que%20possível%20retornarei,%20obrigado!" target="_blank"><i>{<FaWhatsapp />}</i></a></p>
                    <p className="item">e-mail: sidschefa@gmail.com <a href='mailto:sidschefa@gmail.com'><i>{<FaArrowAltCircleUp />}</i></a></p>
                    <p className="item">LinkedIn <a href='https://www.linkedin.com/in/sidney-schaefer/' target='_blank'><i>{<FaLinkedin />}</i></a></p>
                    <p className="item">GitHub <a href='https://github.com/Sidschefa' target='_blank'><i>{<FaGithub />}</i></a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact
