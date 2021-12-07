import React from 'react';
import {Button, Container, Menu} from "semantic-ui-react";

export default function () {
  
        return (
          <Menu inverted fixed={"top"}>
               <Container>
                       <Menu.Item header href={"/"}>
                               <img src="/assets/logo.png" alt="Logo" />
                       </Menu.Item>
                       <Menu.Item name={"Reviews"} href={"/reviews"} />
                       <Menu.Item>
                               <Button positive content={"Create Review"} href={"/reviews/add"}/>
                       </Menu.Item>
               </Container>   
          </Menu>
        );
}

