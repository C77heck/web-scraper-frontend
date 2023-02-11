import { IProperty, PropertyCard } from './property-card';

export const PropertyList = ({ properties }: { properties: IProperty[] | null }) => {
    if (!properties?.length) {
        // todo impelemnt the empty list
        return null;
    }

    return <div className={'row'}>
        {properties.map(property => <PropertyCard key={property._id} property={property}/>)}
    </div>;
};
