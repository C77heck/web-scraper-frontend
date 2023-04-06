import moment from 'moment';
import { Link } from 'react-router-dom';
import { useClient } from '../../../shared/hooks/client.hook';
import { handleErrors } from '../../../shared/libs/handle-errors';
import { priceFormat } from '../../../shared/libs/helpers';
import { FavouriteIcon } from '../../../shared/shared-ui/icons/icons';
import './property-card.scss';

export interface IProperty {
    _id: string;
    location: string;
    crawlerName: string;
    address: string;
    sqmPrice: number;
    size: number;
    total: number;
    href: string;
    __v: number;
    createdAt: Date;
    updatedAt: Date;
    numberOfDaysAdvertised: number;
    lastDayOn: Date;
}

const PropertyDisplay = (props: { title: string, value: string | number }) => {
    return <div className={'display-flex my-5'}>
        <span className={'fs-15 fw-700'}>{props.title}:</span>
        <span className={'fs-15 pl-5 white-space-nowrap'}>{props.value}</span>
    </div>;
};

export const PropertyCard = ({ property }: { property: IProperty }) => {
    const { post, deleteItem, loading, error } = useClient();
    // todo need to get if it is being watched. make it an effective one not like sending 20 requests...
    // need the watchlistId too.
    // colour up the favourite icon as needed
    // figure out the data we want to watch. also a view page where we can see charts and changes to the thikng.
    const handleWatchList = async () => {
        try {
            await post({ url: '/add-to-watch-list', data: { href: property.href } });
            //  await deleteItem({ url: `/remove-from-watch-list/${watchlistId}` });
        } catch (e) {
            handleErrors(e);
        }
    };

    return <Link to={property.href} target={'_blank'}>
        <div className={'property-card box-shadow m-10 position-relative'}>
            <FavouriteIcon className={'position-absolute right-10'} width={20} onClick={handleWatchList}/>
            <PropertyDisplay title={'Address'} value={property.address}/>
            <PropertyDisplay title={'Unit price'} value={`${Math.round(property.sqmPrice)} / m2`}/>
            <PropertyDisplay title={'Size'} value={`${property.size} m2`}/>
            <PropertyDisplay title={'Price'} value={priceFormat(property.total)}/>
            <PropertyDisplay title={'Last day on'} value={moment(property.lastDayOn).format('YYYY-MM-DD')}/>
            <PropertyDisplay title={'Number of days on'} value={property.numberOfDaysAdvertised}/>
        </div>
    </Link>;
};
