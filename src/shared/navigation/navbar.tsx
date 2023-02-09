import { useEffect, useState } from 'react';
import { useAuthContext } from '../contexts/authentication/auth-context.hook';
import { Portal } from '../shared-ui/portal';
import { DesktopNavbar } from './desktop-navbar';
import './navbar.scss';

export const NavBar = (props: any) => {

    const [shouldRefetch, setShouldRefetch] = useState(false);
    const { token, isLoggedIn } = useAuthContext();

    const request = {};

    useEffect(() => {
        if (isLoggedIn || !!shouldRefetch) {
            (async () => {
                try {
                    console.log('Pulling the latest data...');
                    // await request.get('/crypto/latest_listings', {});
                    console.log('Pulling the latest data was successful');
                } catch (e) {
                    console.log('Pulling the latest data was unsuccussfull');
                }
            })();
        }
    }, [isLoggedIn, shouldRefetch]);

    useEffect(() => {
        const timer = setInterval(() => setShouldRefetch(!shouldRefetch), 1000 * 60 * 3);
        return () => clearInterval(timer);
    }, [shouldRefetch]);

    return <Portal elementId={'navbar'}>
        <DesktopNavbar className={"display-none display-md-flex"}/>
    </Portal>;
};
