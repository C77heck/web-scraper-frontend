import { Route, Routes } from 'react-router-dom';
import { NavBar } from '../../shared/navigation/navbar';
import { AuthHandler } from '../../shared/shared-ui/authentication-management/auth.handler';

export interface ScreenRouteProps extends ScreenProps {
    children: any;
}

export interface ScreenProps {
    route: string;
    auth?: boolean;
}

export const ScreenRoute = (props: ScreenRouteProps) => {
    return <Routes>
        <Route path={props.route} element={<div className={'screen-view p-20'}>
            <NavBar/>
            {props.auth ? <AuthHandler>{props.children}</AuthHandler> : props.children}
        </div>}/>
    </Routes>;
};
