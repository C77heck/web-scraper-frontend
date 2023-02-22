import { useEffect } from 'react';
import { useClient } from '../../../../shared/hooks/client.hook';
import { Paginator } from '../../../../shared/shared-ui/paginator/paginator';
import { IProperty } from '../property-card';
import { PropertyList } from '../property-list';
import { TabOptions } from './property-tabs';

export interface TabContentProps {
    activeTab: TabOptions;
    query: object;
}

export interface PaginatedResponse<TData> {
    data: TData[] | null;
    total: number;
    page: number;
}

export const TabContent = ({ activeTab, query }: TabContentProps) => {
    const { data, get } = useClient<PaginatedResponse<IProperty>>();
    useEffect(() => {
        (async () => fetchData())();
    }, []);

    useEffect(() => {
        (async () => fetchData())();
    }, [activeTab, query]);

    const fetchData = async (page = 0) => get({ url: `/analytics/kecskemet/${activeTab}`, query: { ...query, page } });

    return <>
        <PropertyList properties={data?.data || null}/>;
        <Paginator
            pageChange={page => fetchData(page)}
            total={data?.total || 0}
            currentPage={data?.page || 0}
        />
    </>;
};
