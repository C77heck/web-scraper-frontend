import { ScreenProps, ScreenRoute } from '../libs/screen.route';
import { Watchlist } from './components/watchlist';

export const WatchListScreen = (props: ScreenProps) => {
    return <ScreenRoute {...props}>
        <Watchlist/>
    </ScreenRoute>;
};
