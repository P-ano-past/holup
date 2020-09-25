import './Style.css';
import React, { Component } from 'react';
import Jumbo from './Jumbotron/Jumbo.js';
import {Row, Col, Container, Card } from 'react-bootstrap'

export default class Home extends Component {

    render() {
        return (
            <Container id="content">
                <Jumbo />
                <Container id="contContainer" fluid>
                    <Row id="cont1">
                        <Col xs={10} className="line">
                        {/* 
                        There needs to be a static container that is able to display cards with first initial, last name along with the time being displayed for viewing. 
                        */}
                        <Card.Body>
                            <Card>
                                Test. 
                            </Card>
                        </Card.Body>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

