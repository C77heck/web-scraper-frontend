import { useEffect } from 'react';
import { useClient } from '../../shared/hooks/client.hook';
import { Spinner } from '../../shared/shared-ui/spinner/spinner';
import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { IProperty } from '../property-screen/components/property-card';
import { SpecialFollowsTabs } from './components/special-follows.tabs';

export interface SpecialFollows {
    studioFlats: IProperty[];
    cheapFlats: IProperty[];
    cheapHouses: IProperty[];
}

export const SpecialFollowsScreen = (props: ScreenProps) => {
    const { get, data, loading } = useClient<SpecialFollows>();

    useEffect(() => {
        (async () => get({ url: '/analytics/special-follows' }))();
    }, []);

    return <ScreenRoute {...props}>
        <Spinner asOverlay={true} isLoading={loading}/>
        <SpecialFollowsTabs/>
    </ScreenRoute>;
};
