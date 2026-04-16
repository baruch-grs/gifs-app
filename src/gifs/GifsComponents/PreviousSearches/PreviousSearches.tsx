import type { FC } from "react";

interface PreviousSearchesProps {
    previousSearches: string[];
    onLabelClick: (term: string) => void;
}
export const PreviousSearches: FC<PreviousSearchesProps> = ({ previousSearches, onLabelClick }: PreviousSearchesProps) => {

    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    previousSearches.map((search, index) => (
                        <li key={index} onClick={() => onLabelClick(search)}>{search}</li>
                    ))
                }
            </ul>
        </div>
    );
};
