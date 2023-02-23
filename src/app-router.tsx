import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Constants } from './libs/route-links';
import { HomeScreen } from './screens/home-screen/home.screen';
import { PropertyAnalyticsScreen } from './screens/property-analytics-screen/property-analytics.screen';
import { PropertyScreen } from './screens/property-screen/property.screen';

export const AppRouter = () => {
    const { propertyAnalytics, propertyList, home } = Constants.routes;

    return <Router>
        <HomeScreen
            route={home.link}
            auth={false}
        />
        <PropertyScreen
            route={propertyList.link}
            auth={false}
        />
        <PropertyAnalyticsScreen
            route={propertyAnalytics.link}
            auth={false}
        />
    </Router>;
};
