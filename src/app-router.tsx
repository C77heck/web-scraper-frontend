import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Constants } from './libs/route-links';
import { PropertyAnalyticsScreen } from './screens/property-analytics-screen/property-analytics.screen';
import { PropertyScreen } from './screens/property-screen/property.screen';
import { SpecialFollowsScreen } from './screens/special-follows/special-follows.screen';
import { WatchListScreen } from './screens/watch-list-screen/watch-list.screen';

export const AppRouter = () => {
    const { specialFollows, propertyAnalytics, propertyList, watchList } = Constants.routes;

    return <Router>
        <PropertyScreen
            route={propertyList.link}
            auth={false}
        />
        <WatchListScreen
            route={watchList.link}
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
