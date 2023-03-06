import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { SpecialFollowsTabs } from './components/special-follows.tabs';

export const SpecialFollowsScreen = (props: ScreenProps) => {
    return <ScreenRoute {...props}>
        <SpecialFollowsTabs/>
    </ScreenRoute>;
};
