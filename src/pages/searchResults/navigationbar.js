import Logo from "../../components/logo/logo"
import Search from "../../components/search/search"
import QuestionsBank from "../../components/questionsBank/questionsBank"
import JoinTelegram from "../../components/joinTelegram/joinTelegram"
import Classes from "./navigationbar.module.css"
import Login from "../../components/login/login"

function Navigationbar() {
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

export default Navigationbar;