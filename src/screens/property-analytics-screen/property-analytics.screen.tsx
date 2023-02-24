import { useEffect } from 'react';
import { useClient } from '../../shared/hooks/client.hook';
import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { SqmPriceChart } from './components/sqm-price.chart';

export interface AnalyticsData {
    sqmPrices: number[];
    datesOn: Date[];
    totalPrices: number[];
    sizes: number[];
}

export const PropertyAnalyticsScreen = (props: ScreenProps) => {
    const { get, data, loading } = useClient<AnalyticsData>();

    useEffect(() => {
        console.log('got in here');

        (async () => get({ url: '/analytics/kecskemet/flats' }))();
    }, []);

    return <ScreenRoute {...props}>
        <div className={'row'}>
            <div className={'col-md-50 col-100'}>
                <SqmPriceChart dataset={data?.sqmPrices || []} loading={loading}/>
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
