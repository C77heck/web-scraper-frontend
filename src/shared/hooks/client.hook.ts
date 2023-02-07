import { useState } from 'react';

export const useClient = <TData>() => {
    const [error, setError] = useState('');
    const [data, setData] = useState<TData>(null);
    const fetch = () => {
    };

    return { fetch };
};
