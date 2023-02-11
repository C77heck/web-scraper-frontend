import { Link } from 'react-router-dom';
import { priceFormat } from '../../../shared/libs/helpers';
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
}

const PropertyDisplay = (props: { title: string, value: string | number }) => {
    return <div className={'display-flex my-5'}>
        <span className={'fs-15 fw-700'}>{props.title}:</span>
        <span className={'fs-15 pl-5 white-space-nowrap'}>{props.value}</span>
    </div>;
};

export const PropertyCard = ({ property }: { property: IProperty }) => {
    return <Link to={property.href}>
        <div className={'property-card box-shadow m-10'}>
            <PropertyDisplay title={'Address'} value={property.address}/>
            <PropertyDisplay title={'Unit price'} value={`${property.sqmPrice} / m2`}/>
            <PropertyDisplay title={'Size'} value={`${property.size} m2`}/>
            <PropertyDisplay title={'Price'} value={priceFormat(property.total)}/>
        </div>
    </Link>;
};
