import './Button.css';
import {useState} from 'react';

export const Button = (props) => {
    const [newValue, setValue] = useState('0')
    return(

        <button className = {props.class} onClick = { () => {
            console.log(props.value)
            setValue(props.value)
            console.log(newValue)
            }}>{props.value}
        </button>
    );
}