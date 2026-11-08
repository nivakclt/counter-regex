
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementByValue,
  incrementCounter,
  resetCounter,
  decrementCounter
} from './redux/slices/counterSlice';
import './CounterPage.css';

function CounterPage() {
  const [inpvalue, setInpValue] = useState('');

  const { counter } = useSelector(
    (state) => state.counterReducer
  );

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (inpvalue !== '' && Number.isFinite(Number(inpvalue))) {
      dispatch(incrementByValue(Number(inpvalue)));
      setInpValue('');
    }
  };

  return (
    <main className="counter-page">
      <div className="counter-card">

        <div className="counter-header">
          
          <h1>Counter App</h1>
       
        </div>

        <div className="counter-display">
          <span>Current Value</span>
          <h2>{counter}</h2>
        </div>

        <div className="counter-actions">
          <button
            className="action-btn increment"
            onClick={() => dispatch(incrementCounter())}
          >
            + Increment
          </button>

          <button
            className="action-btn reset"
            onClick={() => dispatch(resetCounter())}
          >
            Reset
          </button>

          <button
            className="action-btn decrement"
            onClick={() => dispatch(decrementCounter())}
          >
            − Decrement
          </button>
        </div>

        <div className="custom-section">
          <label>Custom Increment</label>

          <div className="input-group">
            <input
              type="number"
              value={inpvalue}
              onChange={(e) => setInpValue(e.target.value)}
              placeholder="Enter a number"
            />

            <button onClick={handleSubmit}>
              Add Value
            </button>
          </div>
        </div>

        <div className="counter-footer">
          Built with React & Redux Toolkit
        </div>

      </div>
    </main>
  );
}

export default CounterPage;
