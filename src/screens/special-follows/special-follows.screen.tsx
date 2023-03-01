import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { IProperty } from '../property-screen/components/property-card';
import { SpecialFollowsTabs } from './components/special-follows.tabs';

export interface SpecialFollows {
    studioFlats: IProperty[];
    cheapFlats: IProperty[];
    cheapHouses: IProperty[];
}

export const SpecialFollowsScreen = (props: ScreenProps) => {
    return <ScreenRoute {...props}>
        <SpecialFollowsTabs/>
    </ScreenRoute>;
};
