import React, { Component } from "react";
import {Button} from "reactstrap";
import { withRouter } from 'react-router-dom';

class Home extends Component {
  static dysplayName = Home.name;
  
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
    
    this.state = {
      hide: true,
      text: "Ты на меня кликнул?",
      count: 0
    }
  }

  incrementCount() {
    this.setState((state) => {
      // Важно: используем `state` вместо `this.state` при обновлении.
      return {count: state.count + 1}
    });
  }
  
  myFunction(text){
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.setState({text: "YouCliked"})
  }
  redirectToReview = () => {
    const { history } = this.props;
    if(history) history.push('/reviews');
  }
  
  render() {
    const { history } = this.props;
    return <div>
     
      
      <h1>Welcome /AICG App EView Template</h1>
      <p> to your new single-page application, built with:</p>
      <ul>
        <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
        <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
        <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
      </ul>
      <Button onClick={this.myFunction} >Click to me</Button>
      <Button onClick={this.redirectToReview} >Go to Review</Button>
      <h1>Ilya {this.state.text}</h1>
      <h1>Ilya {this.state.count}</h1>
    </div>;
    
    
  }
}
export default withRouter(Home);
