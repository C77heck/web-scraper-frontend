import { useEffect, useState } from 'react';
import { PropertyList } from '../property-list';

export interface TabContentProps {
    activeTab: string;
}

export const TabContent = ({ activeTab }: TabContentProps) => {
    const [properties, setProperties] = useState([]);

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
