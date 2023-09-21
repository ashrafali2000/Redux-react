import { useSelector, useDispatch } from 'react-redux';
import './Home.css';

function Home() {
 const product = useSelector(state => state.products);
 const dispatch = useDispatch();

 const sellHandler = () => {
   dispatch({type:"Product_Sell"});
 }

 const buyHandler = () => {
   dispatch({type:"Product_Buy", payload: 10});
 }
  return (
    <div className="App">
      <h1>The Home Page</h1>
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
