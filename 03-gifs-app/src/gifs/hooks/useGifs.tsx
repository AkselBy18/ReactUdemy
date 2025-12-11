import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

//const gifsCache: Record<string, Gif[]> = {};

export function useGifs() {

    const [gifs, setGifs] = useState<Gif[]>([]);
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const gifsCache = useRef<Record<string, Gif[]>>({}); //NO cambia cuando se re-renderiza

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term)
        setGifs(gifs);
        gifsCache.current[term] = gifs;
    };

    const handleSearch = async (query: string) => {
        query = query.trim();
        if (!query) return;
        if (previousTerms.includes(query)) return;
    
        setPreviousTerms([query, ...previousTerms].slice(0, 8));
        const gifs = await getGifsByQuery(query);
        setGifs(gifs);
        gifsCache.current[query] = gifs;
        console.log(gifsCache);
        
    };

    return {
        gifs,
        previousTerms,
        handleSearch,
        handleTermClicked,
    }
}
