import Classes from "./headerButton.module.css";

function HeaderButton(props) {
    return (
        <button className={Classes.headerButton}>
            < img src={props.srcIcon} alt={props.text} />
            <p>{props.text}</p>
        </button>
    );
}

export default HeaderButton;