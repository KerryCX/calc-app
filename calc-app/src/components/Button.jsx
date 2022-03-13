import './Button.css';
import {useState} from 'react';

export const Button = ({ value, symbolStyle, childToParent }) => {

    const [newValue, setValue] = useState(value)

    return(
        /*dd*/
        
        <button className = { symbolStyle } onClick = { () => {
            setValue(value)/*dd*/
            childToParent(newValue)
        }}>{value}
        </button>
    );
}

export const ResetButton = ({value, symbolStyle, resetF}) => {
//resets all fields
    return(
        <button className= { symbolStyle } onClick = { () => {
            resetF()
        }}>{value}</button>
    )
}

