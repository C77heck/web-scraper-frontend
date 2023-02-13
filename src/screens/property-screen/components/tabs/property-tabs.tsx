import { useState } from 'react';
import { FilterSelector } from './filter-selector';
import { TabContent } from './tab-content';
import { TabSelector } from './tab-selector';

export type TabOptions = 'flats' | 'houses' | 'price' | 'sqmPrice' | 'size';

export const PropertyTabs = () => {
    const [activeTab, setActiveTab] = useState<TabOptions>('flats');
    const [price, setPrice] = useState<number>(1);
    const [sqmPrice, setSqmPrice] = useState<number>(1);
    const [size, setSize] = useState<number>(1);
    // todo size // price // sqm price per
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
            <FilterSelector
                value={price}
                title={'price'}
                onSelect={(direction) => setPrice(direction)}
            />
            <FilterSelector
                value={sqmPrice}
                title={'sqm/price'}
                onSelect={(direction) => setSqmPrice(direction)}
            />
            <FilterSelector
                value={size}
                title={'size'}
                onSelect={(direction) => setSize(direction)}
            />
        </div>
        <TabContent
            activeTab={activeTab}
            query={{ size, sqmPrice, price }}
        />
    </div>;
};
