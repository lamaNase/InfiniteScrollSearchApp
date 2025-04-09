import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Group from "./group.svg";
import Search from "../../components/search/search";
import Classes from "./searchPart.module.css";

function SearchPart() {
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
        navigate(`/searchResults?query=${encodeURIComponent(searchQuery)}`);
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

    return (
        <main className={Classes.main}>
            <img className={Classes.group} src={Group} alt="Group" />
            <form onSubmit={(e) => handleSearch(e)}>
                <div>
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        placeholder="Start search"
                        ref={inputRef}
                    />

                    {showMenu && (
                        <ul>
                            {suggestions.map((item, index) => (
                                <li
                                    key={index}
                                    onMouseDown={(e) => {
                                        setQuery(item);
                                        setShowMenu(false);
                                        handleSearch(e, item); // Trigger search on click
                                    }}
                                    className={`${Classes.suggestionItem} ${index === activeIndex ? Classes.active : ""
                                        }`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                < Search
                    className={Classes.searchIcon}
                    onClick={(e) => handleSearch(e)}
                    style={{ cursor: "pointer" }}
                />
            </form>
        </main>
    );
}

export default SearchPart;