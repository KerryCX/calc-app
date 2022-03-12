import {Button} from './Button.jsx';
import './ButtonsGrid.css';
import {useState} from 'react';

export const ButtonsGrid = () => {


  const calculatorKeys = ['0','2','3','4','5','6','7','8','9','-','0','+','X','=','/']
  const [newDisplay, setDisplay] = useState([])
  const [lefty, setLefty] = useState([])
  const [righty, setRighty] = useState([])
  const [operator, setOperator] = useState("")

  const childToParent = (sentKeyValue) => {
    //puts the number just input into the display variable newDisplay
    setDisplay([...newDisplay, sentKeyValue])

    if(sentKeyValue === "+" || sentKeyValue === "-" || sentKeyValue === "+" || sentKeyValue === "X") {
      setLefty([...lefty, newDisplay])
      setOperator(sentKeyValue)
      
      console.log(lefty)
    } else if (sentKeyValue === "=") {
      setRighty([...righty, newDisplay])
      calculate(lefty, operator, righty)
    }   
  }

  const calculate = (ap1, ap2, ap3) => {
    console.log(ap1, ap2, ap3)
  }

  return(
    <section className='grid-styling'>
      {calculatorKeys.map((currentKey, index) => (
        <Button
          key={index}
          value={currentKey}
          symbolStyle='button-symbol'
          childToParent={childToParent}            
        />
      ))}
      <div className="display-position display-answer">{newDisplay}</div>
    </section>
   );

}