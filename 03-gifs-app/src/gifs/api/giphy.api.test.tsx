import { describe, expect, test } from "vitest";
import { gihpyApi } from "./giphy.api";

describe('giphyApi', () => {
    test('Should be configured correctly', () => {
        const params = gihpyApi.defaults.params;
        expect(gihpyApi.defaults.baseURL).toBe('https://api.giphy.com/v1/gifs');
        //expect(gihpyApi.defaults.params.lang).toBe('es');
        expect(params.lang).toBe('es');
        expect(params.api_key).toBe(import.meta.env.VITE_GIPHY_API_KEY);        
        expect(params).toStrictEqual({ lang: 'es', api_key: 'rmvjUElzR1DunN4NHKdxrQmqkgtPHkqO' });
    });
});