import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../../libs/route-links';
import { useAuthContext } from '../contexts/authentication/auth-context.hook';
import { LoginButton } from './login.button';

export const DesktopNavbar = (props: any) => {
    const { home, propertyAnalytics } = Constants.routes;
    const getColor = useCallback((link: string) => {
        const genericClasses = 'text-decoration-none uppercase fs-mlg-17 fs-14 white-space-nowrap py-20 fw--700';

        return window.location.pathname === link
            ? `${genericClasses} text-color--active`
            : `${genericClasses}`;
    }, []);

    const { isLoggedIn } = useAuthContext();

    return <nav className={`${props.className} nav-bar justify-content-center align-items-center`}>
        <div className={'row max-width-vw-85'}>
            <div className={'col-80 col-lg-60'}>
                <ul className="nav-bar--ul row">
                    <li className={'col-20'}>
                        <Link className={getColor(home.link)} to={home.link}>
                            {home.title}
                        </Link>
                        <Link className={getColor(propertyAnalytics.link)} to={propertyAnalytics.link}>
                            {propertyAnalytics.title}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={'col-20 col-lg-40 display-flex justify-content-end'}>
                <LoginButton/>
            </div>
        </div>
    </nav>;
};
