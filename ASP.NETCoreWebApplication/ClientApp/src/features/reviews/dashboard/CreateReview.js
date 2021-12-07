import React, {Component, useState} from 'react';
import {Button, Form, Segment} from "semantic-ui-react";
import axios from "axios";

class CreateReview extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
             title: "",
             description: "",
             author: ""
        }
        this.setReview = this.setReview.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    setReview(e){
        axios.post("https://localhost:5001/api/reviews/",this.state).then((res) => {
            console.log(res.data);
            if (res.status == 200) {
                window.location = "/"
            }
        })
    }
    
    render() {
        const {title, description, date,author } = this.state
        const currDate = new Date().toLocaleDateString();
        return (
        <Segment onSubmit={this.setReview}>
                <Form>
                    <Form.Input onChange={this.handleChange} value={title} name={"title"}   placeholder={"Title"} />
                    <Form.Input onChange={this.handleChange} value={currDate} name={"date"} placeholder={"Date"} />
                    <Form.TextArea onChange={this.handleChange} value={description} type={"text-area"} name={"description"} placeholder={"Description"} />
                    <Form.Input onChange={this.handleChange} value={author} name={"author"} placeholder={"Author"} />
                    <Button floated={"right"} positive type={"submit"} content={"Submit"} />
                </Form>
            </Segment>
        );
    }
}

export default CreateReview;