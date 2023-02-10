import React from 'react';
import { AppRouter } from './app-router';
import './App.scss';
import { AuthContext } from './shared/contexts/authentication/auth.context';
import { useAuth } from './shared/contexts/authentication/auth.hook';
import { Spinner } from './shared/shared-ui/spinner/spinner';

function App() {
    const auth = useAuth();

    return <React.Suspense fallback={<div><Spinner asOverlay/></div>}>
        <AuthContext.Provider value={auth}>
            <AppRouter/>
        </AuthContext.Provider>
    </React.Suspense>;
}

export default App;
