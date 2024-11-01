import * as React from 'react';
import {
  counterReducer,
  decrement,
  increment,
  reset,
} from '../features/counterReducer';

const Counter = () => {
  const [value, setValue] = React.useState(0);

  // Here, we're using a RTK reducer in a React useReducer
  const [counterState, dispatch] = React.useReducer(counterReducer, {
    count: 0,
  });
  return (
    <section className="flex w-2/3 flex-col items-center gap-8 border-4 border-primary-500 bg-white p-8 shadow-lg">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{counterState.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(decrement(1))}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
        <button onClick={() => dispatch(increment(1))}>➕ Increment</button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(increment(value));
            setValue(0);
          }}
        >
          <input
            type="number"
            value={value}
            onChange={(e) => {
              setValue(parseInt(e.target.value, 10));
            }}
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
