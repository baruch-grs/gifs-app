import { useEffect, useState } from "react";

interface CustomSearchBarProps {
    placeholder: string;
    buttonText: string;
    onQuery: (query: string) => void;
}

export default function CustomSearchBar({ placeholder = "Buscar", buttonText, onQuery }: CustomSearchBarProps) {

    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
        setQuery('');
    };

    const handleEnterKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={({ target }) => setQuery(target.value)}
                onKeyDown={handleEnterKeyDown}
            />
            <button onClick={handleSearch}>{buttonText}</button>
        </div>
    );
}
