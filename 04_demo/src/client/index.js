import React from "react";
import ReactDOM from "react-dom";

fetch('/  api  /').then(response => {
  console.log(response.json());
});

const Index = () => {
  return <div>Hello World!</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
