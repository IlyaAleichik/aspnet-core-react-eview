import React, {Component, useState} from 'react';
import {Grid, GridColumn, List, ListItem} from "semantic-ui-react";
import ReviewList from "./ReviewList";
import ReviewDetails from "../details/ReviewDetails";
import ReviewForm from "../form/ReviewForm";
export default class ReviewDashboard extends Component {
    state = {
        reviews: []
    }
    
    async fetchReviewsData() {
        const response = await fetch('api/reviews');
        const data = await response.json();
        this.setState({ reviews: data });
        console.log(this.state.reviews)
    }
    componentDidMount() {
        this.fetchReviewsData()
    }
    
    render() {
        const reviews = this.state.reviews;
        return (
            <Grid>
                <GridColumn width={"10"}>
                    <ReviewList children={reviews}/>
                </GridColumn>
                {/*<GridColumn width={"5"}>*/}
                {/*    <ReviewDetails/>*/}
                {/*    <ReviewForm/>*/}
                {/*</GridColumn>*/}
            </Grid>
        );
    }
}
