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
        (async () => get({ url: `/analytics/kecskemet/${activeTab}` }))();
    }, []);

    useEffect(() => {
        (async () => get({ url: `/analytics/kecskemet/${activeTab}` }))();
    }, [activeTab]);

    return <PropertyList properties={data}/>;
};
