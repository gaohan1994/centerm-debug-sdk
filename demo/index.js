import React from "react";
import ReactDom from "react-dom";
import Demo from "./demo";

document.write("123");

class App extends React.Component {
  componentDidMount() {
    window.onerror = function (message, source, lineno, colno, error) {
      console.log("message", message);
      console.log("source", source);
      console.log("lineno", lineno);
      console.log("colno", colno);
      console.log("error", error);
    };
  }

  render() {
    return (
      <div>
        <Demo />
      </div>
    );
  }
}
ReactDom.render(<App />, document.getElementById("root"));
