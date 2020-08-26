import React, { useState, FormEvent } from 'react';
import { IoIosEye, IoIosEyeOff, IoIosAlert } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

import LoginLogo from '../../components/LoginLogo';
import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';
import BackHeader from '../../components/BackHeader';
import api from '../../services/api';

import './styles.css';

function SignIn() {
    const [isError, setIsError] = useState('');
    const [visible, setVisible] = useState(false);
    const [typeField, setTypeField] = useState('password');

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    function enableSendButton() {
        return name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        api.post('/users', {
            name,
            lastname,
            email,
            password,
        }).then(() => {
            history.push('/signupsuccess');
        }).catch(e => {
            setIsError('Houve um erro ao efetuar o cadastro. Tente novamente.');
        });

        setTimeout(() => {
            setIsError('');
        }, 2000);

    }
    
    return (
        <div id="page-signup">
            <main id="page-signup-form">
                <BackHeader />
                
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Cadastro</legend>
                        <p>Preencha os dados abaixo para começar.</p>

                        <InputLogin 
                            type="text" 
                            name="name" 
                            label="Nome" 
                            placeholder=" " 
                            value={name} 
                            onChange={(e) => { setName(e.target.value) }} 
                        />
                        <InputLogin 
                            type="text" 
                            name="lastname" 
                            label="Sobrenome" 
                            placeholder=" " 
                            value={lastname} 
                            onChange={(e) => { setLastname(e.target.value) }} 
                        />
                        <InputLogin 
                            type="email" 
                            name="email" 
                            label="E-mail" 
                            placeholder=" " 
                            value={email} 
                            onChange={(e) => { setEmail(e.target.value) }} 
                        />
                        <InputLogin 
                            type={typeField} 
                            name="password" 
                            label="Senha" 
                            placeholder=" " 
                            value={password} 
                            onChange={(e) => { setPassword(e.target.value) }} 
                        />

                        { visible 
                            ? 
                            <IoIosEyeOff 
                                size={25} 
                                onClick={() => {
                                    setVisible(visible => !visible)
                                    setTypeField("password")
                                }} 
                                className="checked"
                            /> 
                            : 
                            <IoIosEye 
                                size={25}
                                onClick={() => {
                                    setVisible(visible => !visible)
                                    setTypeField("text")
                                }} 
                                className="unchecked"
                            /> 
                        }
                        <ButtonLogin disabled={!enableSendButton()}>Concluir cadastro</ButtonLogin>
                    </fieldset>
                </form>
                <div className={`error ${isError ? 'error-shown' : 'error-hidden'}`}><IoIosAlert size={30} />{isError}</div>
            </main>
            <div id="page-signup-logo">
                <LoginLogo />
            </div>
        </div>
    );
}

export default SignIn;