import { useState } from "react";
import GifList from "./gifs/GifsComponents/GifList/GifList";
import { PreviousSearches } from "./gifs/GifsComponents/PreviousSearches/PreviousSearches";
// import { mockGifs } from "./mock-data/gifs.mock";
import CustomHeader from "./shared/components/CustomHeader/CustomHeader";
import CustomSearchBar from "./shared/components/CustomSearchBar/CustomSearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";


export default function GifsApp() {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifsState, setGifsState] = useState<Gif[]>([]);
    const handleTermClicked = (term: string) => {
        console.log({ term });
    };

    const handleSearch = async (query: string) => {
        // Elimina espacios y pone a minúsculas
        query = query.trim().toLowerCase();

        // Valida que el query no esté vacío
        if (!query) return;

        // Valida si hay duplicados
        if (previousTerms.includes(query)) return;

        // Añade términos al array
        setPreviousTerms([query, ...previousTerms].splice(0, 8));
        const gifs = await getGifsByQuery(query);
        setGifsState(gifs);
    };
    return (
        <>
            <CustomHeader title="Buscador de gifs" description="Descubre y comparte el gif perfecto" />

            <CustomSearchBar placeholder="Busca lo que quieras" buttonText="Buscar" onQuery={(query: string) => handleSearch(query)} />

            <PreviousSearches previousSearches={previousTerms} onLabelClick={handleTermClicked} />

            <GifList gifData={gifsState} />
        </>
    );
}
