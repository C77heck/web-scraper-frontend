import { useEffect } from 'react';
import { useClient } from '../../../../shared/hooks/client.hook';
import { IProperty } from '../property-card';
import { PropertyList } from '../property-list';
import { TabOptions } from './property-tabs';

export interface TabContentProps {
    activeTab: TabOptions;
    query: object;
}

export const TabContent = ({ activeTab, query }: TabContentProps) => {
    const { data, get } = useClient<IProperty[]>();
    useEffect(() => {
        (async () => get({ url: `/analytics/kecskemet/${activeTab}`, query }))();
    }, []);

    useEffect(() => {
        (async () => get({ url: `/analytics/kecskemet/${activeTab}`, query }))();
    }, [activeTab, query]);

    return <PropertyList properties={data}/>;
};
