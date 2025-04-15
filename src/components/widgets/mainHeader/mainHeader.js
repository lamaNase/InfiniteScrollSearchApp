import HomeHeader from "../homeHeader/homeHeader";
import SearchResultsHeader from "../searchResultsHeader/searchResultsHeader";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../../routes/routeConstants";

function MainHeader() {
    const { pathname } = useLocation();

    if (pathname === ROUTES.HOME) {
        return <HomeHeader />;
    } else if (pathname === ROUTES.SEARCH_RESULTS) {
        return <SearchResultsHeader />;
    } else {
        return <div></div>;
    }
}

export default MainHeader;