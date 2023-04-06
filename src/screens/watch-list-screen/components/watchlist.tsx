import { useEffect } from 'react';
import { PaginatedResponse } from '../../../shared/components/tab-content';
import { useClient } from '../../../shared/hooks/client.hook';
import { Paginator } from '../../../shared/shared-ui/paginator/paginator';
import { Spinner } from '../../../shared/shared-ui/spinner/spinner';
import { IProperty } from '../../property-screen/components/property-card';
import { PropertyList } from '../../property-screen/components/property-list';

export const Watchlist = (props: any) => {
    const { data, get, loading } = useClient<PaginatedResponse<IProperty>>();
    useEffect(() => {
        (async () => fetchData())();
    }, []);

    const fetchData = async (page = 0) => get({ url: '/get-watch-list', query: { page } });

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
