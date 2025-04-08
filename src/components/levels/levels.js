import Classes from "./levels.module.css";
import levelsIcon from "./levels.svg";

function Levels() {
    return (
        <button className={Classes.levels}>
            < img src={levelsIcon} alt="levels" />
            <p>مستويات</p>
        </button>
    );
}

export default Levels;