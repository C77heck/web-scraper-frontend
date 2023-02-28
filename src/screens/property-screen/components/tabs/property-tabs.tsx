import { useState } from 'react';
import { TabContent } from '../../../../shared/components/tab-content';
import { TabSelector } from '../../../../shared/components/tab-selector';
import { FilterGroup } from './filter-group';

export type TabOptions = 'flats' | 'houses' | 'price' | 'sqmPrice' | 'size';

export const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState<TabOptions>('flats');
    const [sort, setSort] = useState<Record<string, 1 | -1 | undefined>>({});

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
            <FilterGroup onSelect={(sort) => setSort(sort)}/>
        </div>
        <TabContent
            url={`/by-location/kecskemet/${activeTab}`}
            activeTab={activeTab}
            query={{ sort }}
        />
    </div>;
};
