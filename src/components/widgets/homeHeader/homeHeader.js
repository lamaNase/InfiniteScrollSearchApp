import Logo from "~/components/UI/logo/logo"
import Search from "~/components/UI/search/search"
import Login from "~/components/UI/login/login"
import HeaderButtons from "~/components/UI/headerButtons/headerButtons"
import Classes from "./homeHeader.module.css"

function HomeHeader(props) {
    return (
        <div className={props.className}>
            <header className={Classes.header}>
                <div className={Classes.rightSide}>
                    < Logo className={Classes.logo}/>
                    <div className={Classes.headerButtons}>< HeaderButtons/></div>
                </div>
                <div className={Classes.leftSide}>
                    <Search />
                    <div className={Classes.rectangle}></div>
                    < Login />
                </div>
            </header>
        </div>
    );
}

export default HomeHeader;