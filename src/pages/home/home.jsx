import React from 'react';
import { Link } from 'react-router-dom';
import './styleshome.css';


const CourseCard = ({ title, description, image }) => {
    return (
        <div className="course-card">
            <div className="cover">
                <div className="coverFront">
                    <div>
                        <h5>{title}</h5>
                        <img src={image} alt={title} />
                    </div>
                </div>
                <div className="coverBack">
                    <div style={{ padding: '20px', textAlign: 'center', fontSize: '12px' }}>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <Link to="/Login">
                            <button className="sh_btn">Inscreva-se</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Home() {
    return (
        <div className="home">
            <header className="navbar">
                <h1>BitWave</h1>
                <nav>
                    <ul>
                        <li><a href="#home">Início</a></li>
                        <li><a href="#courses">Nossos Dispositivos</a></li>
                        <li><a href="mailto:contatobitwavecursos@gmail.com">Contato</a></li>
                    </ul>
                </nav>
                <Link to="/Login">
                    <button className="get-started-btn">Começar</button>
                </Link>
            </header>
            <main id="content">
                <section id="home" className="hero-section">
                    <div className="intro">
                        <h1>Bem-vindo ao BitWave</h1>
                        <hr />
                        <h2>Melhore aqui a sua gestão energética!</h2>
                    </div>
                </section>
                <section className="courses-section" id="courses">
                    <h2>Dispositivos em Destaque</h2>
                    <div className="courses">
                        <CourseCard
                            title="Tomada Inteligente"
                            description="Controle e monitore o consumo de energia dos seus dispositivos remotamente. Ideal para otimizar o uso de energia em casa."
                            image="img1.svg"
                        />
                        <CourseCard
                            title="Medidor de Energia"
                            description="Monitore o consumo de energia em tempo real e receba relatórios detalhados sobre o uso de energia em sua residência."
                            image="img2.svg"
                        />
                        <CourseCard
                            title="Controlador de Temperatura"
                            description="Regule a temperatura de ambientes remotamente e maximize a eficiência energética do seu sistema de climatização."
                            image="img3.svg"
                        />
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className='row mt-3'>
                    <p>© 2024 BitWave. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;
