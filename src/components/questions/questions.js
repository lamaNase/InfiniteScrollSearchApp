import Question from "./question"
import Classes from "./questions.module.css"

function Questions (props) {
    return (
        <ul className={Classes.ul}>
            {props.questions.map (q => {
                return <Question question={q}/>
            })}
        </ul>
    );
}

export default Questions;