import Logo from "../../UI/logo/logo"
import Search from "../../UI/search/search"
import Login from "../../UI/login/login"
import myPlane from "../../../assetes/myPlane.svg"
import myLibrary from "../../../assetes/myLibrary.svg"
import myRevision from "../../../assetes/revision.svg"
import forms from "../../../assetes/forms.svg"
import levels from "../../../assetes/levels.svg"
import HeaderButton from "../../UI/headerButton/headerButton"

import Classes from "./mainHeader.module.css"

function MainHeader() {
    return (
        <header className={Classes.header}>
            <div className={Classes.rightSide}>
                < Logo />
                <div className={Classes.headerButtons}>
                    < HeaderButton srcIcon={myPlane} text="خطتي" />
                    < HeaderButton srcIcon={myLibrary} text="مكتبتي" />
                    < HeaderButton srcIcon={myRevision} text="مراجعة" />
                    < HeaderButton srcIcon={forms} text="نماذج" />
                    < HeaderButton srcIcon={levels} text="مستويات" />
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

export default MainHeader;