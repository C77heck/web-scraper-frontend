import { ScreenProps, ScreenRoute } from '../libs/screen.route';

export const PropertyScreen = (props: ScreenProps) => {
    return <ScreenRoute {...props}>
        <div>
            <h1>PROPERTY SCREEN</h1>
        </div>
    </ScreenRoute>;
};
