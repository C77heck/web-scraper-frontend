import { useEffect } from 'react';
import { useClient } from '../../shared/hooks/client.hook';
import { Spinner } from '../../shared/shared-ui/spinner/spinner';
import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { ChartDisplay } from './components/chart-display';

export interface AnalyticsData {
    sqmPrices: number[];
    daysOn: number[];
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
        <Spinner asOverlay={true} isLoading={loading}/>
        {!loading && <div className={'row'}>
            <div className={'col-100'}>
                <ChartDisplay
                    colorIndex={0}
                    title={'Square meter prices'}
                    dataset={data?.sqmPrices || []}
                />
            </div>
            <div className={'col-100'}>
                <ChartDisplay
                    colorIndex={2}
                    type={'Radar'}
                    title={'Total prices'}
                    dataset={data?.totalPrices || []}
                />
            </div>
            <div className={'col-100'}>
                <ChartDisplay
                    colorIndex={3}
                    title={'Property sizes'}
                    dataset={data?.sizes || []}
                />
            </div>
            <div className={'col-100'}>
                <ChartDisplay
                    colorIndex={1}
                    title={'Properties advertised by day'}
                    type={'Radar'}
                    dataset={data?.daysOn || [] as any}
                />
            </div>
        </div>}
    </ScreenRoute>;
};
