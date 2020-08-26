import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
    token: string;
    user: object;
}

interface SignInCredentials {
    email: string;
    password: string;
    remindme: boolean;
}

interface AuthContextData {
    signed: boolean;
    user: object;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>(() => { 
        const token = sessionStorage.length > 0 ? sessionStorage.getItem('@Proffy:token') : localStorage.getItem('@Proffy:token');
        const user = sessionStorage.length > 0 ? sessionStorage.getItem('@Proffy:user') : localStorage.getItem('@Proffy:user');

        if (token && user) {
            return { token, user: JSON.parse(user) }
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({ email, password, remindme }) => {
        const response = await api.post('/sessions', {
            email,
            password,
        });

        const { token, user } = response.data;

        if (remindme) {
            localStorage.setItem('@Proffy:token', token);
            localStorage.setItem('@Proffy:user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('@Proffy:token', token);
            sessionStorage.setItem('@Proffy:user', JSON.stringify(user));
        }

        setData({ token, user });

    }, []);

    const signOut = useCallback(() => {
        sessionStorage.removeItem('@Proffy:token');
        sessionStorage.removeItem('@Proffy:user');

        localStorage.removeItem('@Proffy:token');
        localStorage.removeItem('@Proffy:user');

        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider value={{ signed: !!data.user, user: data.user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;