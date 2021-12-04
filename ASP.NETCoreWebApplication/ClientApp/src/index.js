// import "bootstrap/dist/css/bootstrap.css";
import  'semantic-ui-css/semantic.min.css'
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import registerServiceWorker from "./registerServiceWorker";
import "../src/app/layout/styles.css"

// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

ReactDOM.render(<App/>, document.getElementById("root")); 
registerServiceWorker();
