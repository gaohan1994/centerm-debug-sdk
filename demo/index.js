import React from "react";
import ReactDom from "react-dom";
import Demo from "./demo";
import { JavascriptErrorInfo, deviceInfo, JavascriptDebug } from "../src/index";

document.write("123");

class App extends React.Component {
  componentDidMount() {
    // const javascriptErrorInfo = new JavascriptErrorInfo();
    // javascriptErrorInfo.getOsVersion();

    const javascriptDebug = new JavascriptDebug();

    const info = deviceInfo.getDeviceInfo();
    console.log("info", info);

    // window.onerror = function(message, source, lineno, colno, error) {
    //   console.log("message", message);
    //   console.log("source", source);
    //   console.log("lineno", lineno);
    //   console.log("colno", colno);
    //   console.log("error", error);
    // };
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
