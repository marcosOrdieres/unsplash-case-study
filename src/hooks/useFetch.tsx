import { useEffect, useState } from "react";


// Implementation code where T is the returned data shape
// check what is T, me falta el refetch

export const useFetch: any = () => {
    const [response, setResponse] = useState<any | null>(null);
    const [url, setUrl] = useState<string>('');
    const [options, setOptions] = useState<RequestInit>({});

    //change this
    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const refetch = () => {
        setResponse(null)
        setUrl(url)
    }

    const setFetch = (url: string, options: RequestInit) => {
        setUrl(url)
        setOptions(options)
    }

    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            setIsLoading(true);

            try {
                const res = await fetch(url, options);
                const json = await res.json();

                setResponse(json);
                setIsLoading(false);
            } catch (error) {
                setError(error);
            }
        };
        if (url !== '') fetchData();
    }, [url, options]);

    return [{ response, isLoading, error }, setFetch, refetch];

};