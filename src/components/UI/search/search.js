import searchIcon from "./search.svg";

function Search (props) {
    return (
        <img 
            src={searchIcon}   
            alt="search icon"
            className={props.className}
            style={props.style}
            onClick={props.onClick}
        />
    );
}

export default Search;