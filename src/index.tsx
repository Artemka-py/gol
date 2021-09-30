import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Header = styled.h1`
  font-size: 50px;
`;

const App = () => (
  <Header>Hello world!!5656! {new Date().toLocaleDateString()}</Header>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
