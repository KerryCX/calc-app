import {Button} from './Button.jsx';
import './ButtonsGrid.css';
import {useState} from 'react';
import {DisplayAnswer} from "./DisplayAnswer";

export const ButtonsGrid = () => {

   const [keyedValue, setKeyValue] = useState('');
   const childToParent = (sentKeyValue) => {
        setKeyValue(sentKeyValue);
   }
const calculatorKeys = ['1','2','3','4','5','6','7','8','9','-','0','+','X','=','/']

   return(
       <section className='grid-styling'>
            {calculatorKeys.map((currentKey, index) => (
                <Button
                    key={index}
                    value={currentKey}
                    childToParent={childToParent}
                />
                ))}

<div className="white display-position">{keyedValue}</div>
       </section>
   );
}