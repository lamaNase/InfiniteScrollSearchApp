import Classes from "./loading.module.css";

function Loading() {
    return (
        <div className={Classes.overlay}>
            <div className={Classes.loader}></div>
        </div>
    );
}

export default Loading;