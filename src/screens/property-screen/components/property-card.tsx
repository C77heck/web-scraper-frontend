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

export const PropertyCard = (props: { property: IProperty }) => {
    return <div>
        card
    </div>;
};
