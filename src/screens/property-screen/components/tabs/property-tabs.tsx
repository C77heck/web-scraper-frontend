import { useState } from 'react';
import { TabContent } from './tab-content';
import { TabSelector } from './tab-selector';

export type TabOptions = 'flats' | 'houses';

export const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState<TabOptions>('flats');

    return <div>
        <div className={'display-flex'}>
            <TabSelector
                activeTab={activeTab}
                title={'flats'}
                onSelect={(tab) => setActiveTab(tab)}
            />
            <TabSelector
                activeTab={activeTab}
                title={'houses'}
                onSelect={(tab) => setActiveTab(tab)}
            />
        </div>
        <TabContent activeTab={activeTab}/>
    </div>;
};
