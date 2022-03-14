import './Button.css';
import {useState} from 'react';

export const Button = ({ value, symbolStyle, keyPressed }) => {

    const [newValue, setValue] = useState(value)

    return(
        /*dd*/
        <button className = { symbolStyle } onClick = { () => {
            setValue(value)/*dd*/
            keyPressed(newValue)
        }}>{value}
        </button>
    );
}

export const ResetButton = ({value, symbolStyle, resetCalculator}) => {
//resets all fields
    return(
        <button className= { symbolStyle } onClick = { () => {
            resetCalculator()
        }}>{value}</button>
    )
}

export const EqualsButton = ({ value, symbolStyle, requestResult }) => {
  //resets all fields
  const [newValue, setValue] = useState(value)
    return(
      <button className= { symbolStyle } onClick = { () => {
        setValue(value)
        requestResult(newValue)
    }}>{value}</button>
  )
}

