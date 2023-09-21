import {createStore} from "redux";
import storeReducer from "./reducers/storeReducer";

const store = createStore(storeReducer, {products: 10});

export default store;