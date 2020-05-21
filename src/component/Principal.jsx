import React, { useState } from 'react';


function Principal() {
    const [physique, setPhysique] = useState(10);
    const [social, setSocial] = useState(10)
    const [mental, SetMental] = useState(10)
    const [point, Setpoint]= useState(70)


if (physique < 10 ){
    setPhysique(10)
}
if (social < 10){
    setSocial(10)
}
if (mental < 10){
    SetMental(10)
}

if (physique > 50 ){
    setPhysique(50)
}
if (social > 50){
    setSocial(50)
}
if (mental > 50){
    SetMental(50)
}

let addphysique =()=>{
    setPhysique(physique + 1)
    Setpoint(point-1) 
}
let addSocial =()=>{
    setSocial(social + 1)
    Setpoint(point-1) 
}
let addMental =()=>{
    SetMental(mental + 1)
    Setpoint(point-1) 
}
let unphysique =()=>{
    setPhysique(physique - 1)
    Setpoint(point+1) 
}
let unSocial =()=>{
    setSocial(social - 1)
    Setpoint(point+1) 
}
let unMental =()=>{
    SetMental(mental - 1)
    Setpoint(point+1) 
}



  return (
    <div>
    {physique !==50 && point >0 &&
      <button onClick={() => addphysique()}>Physique +1</button>}
    {physique >=11 && point <70 &&
      <button onClick={() => unphysique()}>Physique -1</button>}
    {social !==50 &&  point >0 &&
      <button onClick={() => addSocial()}>Social +1</button>}
    {social >=11 &&  point <70 &&
      <button onClick={() => unSocial()}>Social -1</button>}
    {mental !==50 && point >0 &&
      <button onClick={() => addMental()}>Mental +1</button>}
    {mental >=11 && point <70 &&
      <button onClick={() => unMental()}>Mental -1</button>}

      <p>Physique:</p>
      <p>{physique}</p>
      <p>Social:</p>
      <p>{social}</p>
      <p>Mental:</p>
      <p>{mental}</p>
    </div>
  )
}

export default Principal