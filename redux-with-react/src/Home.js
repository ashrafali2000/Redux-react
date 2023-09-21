import { useSelector, useDispatch } from 'react-redux';
import './Home.css';
import { Product_Buy, Product_Sell } from './store/actions'; 

function Home() {
 const product = useSelector(state => state.products);
 const dispatch = useDispatch();

 const sellHandler = () => {
   dispatch({type: Product_Sell, payload: prompt("How many Product do you sell")});
 }

 const buyHandler = () => {
   dispatch({type: Product_Buy , payload: prompt("How many Product do you buy")});
 }
  return (
    <div className="App">
      <h1>New Products</h1>
      <h3>We are using the (react-redux && redux) in this Project</h3>
      <h2>Products : {product}</h2>
      <div>

      <button onClick={sellHandler}>Sell</button>
      <button onClick={buyHandler}>Buy</button>

      </div>
    </div>
  );
}

export default Home;
