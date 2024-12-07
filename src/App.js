import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import TodoApp from "./pages/TodoApp";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
};

export default App;
