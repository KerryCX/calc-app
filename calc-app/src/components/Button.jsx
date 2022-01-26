import './Button.css';
import {useState} from 'react';

export const Button = ({value, classy, childToParent}) => {
    const [newValue, setValue] = useState(value)

    return(
        <button className = {classy} onClick = { () => {
        console.log({classy})
            setValue(value)
            childToParent(newValue)
            console.log(newValue)
        }}>{value}
        </button>
    );
}