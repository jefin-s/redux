import React, { useReducer } from 'react'

const Usereducer = () => {

    const initialvalue={
        fcounter:0
    }
    const reducer=(state=initialvalue,{type,value})=>{
        switch(type)
        {
           case "increment":
              return {...state,fcounter:state.fcounter+1}
              case "decrement":
                 return {...state,fcounter:state.fcounter-1}
              case "reset":
                 return {...state,fcounter:0}
                 default:
                    return state
        }

    }
    const[counter,dispatch]=useReducer(reducer,initialvalue)
  return (
    <div>
        {counter.fcounter}
         <button onClick={()=>dispatch({type:"increment"})}>incremnet</button>
         <button onClick={()=>dispatch({type:"decrement"})}>decremnet</button>
         <button onClick={()=>dispatch({type:"reset"})}> Reset</button>
    </div>
  )
}

