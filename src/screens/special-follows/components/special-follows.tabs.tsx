import { useState } from 'react';
import { LocationSelector } from '../../../shared/components/location-selector';
import { TabContent } from '../../../shared/components/tab-content';
import { TabSelector } from '../../../shared/components/tab-selector';
import { SearchInput } from '../../property-screen/components/tabs/search.input';

export type SpecialFollowsTabOptions = 'studioFlats' | 'cheapFlats' | 'cheapHouses' | 'newPostings';

export const SpecialFollowsTabs = () => {
    const [activeTab, setActiveTab] = useState<SpecialFollowsTabOptions>('studioFlats');
    const [location, setLocation] = useState<string>('');
    const [search, setSearch] = useState('');

    return <div className={'row'}>
        <div className={'col-100'}>
            <LocationSelector onSelect={(location) => setLocation(location)}/>
        </div>
        <div className={'display-flex col-70 align-items-center'}>
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
        <div className={'col-30 display-flex justify-content-end'}>
            <SearchInput onValueChange={setSearch}/>
        </div>
        <TabContent
            activeTab={activeTab}
            query={{ search }}
            url={`/special-follows/${activeTab}?location=${location}`}
        />
    </div>;
};
