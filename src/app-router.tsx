import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Constants } from './libs/route-links';
import { PropertyAnalyticsScreen } from './screens/property-analytics-screen/property-analytics.screen';
import { PropertyScreen } from './screens/property-screen/property.screen';
import { SpecialFollowsScreen } from './screens/special-follows/special-follows.screen';

export const AppRouter = () => {
    const { specialFollows, propertyAnalytics, propertyList } = Constants.routes;

    return <Router>
        <PropertyScreen
            route={propertyList.link}
            auth={false}
        />
        <PropertyAnalyticsScreen
            route={propertyAnalytics.link}
            auth={false}
        />
        <SpecialFollowsScreen
            route={specialFollows.link}
            auth={false}
        />
    </Router>;
};
