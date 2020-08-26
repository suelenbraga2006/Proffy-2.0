import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function LoginLogo() {
    return (
        <div className="logo">
            <img src={logoImg} alt="Proffy"/>
            <h2>Sua plataforma de estudos online</h2>
        </div>
    );
}

export default LoginLogo;