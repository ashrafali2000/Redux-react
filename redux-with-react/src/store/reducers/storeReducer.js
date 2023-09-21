import { Product_Buy,Product_Sell } from "../actions";

const storeReducer = (state, action) => {
    if(action.type === Product_Sell){
       return  {products: state.products - action.payload}
    }
    if(action.type === Product_Buy){
       return  {products: state.products + +action.payload}
    }
    return state;
}

export default storeReducer;