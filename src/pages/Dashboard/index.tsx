import React from 'react';
import { IoMdBook, IoMdEasel, IoMdHeart } from 'react-icons/io';
import { Link } from 'react-router-dom';
import MainHeader from '../../components/MainHeader';

import imgLogo from '../../assets/images/logo.svg';
import imgLanding from '../../assets/images/landing.svg';

import './styles.css';

function Dashboard() {
    return (
        <div id="dashboard">
            <div className="purple-background">
                <div className="logo-dashboard">
                    <MainHeader />
                    <div className="logo-slogan">
                        <img src={imgLogo} alt="Proffy"/>
                        <h2>Sua plataforma de estudos online.</h2>
                    </div>
                    <div className="landing-image">
                        <img src={imgLanding} alt="Grupo de pessoas estudando"/>
                    </div>
                </div>
            </div>
            <main>
                <div className="welcome">
                    <p>Seja bem-vindo <br /><strong>O que deseja fazer?</strong></p>
                    <span>Total de 285 conexões já realizadas <IoMdHeart size={20} /></span>
                </div>
                <div className="buttons-container">
                    <Link to="/study" className="study ">
                        <IoMdBook size={30} />
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <IoMdEasel size={30} />
                        Dar Aulas
                    </Link>
                </div>
            </main>
        </div>
    );
}

export default Dashboard;