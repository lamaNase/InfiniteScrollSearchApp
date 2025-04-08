import Classes from "./myRevision.module.css";
import myRevisionIcon from "./revision.svg";

function MyRevision() {
    return (
        <button className={Classes.myRevision}>
            < img src={myRevisionIcon} alt="my revision" />
            <p>مراجعة</p>
        </button>
    );
}

export default MyRevision;