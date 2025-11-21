    const redux = require("redux");
 const thunkMiddle = require("redux-thunk").default || require("redux-thunk").thunk;

    const axios = require("axios");

    const createStore = redux.createStore;
    const applyMiddleware = redux.applyMiddleware;
    // it is an state contain properties
    const initialState = {
    loading: false,
    users: [],
    error: "",
    };
//    this is action types
    const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
    const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
    const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
  

    // this is a action creator   
    const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST,
    };
    };

    const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users,
    };
    };

    const fethUserfailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error,
    };
    };
    const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUEST:
        return { ...state, loading: true };
        case FETCH_USER_SUCCESS:
        return { ...state, loading: false, users: action.payload, error: "" };
        case FETCH_USER_FAILURE:
        return {
            loading: false,
            users: [],
            error: action.payload,
        };
        default:
            return state
    }
    };
    const fethcuser = () => {
        //  it returns a function not an object
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            const users=response.data.map((user)=>user.id)
            dispatch(fetchUserSuccess(users));
        })
        .catch((err) => {
        
            dispatch(fethUserfailure(err.message))
        });
    };
    };

    const store = createStore(reducer, applyMiddleware(thunkMiddle));

    store.subscribe(()=>{console.log(store.getState())})
    store.dispatch(fethcuser()) 
