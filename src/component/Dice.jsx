import React, { useState } from 'react';


function Dice() {
    const [curentDiceValue, setCurentDiceValue] = useState(null);
    const [curentMaxDiceValue, setCurentMaxDiceValue] = useState(0);
  

    return (
        <div>
            <input  type="number"  onChange={(event)=> setCurentMaxDiceValue(event.target.value)} />
            <button onClick={()=> setCurentDiceValue (Math.floor((Math.random() * curentMaxDiceValue) + 1) )} >Set</button>
            <p> {curentDiceValue}</p>
        </div>
      );
    }

  export default Dice