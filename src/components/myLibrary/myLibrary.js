import Classes from "./myLibrary.module.css";
import myLibraryIcon from "./myLibrary.svg";

function MyLibrary() {
    return (
        <button className={Classes.myLibrary}>
            < img src={myLibraryIcon} alt="my library" />
            <p>مكتبتي</p>
        </button>
    );
}

export default MyLibrary;