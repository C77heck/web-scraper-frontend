import { createContext } from 'react';

export interface UserProps {
    userId: string;
    token: string;
    expiry: Date;
}

export const AuthContext = createContext({
    userId: '',
    token: '',
    isLoggedIn: false,
    signin: (data: UserProps) => {
    },
    signout: () => {
    },
});
