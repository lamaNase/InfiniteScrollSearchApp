import myPlane from "~/assetes/myPlane.svg"
import myLibrary from "~/assetes/myLibrary.svg"
import myRevision from "~/assetes/revision.svg"
import forms from "~/assetes/forms.svg"
import levels from "~/assetes/levels.svg"
import HeaderButton from "~/components/UI/headerButton/headerButton"
import Classes from "./headerButtons.module.css"

function HeaderButtons(props) {
    return (
        <div className={Classes.headerButtons}>
            < HeaderButton srcIcon={myPlane} text="خطتي" />
            < HeaderButton srcIcon={myLibrary} text="مكتبتي" />
            < HeaderButton srcIcon={myRevision} text="مراجعة" />
            < HeaderButton srcIcon={forms} text="نماذج" />
            < HeaderButton srcIcon={levels} text="مستويات" />
        </div>
    );
}

export default HeaderButtons;