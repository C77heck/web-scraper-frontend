import { useEffect } from 'react';
import { useClient } from '../../../../shared/hooks/client.hook';
import { IProperty } from '../property-card';
import { PropertyList } from '../property-list';
import { TabOptions } from './property-tabs';

export interface TabContentProps {
    activeTab: TabOptions;
}

export const TabContent = ({ activeTab }: TabContentProps) => {
    const { data, get } = useClient<IProperty[]>();

    useEffect(() => {
        (async () => get({ url: '/analytics/kecskemet/flat' }))();
    }, []);

    useEffect(() => {
        (async () => get({ url: '/analytics/kecskemet/flat' }))();
    }, [activeTab]);
    // todo propabable we decide the path of the tab and we fetch accordingly.
    // think about the caching too.
    return <PropertyList properties={data}/>;
};
