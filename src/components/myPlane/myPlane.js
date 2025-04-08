import Classes from "./myPlane.module.css";
import myPlaneIcon from "./logo.svg";

function MyPlane() {
    return (
        <button className={Classes.myPlane}>
            < img src={myPlaneIcon} alt="my plane" />
            <p>خطتي</p>
        </button>
    );
}

export default MyPlane;