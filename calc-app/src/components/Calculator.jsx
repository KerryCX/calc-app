import {ButtonsGrid} from "./ButtonsGrid";
import {DisplayAnswer} from "./DisplayAnswer";
import './Calculator.css';

export const Calculator = () => {
    return(
        <div className="calculator-container">
                <ButtonsGrid />
                <DisplayAnswer
                    answer={'00000'} />
        </div>
    );
}