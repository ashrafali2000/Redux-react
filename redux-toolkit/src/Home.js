
import './Home.css';
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './features/sliceCreate';

function Home() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="Home">
    <h1>Home Page</h1>
    <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Home;
