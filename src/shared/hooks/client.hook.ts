import { useState } from 'react';

export const useClient = <TData>() => {
    const [error, setError] = useState<string>('');
    const [data, setData] = useState<TData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const fetch = () => {
        // do somehting
    };

    return { fetch, error, data, loading };
};
