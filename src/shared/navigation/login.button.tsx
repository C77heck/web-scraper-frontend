import * as React from 'react';
import { useState } from 'react';
import { useAuthContext } from '../contexts/authentication/auth-context.hook';
import { Button } from '../shared-ui/buttons/button';
import { Modal } from '../shared-ui/modal/modal';
import { LoginForm } from "./login.form";
import { RegisterForm } from "./register.form";

export const LoginButton = ({ isMobile }: any) => {
    const { signout, isLoggedIn } = useAuthContext();
    const [isRegister, setIsRegister] = useState(false);

    if (isLoggedIn) {
        return <Button
            textColor={'text-color--light-1 fs-mlg-17 fs-16'}
            buttonStyle={isMobile ? 'logout--mobile' : 'logout'}
            title={'Logout'}
            onClick={() => signout()}
        />;
    }

    return <Modal
        level={2}
        className={'border-radius-px-5 p-15'}
        content={isRegister
            ? <RegisterForm onClick={() => setIsRegister(false)}/>
            : <LoginForm onClick={() => setIsRegister(true)}/>}
        size={{ sm: 90, md: 72, lg: 60, xl: 40 }}
        header={<h2 className={'header--3 text-align-center'}>{isRegister ? 'Sign up' : 'Sign in'}</h2>}
        wrapperClass={isMobile ? 'align-self-center' : ''}
        trigger={<Button
            textColor={'text-color--light-1 fs-mlg-17 fs-16'}
            buttonStyle={isMobile ? 'login--mobile' : 'login'}
            title={'Login'}
        />}
    />;
};
