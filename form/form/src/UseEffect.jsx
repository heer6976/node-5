import React, { useEffect, useState } from 'react'

export default function UseEffect() {

    const[count , setCount] = useState(0);

    useEffect(() => {
        console.log("Mounting...")
    },[]);

    useEffect(() => {
        console.log("Update...")
    },[count]);
    
  return (
    <>
        <h1>UseEffect / Count</h1>
        <h2>Count : {count}</h2>
        <button onClick={() => setCount (count + 1)}>Increment the Count</button>
    </>
  )
}