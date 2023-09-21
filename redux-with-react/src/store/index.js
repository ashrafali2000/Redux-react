import {createStore} from "redux";
import reducer from "./reducers/reducer";


const store = createStore(reducer, {products: 10});

export default store;