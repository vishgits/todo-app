import { useReducer, useState } from "react";

function reducer(state:any, action:any) {
    console.log(state, action)
}
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () =>{
    
  }
    return (
    <>
        <button onClick={(e)=>{increment()}}>+</button>
        <span>{count}</span>
        <button>-</button>
    </>
    )
}

export default Counter;