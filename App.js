import React from "react";
import ReactDOM from "react-dom";


// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "kinee" },
//   "hello world from h1 tag!!"
// );



const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hey there from H1 tag!!!"),
    React.createElement("h2", {}, "Hey there from H2 tag!!!"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hey there from H1 tag!!!"),
    React.createElement("h2", {}, "Hey there from H2 tag!!!"),
    React.createElement("h2", {}, "Hey there whats up baby girl!!!"),

  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
