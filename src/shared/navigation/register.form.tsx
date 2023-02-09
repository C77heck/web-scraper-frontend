import * as React from "react";
import { useAuthContext } from '../contexts/authentication/auth-context.hook';
import { useClient } from '../hooks/client.hook';
import { Button } from '../shared-ui/buttons/button';

export const RegisterForm = (props: any) => {
    const client = useClient();
    const { signin } = useAuthContext();

    return <div>
        <Button title={'login'} buttonStyle={'link'} onClick={props.onClick}/>
    </div>;
};
