import React from 'react';


function Dice(props) {



  return (
    <div>
      <p> {(Math.floor((Math.random() * props.maxDiceValue) + 1))}
      </p>
    </div>
  );
}

export default Dice