import React, {Component} from 'react';
import {Button, Form, Segment} from "semantic-ui-react";

export default class ReviewForm extends Component {
    render() {
        return (
            <Segment clearing>
                <Form>
                    <Form.Input placeholder={"Title"} />
                    <Form.Input placeholder={"Date"} />
                    <Form.TextArea placeholder={"Description"} />
                    <Form.Input placeholder={"Category"} />
                    <Form.Input placeholder={"Author"} />
                    <Button floated={"right"} positive type={"submit"} content={"Submit"} />
                    <Button floated={"right"}  type={"button"} content={"Cancel"} />
                </Form>
            </Segment>
        );
    }
}