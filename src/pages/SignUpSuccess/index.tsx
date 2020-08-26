import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosCheckboxOutline } from 'react-icons/io'

import './styles.css';

function SignUpSuccess() {
    return (
        <div id="sign-success">
            <IoIosCheckboxOutline size={120} />
            <h1>Cadastro concluído</h1>
            <p>Agora você faz parte da plataforma da Proffy. <br />Tenha uma ótima experiência.</p>
            <Link to="/">Fazer login</Link>
        </div>
    );
}

export default SignUpSuccess;