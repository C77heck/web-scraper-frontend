import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Constants } from './libs/route-links';
import { HomeScreen } from './screens/home.screen';
import { PropertyScreen } from './screens/property.screen';

export const AppRouter = () => {
    const { propertyAnalytics, home } = Constants.routes;

    return <Router>
        <HomeScreen
            route={home.link}
            auth={false}
        />
        <PropertyScreen
            route={propertyAnalytics.link}
            auth={false}
        />
    </Router>;
};
