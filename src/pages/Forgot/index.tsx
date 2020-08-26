import React, { useState, FormEvent } from 'react';
import { IoIosAlert } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import LoginLogo from '../../components/LoginLogo';
import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import BackHeader from '../../components/BackHeader';

import api from '../../services/api';

import './styles.css';

function Forgot() {
    const [isError, setIsError] = useState('');

    const [email, setEmail] = useState('');

    const history = useHistory();

    function enableSendButton() {
        return email.length > 0;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        api.post('/forgot', {
            email,
        }).then(() => {
            history.push('/forgotsuccess');
        }).catch(e => {
            setIsError('Houve um erro ao tentar recuperar a senha. Tente novamente.');
        });

        setTimeout(() => {
            setIsError('');
        }, 2000);

    }
    
    return (
        <div id="page-forgot">
            <main id="page-forgot-form">
                <BackHeader />
                
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Eita, esqueceu sua senha?</legend>
                        <p>Não esquenta, vamos dar um jeito nisso.</p>

                        <InputLogin 
                            type="email" 
                            name="email" 
                            label="E-mail" 
                            placeholder=" " 
                            value={email} 
                            onChange={(e) => { setEmail(e.target.value) }} 
                        />
                        <ButtonLogin disabled={!enableSendButton()}>Concluir cadastro</ButtonLogin>
                    </fieldset>
                </form>
                <div className={`error ${isError ? 'error-shown' : 'error-hidden'}`}><IoIosAlert size={30} />{isError}</div>
            </main>
            <div id="page-forgot-logo">
                <LoginLogo />
            </div>
        </div>
    );
}

export default Forgot;