import * as React from "react";
import { useAuthContext } from '../contexts/authentication/auth-context.hook';
import { useClient } from '../hooks/client.hook';
import { Button } from '../shared-ui/buttons/button';

export const LoginForm = (props: any) => {
    const client = useClient();
    const { signin } = useAuthContext();

    const submit = async (data: any) => {
        const body: any = {
            email: "something@gmail.com" || data?.email || '',
            password: "something@gmail.com" || data?.password || '',
        };
    };

    return <div>
        <div className={'position-center py-15'}>
            <Button title={'Register'} buttonStyle={'link'} onClick={props.onClick}/>
        </div>
    </div>;
};
