import type { Gif } from "../../interfaces/gif.interface";

interface GifListProps {
    gifData: Gif[];
}

export default function GifList({ gifData }: GifListProps) {
    console.log(gifData);

    return (
        <div className="gifs-container">
            {
                gifData.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}
