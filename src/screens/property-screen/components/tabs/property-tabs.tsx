import { useState } from 'react';
import { FilterGroup } from './filter-group';
import { TabContent } from './tab-content';
import { TabSelector } from './tab-selector';

export type TabOptions = 'flats' | 'houses' | 'price' | 'sqmPrice' | 'size';

export const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState<TabOptions>('flats');
    const [sort, setSort] = useState<Record<string, 1 | -1 | undefined>>({});
    // todo text search for the address or price.
    // todo paginator to add
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
            activeTab={activeTab}
            query={{ sort }}
        />
    </div>;
};
