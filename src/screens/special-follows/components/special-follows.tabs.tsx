import { useState } from 'react';
import { LocationSelector } from '../../../shared/components/location-selector';
import { TabContent } from '../../../shared/components/tab-content';
import { TabSelector } from '../../../shared/components/tab-selector';

export type SpecialFollowsTabOptions = 'studioFlats' | 'cheapFlats' | 'cheapHouses' | 'newPostings';

export const SpecialFollowsTabs = () => {
    const [activeTab, setActiveTab] = useState<SpecialFollowsTabOptions>('studioFlats');

    return <div>
        <div>
            <LocationSelector/>
        </div>
        <div className={'display-flex'}>
            <TabSelector
                activeTab={activeTab}
                title={'studioFlats'}
                onSelect={(tab) => setActiveTab(tab)}
            />
            <TabSelector
                activeTab={activeTab}
                title={'cheapFlats'}
                onSelect={(tab) => setActiveTab(tab)}
            />
            <TabSelector
                activeTab={activeTab}
                title={'cheapHouses'}
                onSelect={(tab) => setActiveTab(tab)}
            />
            <TabSelector
                activeTab={activeTab}
                title={'newPostings'}
                onSelect={(tab) => setActiveTab(tab)}
            />
        </div>
        <TabContent
            activeTab={activeTab}
            query={{}}
            url={`/special-follows/${activeTab}`}
        />
    </div>;
};
