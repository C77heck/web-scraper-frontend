import { useEffect, useState } from 'react';
import superagent from 'superagent';
import { HttpError } from '../libs/http-error';

export interface ClientOptions {
    url: string;
    query?: object;
}

export interface ClientPostOptions extends ClientOptions {
    data: object;
}

export const useClient = <TData>() => {
    const baseUrl = '';
    const [error, setError] = useState<any>('');
    const [data, setData] = useState<TData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        console.log({ error });
    }, [error]);

    const get = async (options: ClientOptions) => {
        try {
            setLoading(true);

            const response = await superagent
                .get(options.url)
                .query(options?.query || {});

            if (!response.ok) {
                throw new HttpError('Something went wrong');
            }

            setData(response.body);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    const post = async (options: ClientPostOptions) => {
        try {
            setLoading(true);

            const response = await superagent
                .post(options.url)
                .send(options.data);

            if (!response.ok) {
                throw new HttpError('Something went wrong');
            }

            setData(response.body);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    const put = async (options: ClientPostOptions) => {
        try {
            setLoading(true);

            const response = await superagent
                .put(options.url)
                .send(options.data);

            if (!response.ok) {
                throw new HttpError('Something went wrong');
            }

            setData(response.body);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    return { fetch, error, data, loading };
};
