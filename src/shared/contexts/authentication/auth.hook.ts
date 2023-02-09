import moment from 'moment';
import { useEffect, useState } from 'react';
import { redirect } from 'react-router-dom';
import { UserProps } from './auth.context';
import { Storage } from '../../libs/storage';

export const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const storage = new Storage('auth');

    const hasNotExpired = (data: UserProps) => {
        if (!data?.expiry) {
            return false;
        }

        return moment(data?.expiry).isBefore(moment());
    };

    useEffect(() => {
        const data = storage.get();
        if (data && hasNotExpired(data)) {
            signin(data);
        }
    });

    const signout = () => {
        storage.remove();
        setIsLoggedIn(false);
        setToken('');
        setUserId('');
        redirect('/');
    };

    const signin = (userData: UserProps) => {
        setIsLoggedIn(true);
        setToken(userData?.token);
        setUserId(userData?.userId);
        storage.set({ ...userData });
    };

    return { isLoggedIn, token, userId, signout, signin };

};
