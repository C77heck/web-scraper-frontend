import { useEffect } from 'react';
import { useClient } from '../../shared/hooks/client.hook';
import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { SqmPriceChart } from './components/sqm-price.chart';

export const PropertyAnalyticsScreen = (props: ScreenProps) => {
    const { get, data, loading } = useClient<{ dataset: number[] }>();

    useEffect(() => {
        (async () => get({ url: '/analytics/kecskemet/flat' }))();
    }, []);

    return <ScreenRoute {...props}>
        <div className={'row'}>
            <div className={'col-md-50 col-100'}>
                <SqmPriceChart dataset={data?.dataset || []} loading={loading}/>
            </div>
            <div className={'col-md-50 col-100'}>

            </div>
            <div className={'col-md-50 col-100'}>

            </div>
            <div className={'col-md-50 col-100'}>

            </div>
        </div>
    </ScreenRoute>;
};
