import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Classes from "./searchForm.module.css";
import Search from "~/components/UI/search/search";
import SuggestionsList from "~/components/UI/suggestionsList/suggestionsList";
import { ROUTES } from "~/routes/routeConstants";

function SearchForm () {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [showMenu, setShowMenu] = useState(false);

    const navigate = useNavigate();
    const inputRef = useRef();

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
        const filtered = history.filter(item =>
            item.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filtered);
        setShowMenu(filtered.length > 0);
        setActiveIndex(-1); // Reset selection
    };

    const handleSearch = (event, customQuery) => {
        event.preventDefault();
        const searchQuery = customQuery || query;

        if (!searchQuery) return;

        const oldSearches = JSON.parse(localStorage.getItem("searchHistory")) || [];
        if (!oldSearches.includes(searchQuery)) {
            oldSearches.unshift(searchQuery);
        }
        const updatedSearches = oldSearches.slice(0, 10);
        localStorage.setItem("searchHistory", JSON.stringify(updatedSearches));

        console.log("Searching for:", searchQuery);
        navigate(`${ROUTES.SEARCH_RESULTS}?query=${encodeURIComponent(searchQuery)}`)
    };

    const handleKeyDown = (e) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex(prev => {
                const nextIndex = (prev + 1) % suggestions.length;
                setQuery(suggestions[nextIndex]);
                return nextIndex;
            });
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex(prev => {
                const nextIndex = (prev - 1 + suggestions.length) % suggestions.length;
                setQuery(suggestions[nextIndex]);
                return nextIndex;
            });
        } else if (e.key === "Enter") {
            e.preventDefault();
            if (activeIndex >= 0) {
                const selected = suggestions[activeIndex];
                setQuery(selected);
                setSuggestions([]);
                setShowMenu(false);
                handleSearch(e, selected);
            } else {
                handleSearch(e);
            }
        }
    };

    const handleBlur = () => {
        setShowMenu(false);
    };

    const handleFocus = () => {
        if (suggestions.length > 0) {
            setShowMenu(true);
        }
    };

    const onSuggestionClick = (e, item) => {
        setQuery(item);
        setShowMenu(false);
        handleSearch(e, item);
    };

    return (
        <form className={Classes.form} onSubmit={(e) => handleSearch(e)}>
                <div>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="ابدأ البحث هنا"
                        ref={inputRef}
                    />

                    {showMenu && (
                        <SuggestionsList
                            suggestions={suggestions}
                            activeIndex={activeIndex}
                            onSuggestionClick={onSuggestionClick}
                        />
                    )}
                </div>
                < Search
                    className={Classes.searchIcon}
                    onClick={(e) => handleSearch(e)}
                    style={{ cursor: "pointer" }}
                />
            </form>
    );
}

export default SearchForm;