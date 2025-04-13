import HomeHeader from "../homeHeader/homeHeader";
import SearchResultsHeader from "../searchResultsHeader/searchResultsHeader";
import { useLocation } from "react-router-dom";

function MainHeader() {
    const location = useLocation();
    const currentPage = location.pathname;

    if (currentPage === "/") {
        return <HomeHeader />
    } else if (currentPage == "/searchResults") {
        return <SearchResultsHeader />
    } else {
        return <div></div>;
    }
}

export default MainHeader;