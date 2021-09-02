import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { useFetch } from '../../hooks/useFetch';

const data = [
    { id: 1, url: 'https://example.com/1' },
    { id: 2, url: 'https://example.com/2' },
];

const error = 'An error occured!';

const url = 'example.com';

beforeAll(() => {
    global.fetch = fetch;
});

afterAll(() => {
    jest.restoreAllMocks();
});

describe('useFetch testing', () => {
    it('should return data from teh call after fetch', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(data),
            } as Response)
        );

        const { result } = renderHook(() => useFetch());

        await act(async () => {
            result.current.setFetch(url, {});
        });

        expect(result.current.response).toBe(data);
    });

    it('should catch error after call', async () => {
        jest.spyOn(global, 'fetch').mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(error),
            } as Response)
        );

        const { result } = renderHook(() => useFetch());

        await act(async () => {
            result.current.setFetch(url, {});
        });

        expect(result.current.response).toBe(error);
    });
});
