import { GifList } from "./gifs/components/GifList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export function GifsApp() {

    const {gifs, previousTerms, handleSearch, handleTermClicked} = useGifs();

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
                gifs={gifs} />
        </>
    )
}
