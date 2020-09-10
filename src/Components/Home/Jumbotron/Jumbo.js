import React, { Component } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import './Jumbo.css'

export default class Jumbo extends Component {
    render() {
        return (
            <Jumbotron>
                <h1 className="display-4">Holup</h1>
                <hr className="my-4"/>
                <p className="lead">Please feel free to check-in and you will be notified once you are ready.</p>
            </Jumbotron>
        )
    }
}
