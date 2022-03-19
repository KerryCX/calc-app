import {Button, ResetButton, EqualsButton} from './Button.jsx';
import './ButtonsGrid.css';
import {useEffect, useState} from 'react';

//if in an equation, x + ValY = z, x is 
export const ButtonsGrid = () => {

  const calculatorKeys = ['1','2','3','4','5','6','7','8','9','-','0','+','X','+/-','/']
  const [display, setDisplay] = useState(["0"])
  const [tempY, setTempY] = useState([])
  const [x, setX] = useState([])
  const [valY, setY] = useState([])
  const [operator, setOperator] = useState("")
  const [newOperator, setNewOperator] = useState("")
  const [resultRequested, setResultRequested] = useState(false)
  const [xSet, setXBoolean] = useState(false)
  const [ySet, setYBoolean] = useState(false)
  const [sign, setSign] = useState("")

  useEffect(()=> {    
    if((operator === "+" || operator === "-" || operator === "X" || operator === "/" ) && resultRequested === false) {
      setXBoolean(true)
    } else if (resultRequested) {
      setDisplay(calculate(x, operator, valY))
    }
  }, [operator, resultRequested, xSet, ySet, x, valY, display, newOperator])

  useEffect(() => {
    if (operator === "" && newOperator !== ""){
      console.log(newOperator)
      setDisplay([...display, newOperator])
      setNewOperator("")
    }
  }, [operator, newOperator, display])

  const resetCalculator = () => {
    setDisplay(["0"])
    setX([])
    setY([])
    setOperator("")
    setResultRequested(false)
    setXBoolean(false)
    setYBoolean(false)
    setTempY([])
    setSign("")
  }

  const requestResult = (sentKeyValue) => {
    //triggered when the = button is pressed it.
    //if operator +,-,/ or X has not been entered, it does nothing. 
    //If operator +,/,- or X entered, it sets the second part of the equation, 
    //ready for calculate to be called.
    console.log(sentKeyValue)
    if(xSet){     
      setTempY([...tempY, sentKeyValue])
      setDisplay([...display, sentKeyValue])
      setY([...valY, tempY])
      setResultRequested(true)
      setYBoolean(true)
      if(sentKeyValue !== "=") {
        setNewOperator(sentKeyValue)
      }
      
    }
  }

  const keyPressed = (sentKeyValue) => {
    //puts the number just input into the display variable display
    if(sentKeyValue !== "+/-"){
      if(xSet === false) {
        display[0] === "0" ? setDisplay(sentKeyValue) : setDisplay([...display, sentKeyValue])    
      } else {
        //first (left) part of equation is chosen, so putting the new values in second (right) part of the equation
        setTempY([...tempY, sentKeyValue])
        setDisplay([...display, sentKeyValue])
        setYBoolean(true)
      }
    }

    if(sentKeyValue === "+" || sentKeyValue === "-" || sentKeyValue === "X" || sentKeyValue === "/") {
      if(xSet && ySet){
        requestResult(sentKeyValue)
      } else if (xSet === false){
          //if x is not set yet, set it here and next valY will be loaded
          setX([...x, display])
          setOperator(sentKeyValue)  
          setXBoolean(true)
      }
    } else if (sentKeyValue === "+/-") {
      if(sign === ""){
        if (display[0] !== "0") {
          setSign("-")
          if(!xSet){
            setX([...x, "-"])
          }
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
    setTempY([])
    //set right side to false so that it needs a new number
    setYBoolean(false)
    setY([])
    //clears left side so it can be loaded with the new result
    setX([])
    setOperator("")
    setSign("")
    setXBoolean(false)
    
    setDisplay([])

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
      <div className="display-position display-answer">{ sign }{ display }</div>
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