import {Button} from './Button.jsx';
import './ButtonsGrid.css';
import {useEffect, useState} from 'react';

export const ButtonsGrid = () => {


  const calculatorKeys = ['0','2','3','4','5','6','7','8','9','-','0','+','X','=','/']
  const [newDisplay, setDisplay] = useState([])
  const [newRightSide, setRightSide] = useState([])
  const [lefty, setLefty] = useState([])
  const [righty, setRighty] = useState([])
  const [operator, setOperator] = useState("")
  const [operator2, setOperator2] = useState("")
  const [leftSet, setLefts] = useState(false)
  const [rightSet, setRights] = useState(false)

  useEffect(()=> console.log(lefty, righty))
  useEffect(()=> {
    if(operator === "+" && operator2 !== "=") {
      setLefts(true)
    } else if (operator2 === "=") {
      setRights(true)
      calculate(lefty, operator, righty)
    }
  }, [operator, operator2, leftSet, rightSet, lefty, righty])



  const childToParent = (sentKeyValue) => {
    //puts the number just input into the display variable newDisplay
    if(leftSet === false)
      setDisplay([...newDisplay, sentKeyValue])
    else {
      setRightSide([...newRightSide, sentKeyValue])
      setDisplay([...newDisplay, sentKeyValue])
    }

    if(sentKeyValue === "+" || sentKeyValue === "-" || sentKeyValue === "+" || sentKeyValue === "X") {
      setLefty([...lefty, newDisplay])
      setOperator(sentKeyValue)
    } else if (sentKeyValue === "=") {
      setRighty([...righty, newRightSide])
      setOperator2(sentKeyValue)
    }   
  }

  const calculate = (ap1, ap2, ap3) => {
    console.log(ap1, ap2, ap3)
    let leftValue = ""
    let rightValue = ""
    let result = 0
    for (let i = 0; i<ap1.length; i++) {
      console.log(i, ap1[i])
      leftValue = leftValue + ap1[i]
    }
    let value1 = leftValue.replace(/,/g, "")

    for (let i = 0; i<ap3.length; i++) {
      rightValue = rightValue + ap3[i]
    }
    let value2 = rightValue.replace(/,/g, "")

    console.log(value1, ap2, value2)
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