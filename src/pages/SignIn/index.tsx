import React, { useState, FormEvent, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosHeart, IoIosEye, IoIosEyeOff, IoIosAlert } from 'react-icons/io';
import AuthContext from '../../contexts/auth';

import './styles.css';

import LoginLogo from '../../components/LoginLogo';
import InputLogin from '../../components/InputLogin';
import ButtonLogin from '../../components/ButtonLogin';

function SignIn() {
    const [isError, setIsError] = useState('');
    const [visible, setVisible] = useState(false);
    const [typeField, setTypeField] = useState('password');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remindme, setRemindme] = useState(false);

    const { signIn } = useContext(AuthContext);

    function enableSendButton() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();

        signIn({
            email,
            password,
            remindme,
        }).catch(e => {
            setIsError('Houve um erro ao efetuar o login. E-mail ou senha inválidos.');
        });

        setTimeout(() => {
            setIsError('');
        }, 2000);
    }
    
    return (
        <div id="page-signin">
            <div id="page-signin-logo">
                <LoginLogo />
            </div>
            
            <main id="page-signin-form">
            <div className={`error ${isError ? 'error-shown' : 'error-hidden'}`}><IoIosAlert size={30} />{isError}</div>
                
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>Fazer login</legend>

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

                        <div className="lembrar">
                            <InputLogin 
                                type="checkbox" 
                                name="lembrar" 
                                label="Lembrar-me" 
                                defaultChecked={remindme} 
                                onChange={(e) => { setRemindme(e.target.checked) }}
                            />
                            <Link to="/forgot">Esqueci minha senha</Link>
                        </div>

                        <ButtonLogin disabled={!enableSendButton()}>Entrar</ButtonLogin>
                    </fieldset>
                </form>
                <footer>
                    <div className="footer-container">
                        <div className="cadastrese">
                            <p>Não tem conta?</p>
                            <Link to="/signup">Cadastre-se</Link>
                        </div>
                        <span>
                            É de graça 
                            <IoIosHeart size={20} />
                        </span>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default SignIn;