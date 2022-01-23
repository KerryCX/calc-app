import './DisplayAnswer.css'
export const DisplayAnswer = (props) => {
    return(
        <div className="display-container">
            <div className="display-answer">{props.answer}</div>
        </div>
    );
}