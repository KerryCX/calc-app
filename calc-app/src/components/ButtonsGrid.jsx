import {Button, ResetButton, EqualsButton} from './Button.jsx';
import './ButtonsGrid.css';
import {useEffect, useState} from 'react';

export const ButtonsGrid = () => {

  const calculatorKeys = ['1','2','3','4','5','6','7','8','9','-','0','+','X','+/-','/']
  const [newDisplay, setDisplay] = useState(["0"])
  const [newRightSide, setRightSide] = useState([])
  const [lefty, setLefty] = useState([])
  const [righty, setRighty] = useState([])
  const [operator, setOperator] = useState("")
  const [resultRequested, setResultRequested] = useState(false)
  const [leftSet, setLefts] = useState(false)
  const [rightSet, validEquation] = useState(false)
  const [sign, setSign] = useState("")
  const [leftSign, setSignLeft] = useState("")
  const [rightSign, setSignRight] = useState("")

  useEffect(()=> {
    if((operator === "+" || operator === "-" || operator === "X" || operator === "/" ) && resultRequested === false) {
      setLefts(true)
    } else if (resultRequested === true) {
      setDisplay(calculate(lefty, operator, righty))
    }
  }, [operator, resultRequested, leftSet, rightSet, lefty, righty])

  useEffect(()=> {
    if(sign === "-"){
     // setSign("+")
      //setDisplay([sign, ...newDisplay])
      console.log(sign, newDisplay)
    } else if (sign === "+"){
      //setSign("-")
      //setDisplay([sign, ...newDisplay])
      console.log(sign)
    }
  }, [sign, newDisplay])

  const resetCalculator = () => {
    setDisplay(["0"])
    setLefty([])
    setRighty([])
    setOperator("")
    setResultRequested(false)
    setLefts(false)
    validEquation(false)
    setRightSide([])
    setSign("")
  }

  const requestResult = (sentKeyValue) => {
    //triggered when the = button is pressed it.
    //if operator +,-,/ or X has not been entered, it does nothing. 
    //If operator +,/,- or X entered, it sets the second part of the equation, 
    //ready for calculate to be called.
    if(leftSet === false){     
      return;
    } else {
      if(newDisplay){
        console.log(newDisplay)
      }
      setRightSide([...newRightSide, sentKeyValue])
      setDisplay([...newDisplay, sentKeyValue])
      setRighty([...righty, newRightSide])
      setResultRequested(true)
      validEquation(true)
    }
  }

  const keyPressed = (sentKeyValue) => {
    //puts the number just input into the display variable newDisplay
    if(sentKeyValue !== "+/-"){
      if(leftSet === false) {
        newDisplay[0] === "0" ? setDisplay(sentKeyValue) : setDisplay([...newDisplay, sentKeyValue])    
      }
      else {
        //first (left) part of equation is chosen, so putting the new values in second (right) part of the equation
        setRightSide([...newRightSide, sentKeyValue])
        setDisplay([...newDisplay, sentKeyValue])
      }
    }

    if(sentKeyValue === "+" || sentKeyValue === "-" || sentKeyValue === "X" || sentKeyValue === "/") {
      console.log(newDisplay)
      setLefty([...lefty, newDisplay])
      console.log(newDisplay)
      console.log(lefty * -1)
      setOperator(sentKeyValue)
    } else if (sentKeyValue === "+/-") {
      if(sign === ""){
        if (newDisplay[0] !== "0") {
          console.log(leftSign, rightSign)
          setSign("-")
          if(leftSet === true){
            setSignRight("-")
          }
          console.log(leftSign, rightSign)
        }
      } else {
        setSign("")
      }
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
    validEquation(false)
    setRighty([])
    //clears left side so it can be loaded with the new result
    setLefty([])
    setOperator("")
    setLefts(false)
    setDisplay([])
console.log(value1, value2)
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
      <div className="display-position display-answer">{ sign }{ newDisplay }</div>
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