import './Style.css';
import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Holup</h1>
                </Jumbotron>
                <Row>
                    <Col>test</Col>
                </Row>
                <Row>
                    <Col>test</Col>
                </Row>
                <Row>
                    <Col>test</Col>
                </Row>
            </Container>
        )
    }
}
