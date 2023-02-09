import { ScreenProps, ScreenRoute } from './libs/screen.route';

export const HomeScreen = (props: ScreenProps) => {
    return <ScreenRoute {...props}>
        <div>
            <h1>HOME SCREEN</h1>
        </div>
    </ScreenRoute>;
};
