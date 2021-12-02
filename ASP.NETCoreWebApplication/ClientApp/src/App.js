import React, { Component } from "react";
import {Route} from "react-router-dom";
import "./custom.css";
import { withRouter } from 'react-router-dom';
import Home from "./features/home/Home";
import Reviews from "./features/reviews/Reviews.js";
import Layout from "./components/Layout";

export class App extends Component {
  static displayName = App.name;
  
    render() {
    return (
            <Layout>
                <Route exact path='/' component={Home}></Route> 
                <Route path='/reviews' component={Reviews}></Route>
                {/*<Route path='/' component={Reviews}></Route>*/}
            </Layout>
    );
  }
}
export default withRouter(App);
