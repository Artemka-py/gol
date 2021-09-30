import React from "react";
import ReactDOM from "react-dom";

const App = () => <h1>Hello world!!5656! {new Date().toLocaleDateString()}</h1>;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
