import React, { useState } from 'react';
import Dice from './Dice'


function Multidices() {
    const [curentMaxDiceValue, setCurentMaxDiceValue] = useState(0);
    const [multiple, setMultiple] = useState(0)
    const[print, setPrint]= useState(false)

    var rows = [];
    for (let i = 0; i < multiple; i++) {
        rows.push(<Dice maxDiceValue={curentMaxDiceValue} key={i} />);
    }
    return (
        <div>
            <input type="number" onChange={(event) => setMultiple(event.target.value)} />
            <input type="number" onChange={(event) => setCurentMaxDiceValue(event.target.value)} />
            <button onClick={() => setPrint(true)}>set</button>
            {print && (
                <div>{rows}</div>
            )}
            
        </div>
    );
}

export default Multidices