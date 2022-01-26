import './Button.css';
import {useState} from 'react';


export const Button = (props) => {
    const [newValue, setValue] = useState('')
console.log(newValue)
    return(
        <button className = {props.class} onClick = { () => {
            const newNumber = props.value
            setValue(props.value)
        }}>{props.value}
        </button>
    );
}