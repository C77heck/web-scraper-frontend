import { useEffect } from 'react';
import { IProperty } from '../../screens/property-screen/components/property-card';
import { PropertyList } from '../../screens/property-screen/components/property-list';
import { useClient } from '../hooks/client.hook';
import { Paginator } from '../shared-ui/paginator/paginator';
import { Spinner } from '../shared-ui/spinner/spinner';

export interface TabContentProps {
    activeTab: any;
    query: object;
    url: string;
}

export interface PaginatedResponse<TData> {
    data: TData[] | null;
    total: number;
    page: number;
}

export const TabContent = ({ activeTab, query, url }: TabContentProps) => {
    const { data, get, loading } = useClient<PaginatedResponse<IProperty>>();
    useEffect(() => {
        (async () => fetchData())();
    }, []);

    useEffect(() => {
        (async () => fetchData())();
    }, [activeTab, query]);

    const fetchData = async (page = 0) => get({ url: url, query: { ...query, page } });

    return <>
        <PropertyList properties={data?.data || null}/>;
        <Spinner asOverlay={true} isLoading={loading}/>
        <Paginator
            pageChange={page => fetchData(page)}
            total={data?.total || 0}
            currentPage={data?.page || 0}
        />
    </>;
};
