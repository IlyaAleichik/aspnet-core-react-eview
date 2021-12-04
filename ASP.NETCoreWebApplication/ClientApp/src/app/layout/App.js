import React from "react";
import {Container} from "semantic-ui-react";
import NavBar from "./NavBar";
import ReviewDashboard from "../../features/reviews/dashboard/ReviewDashboard";

export default class App extends React.Component  {
    render() {
        return(
            <> 
                <NavBar/>
                <Container style={{marginTop: '5em'}}>
                    <ReviewDashboard/>
                </Container>
            </>
        )
    }
}
