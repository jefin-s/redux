import { legacy_createStore as createStore } from "redux";

import { cakeReducer } from "./cake/Cakereudcer";
const store=createStore(cakeReducer)

export default store

// we camn providee this store into react application
