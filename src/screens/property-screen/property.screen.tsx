import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { PropertyTabs } from './components/tabs/property-tabs';

export const PropertyScreen = (props: ScreenProps) => {
    return <ScreenRoute {...props}>
        <PropertyTabs/>
    </ScreenRoute>;
};
