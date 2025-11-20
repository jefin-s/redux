const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";


function buycake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

const initialState = {
  numberoFCakes: 10,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numberoFCakes: state.numberoFCakes - 1 };

    default:
      return state;
  }
};


const store = createStore(reducer);

console.log("Initial state:", store.getState());

store.subscribe(() => console.log("Updated state:", store.getState()));


store.dispatch(buycake());
store.dispatch(buycake());
store.dispatch(buycake());
