export const priceFormat = (amount: number, decimal = 1, currency: string = 'gbp') => {
    const val = !!amount ? amount : 0;
    const price = round(val, decimal);

    return Intl
        .NumberFormat('hu-HU', {
            style: 'currency', currency: (currency || '')
                .toUpperCase()
        })
        .format(price)
        .replace(/\D00(?=\D*$)/, '')
        .replace(/hun/i, 'Ft');
};

export const round = (num: number, decimal = 100) => {
    return Math.round(num * decimal) / decimal;
};

export const numArray = (number: number, value: any = false) => {
    if (!value) {
        return Array.from({ length: number }, (i, index) => (index + 1));
    }
    return Array.from({ length: number }, (i, index) => value || index);
};

export const getUniqueId = () => {
    return (Math.random() * 1000).toString(16).replace('.', '');
};

export const sort = (collection: any[], direction: 'asc' | 'desc' = 'asc', by = ''): any[] => {
    if (!by) {
        return collection.sort((a, b) => a - b);
    }
    return collection.sort((a, b) => a[by].localeCompare(b[by]));
};

export const extractFilters = (query: any) => {
    const filters: any = {};
    for (const prop in query) {
        switch (prop) {
            case 'page':
                break;
            case 'limit':
                break;
            case 'total':
                break;
            default:
                filters[prop] = query[prop];
                break;
        }
    }

    return filters;
};
