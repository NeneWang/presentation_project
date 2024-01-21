import Navbar from "./Navbar";
import React from 'react'
import { Container } from 'semantic-ui-react'


export default function Layout(props) {
    return <div>
        <Navbar />
        <Container>

                {props.children}


        </Container>
    </div>;
}

