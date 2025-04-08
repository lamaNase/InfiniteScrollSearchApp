import Classes from "./question.module.css"

function Question (props) {
    return (
        <li className={Classes.li} key={props.id}>
            {props.question.title}
        </li>
    );
}

export default Question;