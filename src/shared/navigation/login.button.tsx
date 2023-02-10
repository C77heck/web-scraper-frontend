import * as React from 'react';
import { useState } from 'react';
import { useAuthContext } from '../contexts/authentication/auth-context.hook';
import { Button } from '../shared-ui/buttons/button';
import { Modal } from '../shared-ui/modal/modal';
import { LoginForm } from "./login.form";
import { RegisterForm } from "./register.form";

export const LoginButton = () => {
    const { signout, isLoggedIn } = useAuthContext();
    const [isRegister, setIsRegister] = useState(false);

    const content = (text: string) => <span className={'pb-5 color--light fs-18'}>{text}</span>;

    if (isLoggedIn) {
        return <Button
            buttonStyle={'logout'}
            children={content('Logout')}
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
        trigger={<Button
            buttonStyle={'login'}
            children={content('Login')}
        />}
    />;
};
