import React, {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";
import {Header, List, ListItem} from "semantic-ui-react";
import {Nav} from "reactstrap";

export default class App extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        }
    }
    async populateReviewsData() {
        const response = await fetch('api/reviews');
        const data = await response.json();
        this.setState({ reviews: data, loading: false });
    }
    
    componentDidMount() {
        // axios.get(`https://localhost:5001/api/reviews`)
        //     .then(res => {
        //         console.log(res);
        //         const reviews = res.data;
        //         this.setState({ reviews });
        //     })
        this.populateReviewsData()
    }
    
    static renderListReviews(reviews){
        return (
            <List>{reviews.map(review =>(<ListItem key={review.id}>{review.id} ----- {review.title}</ListItem>)) }</List>
            // <List>
            //     { reviews.map(review => <li>{review.id}</li>)}
            // </List>
        )
    }
    
    render() {
        let list = this.state.loading ? <p>Loading ...</p> : App.renderListReviews(this.state.reviews);
        
        return(
            <div>
                <Header as="h2" content={"eView"} />
                <h1 id="tabelLabel" >Reviews List</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {list}
            </div>
        )
    }
}
