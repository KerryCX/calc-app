import {Button} from './Button.jsx';
import './ButtonsGrid.css';
import {useState} from 'react';

export const ButtonsGrid = () => {

   const [keyedValue, setKeyValue] = useState('');
   const childToParent = (sentKeyValue) => {
        setKeyValue(sentKeyValue);
   }

   return(
       <section className='grid-styling'>
           <Button
            value={'1'}
            childToParent={childToParent}
           />
           <Button
               value={'2'}
               childToParent={childToParent}
           />
           <Button
               value={'3'}
               childToParent={childToParent}
           />
           <Button
               value={'4'}
               childToParent={childToParent}
           />
           <Button
               value={'5'}
               childToParent={childToParent}
           />
           <Button
               value={'6'}
               childToParent={childToParent}
           />
           <Button
               value={'7'}
               childToParent={childToParent}
           />
           <Button
               value={'8'}
               childToParent={childToParent}
           />
           <Button
               value={'9'}
               childToParent={childToParent}
           />
           <Button
               value={'-'}
               classy={'button-symbol'}
               childToParent={childToParent}
           />
           <Button
                value={'0'}
                childToParent={childToParent}
           />
           <Button
               value={'+'}
               classy={'button-symbol'}
               childToParent={childToParent}
           />
           <Button
               value={'X'}
               classy={'button-symbol'}
               childToParent={childToParent}
           />
           <Button
               value={'='}
               classy={'button-symbol'}
               childToParent={childToParent}
           />
           <Button
               value={'/'}
               classy={'button-symbol'}
               childToParent={childToParent}
           />
            <div className="white">{keyedValue}</div>
       </section>
   );
}