import { useEffect, useState } from 'react';
import { FilterSelector } from './filter-selector';

export interface FilterGroupProps {
    onSelect: (sort: Record<string, 1 | -1 | undefined>) => void;
}

export const FilterGroup = ({ onSelect }: FilterGroupProps) => {
    const [sort, setSort] = useState({
        total: undefined,
        sqmPrice: undefined,
        size: undefined,
    });

    useEffect(() => {
        console.log('triggered');
        onSelect(sort);
    }, [sort]);

    const handleSort = (prop: keyof typeof sort, value: number | undefined) => {
        setSort(prev => {
            if (!value) {
                return {
                    ...prev,
                    [prop]: value
                };
            }

            for (const key of Object.keys(prev)) {
                if (key !== prop) {
                    prev[key as keyof typeof prev] = undefined;
                }
            }

            return {
                ...prev,
                [prop]: value
            };
        });
    };

    return <>
        <FilterSelector
            value={sort.total}
            title={'price'}
            onSelect={(direction) => handleSort('total', direction)}
        />
        <FilterSelector
            value={sort.sqmPrice}
            title={'sqm/price'}
            onSelect={(direction) => handleSort('sqmPrice', direction)}
        />
        <FilterSelector
            value={sort.size}
            title={'size'}
            onSelect={(direction) => handleSort('size', direction)}
        />
    </>;
};
