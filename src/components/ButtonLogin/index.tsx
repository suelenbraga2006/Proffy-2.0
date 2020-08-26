import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'submit' | 'reset' | 'button';
}

const ButtonLogin: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
    return (
        <button {... rest} type={type}>{children}</button>
    );
}

export default ButtonLogin;