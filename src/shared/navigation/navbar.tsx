import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../../libs/route-links';
import { Portal } from '../shared-ui/portal';
import { LoginButton } from './login.button';
import './navbar.scss';

export const NavBar = (props: any) => {
    const { home, propertyList, propertyAnalytics, specialFollows } = Constants.routes;
    const getColor = useCallback((link: string) => {
        const genericClasses = 'text-decoration-none uppercase fs-mlg-17 fs-14 white-space-nowrap py-20 fw--700';

        return window.location.pathname === link
            ? `${genericClasses} text-color--active`
            : `${genericClasses}`;
    }, []);

    return <Portal elementId={'navbar'}>
        <nav className={'nav-bar position-center'}>
            <div className={'row max-width-vw-85'}>
                <div className={'col-80 col-lg-60'}>
                    <ul className="nav-bar--ul row">
                        <li className={'col-15'}>
                            <Link className={getColor(home.link)} to={home.link}>
                                {home.title}
                            </Link>
                        </li>
                        <li className={'col-20'}>
                            <Link className={getColor(propertyList.link)} to={propertyList.link}>
                                {propertyList.title}
                            </Link>
                        </li>
                        <li className={'col-25'}>
                            <Link className={getColor(specialFollows.link)} to={specialFollows.link}>
                                {specialFollows.title}
                            </Link>
                        </li>
                        <li className={'col-25'}>
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
        </nav>
    </Portal>;
};
