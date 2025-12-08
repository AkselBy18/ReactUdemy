import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export function GifsApp() {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);
    const handleTermClicked = (term: string) => {
        console.log({term});
    };

    const handleSearch = (query: string) => {
        
        query = query.trim();
        if (!query) return;
        if (previousTerms.includes(query)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 7));
    }

    return (
        <>
            {/* HEADER */}
            <CustomHeader
                title="Buscador de Gifs"
                description="Descubre y comparte el Gif perfecto" />

            {/* SEARCH BAR  */}
            <SearchBar
                buttonText="Buscar"
                placeholder="Buscador Gifs"
                onQuery={handleSearch}/>

            {/* PREVIOUS SEARCHES */}
            <PreviousSearches
                searches={previousTerms} 
                onLabelClick={handleTermClicked}/>

            {/* GIFS LIST */}
            <GifList
                gifs={mockGifs} />
        </>
    )
}
