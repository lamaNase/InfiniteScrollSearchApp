import searchIcon from "./search.svg";
import Claasses from "./drsvh.module.css";

function Search (props) {
    return (
        <img 
            src={searchIcon}   
            alt="search icon"
            className={Claasses.search}
            style={props.style}
            onClick={props.onClick}
        />
    );
}

export default Search;