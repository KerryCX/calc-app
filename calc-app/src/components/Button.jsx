import './Button.css';
import {useState} from 'react';

export const Button = (props) => {
    const [newValue, setValue] = useState('')
    return(

        <button className = {props.class} onClick = { () => {
            console.log(props.value)
            const newNumber = props.value
            setValue(newNumber)
            console.log(newNumber)
            console.log(newValue)
        }}>{props.value}
        </button>
    );
}