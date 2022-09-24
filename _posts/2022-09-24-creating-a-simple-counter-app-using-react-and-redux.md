---
layout: post
title: "Creating a counter app using React and Redux"
description: "A simple example of how React and Redux could be used together to make a counter app"
date: 2022-09-24
category: development
comments: true
---
Let us first start with making the reducer for the counter app.
In the `features/counter/counterSlice.js` file, write the following code:

```javascript
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    changeValueBy(state, action) {
      const value = action.payload;
      state.count = state.count + value;
    }
  }
});

export const { changeValueBy } = counterSlice.actions;

export const selectCount = (state) => state.counter.count;

export default counterSlice.reducer;
```

In the `features/counter/Counter.js` file, we import the `useSelector` and `useDispatch` hooks from the `react-redux` package. We use the `useSelector` hook to retrieve the `selectCount` variable from `./counterSlice` and the `useDispatch` hook to dispatch the `changeValueBy` action.

```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeValueBy, selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(changeValueBy(1))}>+</button>
      <span>&nbsp;{count}&nbsp;</span>
      <button onClick={() => dispatch(changeValueBy(-1))}>-</button>
    </div>
  );
}
```

Place the `<Counter/>` component in `App.js`.

```javascript
import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
```

Create a `store.js` file in the `app` folder with the following code:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer
  }
});
```
In the `index.js` file, import the store from `./app/store` and import `Provider` from `react-redux` and write the code to render the application like so:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

