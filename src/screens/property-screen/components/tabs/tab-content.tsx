import { useEffect, useState } from 'react';
import { useClient } from '../../../../shared/hooks/client.hook';
import { PropertyList } from '../property-list';
import { TabOptions } from './property-tabs';

export interface TabContentProps {
    activeTab: TabOptions;
}

export const TabContent = ({ activeTab }: TabContentProps) => {
    const [properties, setProperties] = useState([]);
    const client = useClient();

    useEffect(() => {
        (async () => console.log('setting the options'))();
    }, []);

    useEffect(() => {
        (async () => console.log('setting the options'))();
    }, [activeTab]);
    // todo propabable we decide the path of the tab and we fetch accordingly.
    // think about the caching too.
    return <PropertyList properties={properties}/>;
};
