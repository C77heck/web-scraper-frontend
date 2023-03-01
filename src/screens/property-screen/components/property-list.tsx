import { IProperty, PropertyCard } from './property-card';

export const PropertyList = ({ properties }: { properties: IProperty[] | null }) => {
    if (!properties?.length) {
        // todo impelemnt the empty list
        return null;
    }

    return <div className={'row mt-15'}>
        {properties.map(property => <div key={property._id} className={'col-100 col-md-50 col-lg-33'}>
            <PropertyCard property={property}/>
        </div>)}
    </div>;
};
