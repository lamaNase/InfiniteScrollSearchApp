import Logo from "~/components/UI/logo/logo"
import Search from "~/components/UI/search/search"
import QuestionsBank from "~/components/UI/questionsBank/questionsBank"
import JoinTelegram from "~/components/UI/joinTelegram/joinTelegram"
import Classes from "./searchResultsHeader.module.css"
import Login from "~/components/UI/login/login"

function SearchResultsHeader() {
    return (
        <header className={Classes.header}>
            < Logo />
            <div>
                < Search />
                <div className={Classes.rectangle}></div>
                < QuestionsBank />
                < JoinTelegram />
                < Login />
            </div>
        </header>
    );
}

export default SearchResultsHeader;