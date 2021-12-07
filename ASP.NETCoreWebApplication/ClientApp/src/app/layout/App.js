import React from "react";
import {Container} from "semantic-ui-react";
import NavBar from "./NavBar";
import ReviewDashboard from "../../features/reviews/dashboard/ReviewDashboard";
import {Route, Router, Switch} from "react-router-dom";
import ReviewDetails from "../../features/reviews/details/ReviewDetails";
import NotFound from "./NotFound";
import CreateReview from "../../features/reviews/dashboard/CreateReview";
export default class App extends React.Component  {
    render() {
        return(
            <>
                    <NavBar/>
                    <Container style={{marginTop: '5em'}}>
                        <Switch>
                            <Route exact path={"/"} component={ReviewDashboard} />
                            <Route exact path={"/reviews"} component={ReviewDashboard} />
                            <Route exact path={"/details"} component={ReviewDetails} />
                            <Route exact path={"/reviews/add"} component={CreateReview} />
                            <Route component={NotFound} />
                        </Switch>
                    </Container>
            </>
        )
    }
}
