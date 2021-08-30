import { useEffect, useState } from "react";


// Implementation code where T is the returned data shape
// check what is T, me falta el refetch

export const useFetch = (url: string, options: RequestInit) => {
    const [response, setResponse] = useState<any | null>(null);
    //const [error, setError] = useState<Error | null>(null);

    const [error, setError] = useState<any>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
        fetchData();
    }, [url, options]);

    return { response, error, isLoading };
};