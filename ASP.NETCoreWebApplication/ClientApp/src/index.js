// import "bootstrap/dist/css/bootstrap.css";
import  'semantic-ui-css/semantic.min.css'
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/layout/App";
import registerServiceWorker from "./registerServiceWorker";
import "../src/app/layout/styles.css"
import {BrowserRouter} from "react-router-dom";

// const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root")); 
registerServiceWorker();
