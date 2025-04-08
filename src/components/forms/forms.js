import Classes from "./forms.module.css";
import formsIcon from "./forms.svg";

function Forms() {
    return (
        <button className={Classes.forms}>
            < img src={formsIcon} alt="forms" />
            <p>نماذج</p>
        </button>
    );
}

export default Forms;