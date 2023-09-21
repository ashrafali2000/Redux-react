const redux = require("redux");
  
const shopReducer = (state = {soap: 10}, action)  => {
    // state.soap--   Incorrect way
    if(action.type === "Sell_Soap"){
        return {
            soap: state.soap - 1
        };
    }
    else if(action.type === "Buy_Soap"){
        return {
            soap: state.soap + action.payload
        };
    }
    return state;
}

const store = redux.createStore(shopReducer)

const subcriber = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subcriber);
store.dispatch({type:"Sell_Soap"})
store.dispatch({type:"Buy_Soap", payload: 10})