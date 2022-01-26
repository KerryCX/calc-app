import {Button} from './Button.jsx';
import './ButtonsGrid.css';
import {useState} from 'react';
export const ButtonsGrid = () => {

   const calculatorKeys = ['1','2','3','4','5','6','7','8','9','-','0','+','X','=','/']
   const [newDisplay, setDisplay] = useState([]);


   const childToParent = (sentKeyValue) => {
        setDisplay(sentKeyValue)
   }

   return(
       <section className='grid-styling'>
            {calculatorKeys.map((currentKey, index) => (
                <Button
                    key={index}
                    value={currentKey}
                    classy='button-symbol'
                    childToParent={childToParent}
                />
                ))}
            <div className="display-position display-answer">{newDisplay}</div>
       </section>
   );

}