import {Button} from './Button.jsx';
import './ButtonsGrid.css';

export const ButtonsGrid = () => {
   return(
       <section className='grid-styling'>
           <Button className ="item1"
            value={'1'}
           />
           <Button
               value={'2'}
           />
           <Button
               value={'3'}
           />
           <Button
               value={'4'}
           />
           <Button
               value={'5'}
           />
           <Button
               value={'6'}
           />
           <Button
               value={'7'}
           />
           <Button
               value={'8'}
           />
           <Button
               value={'9'}
           />
           <Button
               value={'X'}
           />
           <Button
                value={'0'}
           />
           <Button
               value={'+'}
           />
       </section>
   );
}