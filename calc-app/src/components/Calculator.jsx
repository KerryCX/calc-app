import {ButtonsGrid} from "./ButtonsGrid";
import './Calculator.css';
import { useEffect, useState } from "react";

export const Calculator = () => {

  const [count, setCount] = useState(0);
  useEffect(()=> console.log(count))

    return(
        <div className="calculator-container">
          <ButtonsGrid />
          <h1>This is {count}</h1>
          <button onClick={()=>setCount(count+1)}>Click Me</button>
        </div>
    );
}