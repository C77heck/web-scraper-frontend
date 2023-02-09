import { useState } from 'react';
import { TabContent } from './tab-content';
import { TabSelector } from './tab-selector';

export const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState('Flats');

    return <div>
        <div>
            <TabSelector title={'Flats'} onSelect={(tab) => setActiveTab(tab)}/>
            <TabSelector title={'Houses'} onSelect={(tab) => setActiveTab(tab)}/>
        </div>
        <TabContent activeTab={activeTab}/>
    </div>;
};
