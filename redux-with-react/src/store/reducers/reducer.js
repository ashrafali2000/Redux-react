import { Product_Buy,Product_Sell } from "../actions";

const reducer = (state, action) => {
    if(action.type === Product_Sell){
       return  {products: state.products - 1}
    }
    if(action.type === Product_Buy){
       return  {products: state.products + action.payload}
    }
    return state;
}

export default reducer;