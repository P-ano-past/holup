import './Style.css';
import React, { Component } from 'react';
import Jumbo from './Jumbotron/Jumbo.js';
import {Row, Col, Container } from 'react-bootstrap'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",
            showHideContent: 'false'
        };
    }

    render() {
        return (
            <Container id="content">
                <Jumbo/>

                <Container id="contContainer">
                    <Row id="cont1">
                        <Col xs={10} className="line">
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}
