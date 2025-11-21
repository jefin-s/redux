const redux = require("redux");
const createStore = redux.createStore;



// action creator for increment
function increment() {
  return {
    type: "increment"
  };
}
//   action creator for decrement 
function decrement(){
  return{
    type:"decrement"
  }
}


const initialState = {
  initialNumber: 10,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, initialNumber: state.initialNumber+1};
    case "decrement":
      return{...state,initialNumber:state.initialNumber-1}
    default:
      return state;
  }
};


const store = createStore(reducer);

console.log("Initial state:", store.getState());

store.subscribe(() => console.log("Updated state:", store.getState()));


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());


 store. dispatch(decrement())
 store. dispatch(decrement())
 store. dispatch(decrement())
 store. dispatch(decrement())
