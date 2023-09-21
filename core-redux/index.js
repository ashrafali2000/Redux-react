// const redux = require("redux");
  
// const shopReducer = (state = {soap: 10}, action)  => {
//     // state.soap--   Incorrect way
//     if(action.type === "Sell_Soap"){
//         return {
//             soap: state.soap - 1
//         };
//     }
//     else if(action.type === "Buy_Soap"){
//         return {
//             soap: state.soap + action.payload
//         };
//     }
//     return state;
// }

// const store = redux.createStore(shopReducer)

// const subcriber = () => {
//     const state = store.getState();
//     console.log(state);
// }

// store.subscribe(subcriber);
// store.dispatch({type:"Sell_Soap"})
// store.dispatch({type:"Buy_Soap", payload: 10})



// Own Practice
const redux = require("redux");

const reducer = (state , action) =>{
    if(action.type === "Product_Sell"){
        return {
            products: state.products - 1,
        }
    }
    if(action.type === "Product_Buy"){
        return {
            products: state.products + action.payload,
        }
    }
    return state;
}

const store = redux.createStore(reducer,{products: 10});

const subcribetion = () => {
    const state = store.getState();
    console.log(state);
}
store.subscribe(subcribetion);
store.dispatch({type:"Product_Sell"});
store.dispatch({type:"Product_Buy", payload: 10});


