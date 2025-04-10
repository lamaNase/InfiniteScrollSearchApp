import telegraIcon from "./telegram.svg";
import Classes from "./joinTelegram.module.css";

function JoinTelegram () {
    return (
        <button className={Classes.joinTelegram}>
            <img style={{width: 20+'px'}} src={telegraIcon} alt="telegram icon" />
            <p>انضم لقناة التيلجرام</p>
        </button>
    );
}

export default JoinTelegram;