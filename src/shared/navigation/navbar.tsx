import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Constants } from '../../libs/route-links';
import { Portal } from '../shared-ui/portal';
import './navbar.scss';

export const NavBar = (props: any) => {
    const { propertyList, propertyAnalytics, specialFollows } = Constants.routes;
    const getColor = useCallback((link: string) => {
        const genericClasses = 'text-decoration-none uppercase fs-mlg-17 fs-14 white-space-nowrap py-20 fw--700';

        return window.location.pathname === link
            ? `${genericClasses} text-color--active`
            : `${genericClasses}`;
    }, []);

    return <Portal elementId={'navbar'}>
        <nav className={'nav-bar position-center row'}>
            <div className={'col-50 display-flex justify-content-space-between'}>
                <Link className={getColor(propertyList.link)} to={propertyList.link}>
                    {propertyList.title}
                </Link>
                <Link className={getColor(specialFollows.link)} to={specialFollows.link}>
                    {specialFollows.title}
                </Link>
                <Link className={getColor(propertyAnalytics.link)} to={propertyAnalytics.link}>
                    {propertyAnalytics.title}
                </Link>
            </div>
        </nav>
    </Portal>;
};
