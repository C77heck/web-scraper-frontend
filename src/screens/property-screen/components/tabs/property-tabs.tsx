import { useState } from 'react';
import { TabContent } from './tab-content';
import { TabSelector } from './tab-selector';

export type TabOptions = 'Flats' | 'Houses';

export const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState<TabOptions>('Flats');

    return <div>
        <div className={'display-flex'}>
            <TabSelector
                activeTab={activeTab}
                title={'Flats'}
                onSelect={(tab) => setActiveTab(tab)}
            />
            <TabSelector
                activeTab={activeTab}
                title={'Houses'}
                onSelect={(tab) => setActiveTab(tab)}
            />
        </div>
        <TabContent activeTab={activeTab}/>
    </div>;
};
