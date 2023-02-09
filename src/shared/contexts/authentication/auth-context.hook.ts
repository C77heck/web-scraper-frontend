import { useContext } from 'react';
import { AuthContext } from './auth.context';

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    return { ...authContext };
};
