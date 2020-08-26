import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosCheckboxOutline } from 'react-icons/io'

import './styles.css';

function ForgotSuccess() {
    return (
        <div id="sign-success">
            <IoIosCheckboxOutline size={120} />
            <h1>Redefinição enviada!</h1>
            <p>Boa, agora é só checar o e-mail que foi enviado para você <br />redefinir sua senha e aproveitar os estudos.</p>
            <Link to="/">Voltar ao login</Link>
        </div>
    );
}

export default ForgotSuccess;