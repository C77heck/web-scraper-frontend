import { useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Constants } from '../../libs/route-links';
import { Portal } from '../shared-ui/portal';
import './navbar.scss';

export const NavBar = (props: any) => {
    const { propertyList, propertyAnalytics, specialFollows, watchList } = Constants.routes;
    const { pathname } = useLocation();

    const getColor = useCallback((link: string) => {
        const genericClasses = 'text-decoration-none uppercase fs-mlg-17 fs-14 white-space-nowrap py-20 fw--700';

        return pathname === link
            ? `${genericClasses} active-link`
            : `${genericClasses}`;
    }, []);

    return <Portal elementId={'navbar'}>
        <nav className={'nav-bar position-center row'}>
            <div className={'col-50 display-flex justify-content-space-between'}>
                <NavLink className={getColor(propertyList.link)} to={propertyList.link}>
                    {propertyList.title}
                </NavLink>
                <NavLink className={getColor(watchList.link)} to={watchList.link}>
                    {watchList.title}
                </NavLink>
                <NavLink className={getColor(specialFollows.link)} to={specialFollows.link}>
                    {specialFollows.title}
                </NavLink>
                <NavLink className={getColor(propertyAnalytics.link)} to={propertyAnalytics.link}>
                    {propertyAnalytics.title}
                </NavLink>
            </div>
        </nav>
    </Portal>;
};
