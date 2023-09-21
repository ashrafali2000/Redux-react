import { Product_Buy,Product_Sell } from "../actions";

const storeReducer = (state, action) => {
    if(action.type === Product_Sell && action.payload > 0){
      alert(`${action.payload}, Products will be less`)
       return  {products: state.products - action.payload}
    }
    if(action.type === Product_Buy && action.payload > 0){
      alert(`${action.payload}, Products will be added`)
       return  {products: state.products + +action.payload}
    }
    return state;
}

export default storeReducer;