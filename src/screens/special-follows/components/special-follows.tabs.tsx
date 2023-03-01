import { useState } from 'react';
import { TabContent } from '../../../shared/components/tab-content';
import { TabSelector } from '../../../shared/components/tab-selector';
import { SpecialFollows } from '../special-follows.screen';

export type SpecialFollowsTabOptions = keyof SpecialFollows;

export const SpecialFollowsTabs = () => {
    const [activeTab, setActiveTab] = useState<SpecialFollowsTabOptions>('studioFlats');
    const [sort, setSort] = useState<Record<string, 1 | -1 | undefined>>({});

    return <div>
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
        </div>
        <TabContent
            activeTab={activeTab}
            query={{ sort }}
            url={`/special-follows/${activeTab}`}
        />
    </div>;
};
