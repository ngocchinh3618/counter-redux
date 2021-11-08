import React from 'react';
import Index from "./components/Index";
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';
import { createStore } from 'redux';

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
