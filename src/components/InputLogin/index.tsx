import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const InputLogin: React.FC<InputProps> = ({ name, label, ...rest }) => {
    return (
        <div className="input-block">
            <input {...rest} id={name}/>
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default InputLogin;