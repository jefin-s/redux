const { act } = require("react");
const redux = require("redux");
const reduxlogger=require('redux-logger')
const createStore = redux.createStore;
const combinedreducer=redux.combineReducers
const applyMiddleware= redux.applyMiddleware
const logger=reduxlogger.createLogger()

const initialSum={
    initialSums:0
}


const initialdecr={
    initialdecrs:0
}


function increment(){
    return{
        type:"increment"
    }

}

function decrement(){
    return{
        type:"decrement"
    }

}

const sumreducer=(state=initialSum,action)=>{
    switch(action.type)
    {
        case "increment" :
            return{...state,initialSums:state.initialSums+1}
            default:
                return  state
    }

}

const decrreducer=(state=initialdecr,action)=>{
       

        switch(action.type)
        {

            case "decrement" :
                return{...state,initialdecrs:state.initialdecrs-1}
                default:
                    return state
        }
    

}
  const  rootreducers=combinedreducer({
     sum:sumreducer,
     subtraction:decrreducer

  })
const store=createStore(rootreducers,applyMiddleware(logger))

console.log("initial state",store.getState())
store.subscribe(()=>{})
  store.dispatch(increment())
  store.dispatch(increment())
  store.dispatch(increment())
  store.dispatch(increment())
  
  store.dispatch(decrement())
  store.dispatch(decrement())
  store.dispatch(decrement())
  store.dispatch(decrement())