import { IProperty, PropertyCard } from './property-card';

export const PropertyList = ({ properties }: { properties: IProperty[] | null }) => {
    if (!properties?.length) {
        return <div className={'row mt-15'}>
            <div className={'col-100 position-center my-50'}>
                <h2 className={'fs-40 color--light'}>Empty list</h2>
            </div>
        </div>;
    }

    return <div className={'row mt-15'}>
        {properties.map(property => <div key={property._id} className={'col-100 col-md-50 col-lg-33'}>
            <PropertyCard property={property}/>
        </div>)}
    </div>;
};
