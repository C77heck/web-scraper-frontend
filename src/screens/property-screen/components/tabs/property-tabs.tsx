import { useState } from 'react';
import { LocationSelector } from '../../../../shared/components/location-selector';
import { TabContent } from '../../../../shared/components/tab-content';
import { TabSelector } from '../../../../shared/components/tab-selector';
import { FilterGroup } from './filter-group';
import { SearchInput } from './search.input';

export type TabOptions = 'flats' | 'houses' | 'price' | 'sqmPrice' | 'size';

export const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState<TabOptions>('flats');
    const [sort, setSort] = useState<Record<string, 1 | -1 | undefined>>({});
    const [search, setSearch] = useState('');
    const [location, setLocation] = useState<string>('');

    return <div>
        <div className={'display-flex row'}>
            <div className={'col-100'}>
                <LocationSelector onSelect={(location) => setLocation(location)}/>
            </div>
            <div className={'col-70 display-flex justify-content-start'}>
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

            <div className={'col-30 display-flex justify-content-end'}>
                <SearchInput onValueChange={setSearch}/>
            </div>
        </div>
        <TabContent
            url={`/by-location/kecskemet/${activeTab}?location=${location}`}
            activeTab={activeTab}
            query={{ sort, search }}
        />
    </div>;
};
