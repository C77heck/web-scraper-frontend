import moment from 'moment';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useClient } from '../../../shared/hooks/client.hook';
import { handleErrors } from '../../../shared/libs/handle-errors';
import { priceFormat } from '../../../shared/libs/helpers';
import { HttpError } from '../../../shared/libs/http-error';
import { FavouriteIcon } from '../../../shared/shared-ui/icons/icons';
import './property-card.scss';

export interface IProperty {
    isWatched: boolean;
    watchlistId?: string;
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
    const [watchlistId, setWatchlistId] = useState(property?.watchlistId || '');

    useEffect(() => console.log('trigger it'), [watchlistId]);
    const handleWatchList = async () => !watchlistId ? addToWatchList() : removedFromWatchList();

    const addToWatchList = async () => {
        try {
            const hrefId = property.href.match(/\/(\d+)/);

            const response = await post({ url: '/add-to-watch-list', data: { href: hrefId?.[1] || '' } });

            if (!response?._id) {
                throw new HttpError('Something went wrong');
            }

            setWatchlistId(response._id);
        } catch (e) {
            handleErrors(e);
        }
    };

    const removedFromWatchList = async () => {
        try {
            if (!watchlistId) {
                return;
            }

            const response = await deleteItem({ url: `/remove-from-watch-list/${watchlistId}` });

            if (!response) {
                throw new HttpError('Something went wrong');
            }

            setWatchlistId('');
        } catch (e) {
            handleErrors(e);
        }
    };

    const colourClass = watchlistId ? 'color--yellow' : 'color--dark-3';

    return <div className={'property-card box-shadow m-10 position-relative'}>
        <FavouriteIcon className={`position-absolute right-px-8 top-px-7 hover-opacity ${colourClass}`} width={20} onClick={handleWatchList}/>
        <Link to={property.href} target={'_blank'}>
            <PropertyDisplay title={'Address'} value={property.address}/>
            <PropertyDisplay title={'Unit price'} value={`${Math.round(property.sqmPrice)} / m2`}/>
            <PropertyDisplay title={'Size'} value={`${property.size} m2`}/>
            <PropertyDisplay title={'Price'} value={priceFormat(property.total)}/>
            <PropertyDisplay title={'Last day on'} value={moment(property.lastDayOn).format('YYYY-MM-DD')}/>
            <PropertyDisplay title={'Number of days on'} value={property.numberOfDaysAdvertised}/>
        </Link>
    </div>;
};
