import Logo from "../../UI/logo/logo"
import Search from "../../UI/search/search"
import QuestionsBank from "../../UI/questionsBank/questionsBank"
import JoinTelegram from "../../UI/joinTelegram/joinTelegram"
import Classes from "./searchResultsHeader.module.css"
import Login from "../../UI/login/login"

function SearchResultsHeader() {
    return (
        <header className={Classes.header}>
            < Logo />
            <div>
                < Search/>
                <div className={Classes.rectangle}></div>
                < QuestionsBank />
                < JoinTelegram />
                < Login />
            </div>
        </header>
    );
}

export default SearchResultsHeader;