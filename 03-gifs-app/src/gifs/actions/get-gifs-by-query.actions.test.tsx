import { beforeEach, describe, expect, test, vi } from "vitest";
import { getGifsByQuery } from "./get-gifs-by-query.actions";
import AxiosMockAdapter from 'axios-mock-adapter';
import { gihpyApi } from "../api/giphy.api";
import { giphySeachResponseMock } from "../../mock-data/giphy.response.data";



describe('getGifByQuery', () => {
    let mock = new AxiosMockAdapter(gihpyApi);

    beforeEach(() => {
        //mock.reset()
        mock = new AxiosMockAdapter(gihpyApi);
    });

    /* test('Should return a gifs', async () => {
        const gifs = await getGifsByQuery('goku');
        const [gif1] = gifs
        
        expect(gifs.length).toBe(10);
        
        expect(gif1).toEqual({
            id: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String),
            })
            }); */


    test('Should return a list of gifs', async () => {
        mock.onGet('/search').reply(200, giphySeachResponseMock);
        const gifs = await getGifsByQuery('Goku');

        expect(gifs.length).toBe(10);
        gifs.forEach(gif => {
            expect(typeof gif.id).toBe('string');
            expect(typeof gif.title).toBe('string');
            expect(typeof gif.url).toBe('string');
            expect(typeof gif.width).toBe('number');
            expect(typeof gif.height).toBe('number');
        });
    });

    test('Should return a empty list of gifs if query is empty', async () => {
        //mock.onGet('/search').reply(200, { data: []});
        mock.restore();
        const gifs = await getGifsByQuery('');
        expect(gifs.length).toBe(0);
    });

    test('Should handle error when th api return errors', async () => {
        const consolErrorSpy = vi.spyOn(console, 'error')
            .mockImplementation( () => {} )

        mock.onGet('/search').reply(400, {
            data: {
                message: 'Bad request'
            }
        });

        const gifs = await getGifsByQuery('goku');
        expect(gifs.length).toBe(0);
        expect(consolErrorSpy).toHaveBeenCalled();
        expect(consolErrorSpy).toHaveBeenCalledTimes(1);
        expect(consolErrorSpy).toHaveBeenCalledWith(expect.anything());
    });
});