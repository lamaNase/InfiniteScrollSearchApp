import Logo from "../../components/logo/logo"
import MyPlane from "../../components/myPlane/myPlane"
import MyLibrary from "../../components/myLibrary/myLibrary"
import MyRevision from "../../components/revision/myRevision"
import Forms from "../../components/forms/forms"
import Levels from "../../components/levels/levels"
import Search from "../../components/search/search"
import Login from "../../components/login/login"

import Classes from "./navigationbar.module.css"

function Navigationbar() {
    return (
        <header className={Classes.header}>
            <div className={Classes.rightSide}>
                <Logo />
                <div className={Classes.headerButtons}>
                    < MyPlane />
                    < MyLibrary />
                    < MyRevision />
                    < Forms />
                    < Levels />
                </div>
            </div>
            <div className={Classes.leftSide}>
                <Search />
                <div className={Classes.rectangle}></div>
                < Login />
            </div>
        </header>
    );
}

export default Navigationbar;