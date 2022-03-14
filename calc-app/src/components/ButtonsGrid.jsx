import {Button, ResetButton, EqualsButton} from './Button.jsx';
import './ButtonsGrid.css';
import {useEffect, useState} from 'react';

export const ButtonsGrid = () => {

  const calculatorKeys = ['1','2','3','4','5','6','7','8','9','-','0','+','X','+/-','/']
  const [newDisplay, setDisplay] = useState([])
  const [newRightSide, setRightSide] = useState([])
  const [lefty, setLefty] = useState([])
  const [righty, setRighty] = useState([])
  const [operator, setOperator] = useState("")
  const [resultRequested, setResultRequested] = useState(false)
  const [leftSet, setLefts] = useState(false)
  const [rightSet, setRights] = useState(false)

  useEffect(()=> {
    if((operator === "+" || operator === "-" || operator === "X" || operator === "/" ) && resultRequested === false) {
      setLefts(true)
    } else if (resultRequested === true) {
      console.log("jj")
      setDisplay(calculate(lefty, operator, righty))
    }
  }, [operator, resultRequested, leftSet, rightSet, lefty, righty])

  const resetCalculator = () => {
    setDisplay([])
    setLefty([])
    setRighty([])
    setOperator("")
    setResultRequested(false)
    setLefts(false)
    setRights(false)
    setRightSide([])
  }

  const requestResult = (sentKeyValue) => {
    //puts the number just input into the display variable newDisplay
    if(leftSet === false){
      return;
    } else {
      setRightSide([...newRightSide, sentKeyValue])
      setDisplay([...newDisplay, sentKeyValue])
      setRighty([...righty, newRightSide])
      setResultRequested(true)
      setRights(true)
    }
  }

  const keyPressed = (sentKeyValue) => {
    //puts the number just input into the display variable newDisplay
    if(sentKeyValue !== "+/-"){
      if(leftSet === false)
      setDisplay([...newDisplay, sentKeyValue])
      else {
        setRightSide([...newRightSide, sentKeyValue])
        console.log(newDisplay)
        setDisplay([...newDisplay, sentKeyValue])
      }
    }

    if(sentKeyValue === "+" || sentKeyValue === "-" || sentKeyValue === "X" || sentKeyValue === "/") {
      console.log(lefty)
      setLefty([...lefty, newDisplay])
      console.log(lefty)
      setOperator(sentKeyValue)
    } else if (sentKeyValue === "+/-") {
      if(lefty<0) {
        let oi = (lefty * -1)
        setLefty(oi)
      } else {
        let oi = (lefty * -1)
        setLefty(oi)
      }
      //need to work out what to do here
    } 
  }

  const calculate = (num1, operator, num3) => {
    let result = 0
    let value1 = parseFloat((num1.toString()).replace(/,/g, ""))
    let value2 = parseFloat((num3.toString()).replace(/,/g, ""))

    //preps the equation to begin again with the result as the left side
    setResultRequested(false)
    //right side is now blank
    setRightSide([])
    //set right side to false so that it needs a new number
    setRights(false)
    setRighty([])
    //clears left side so it can be loaded with the new result
    setLefty([])
    setOperator("")
    setLefts(false)
    setDisplay([])

console.log("kk")
    switch(operator) {
      case "+":
        result = value1 + value2
        break;
      case "-":
        result = value1 - value2
        break;
      case "X":
        result = value1 * value2
        break;
      case "/":
        result = value1 / value2
        break;
      default:
        break;
    }
    return result.toString();
  }

  return(
    <section className='grid-styling'>
      { calculatorKeys.map((currentKey, index) => (
        <Button
          key={index}
          value={currentKey}
          symbolStyle='button-symbol'
          keyPressed = { keyPressed }            
        />
      ))}
      <div className="display-position display-answer">{newDisplay}</div>
      <ResetButton
        value={"Reset"}
        symbolStyle="button-symbol"
        resetCalculator={resetCalculator}/>
      <div className="equals-position">
        <EqualsButton
        value={"="}
        symbolStyle="equals-symbol"
        requestResult={requestResult}/>
      </div>
    </section>
   );

}