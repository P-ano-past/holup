import './Style.css';
import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Container>
                    <Jumbotron>
                        <h1>Holup</h1>
                    </Jumbotron>
                </Container>
                <Container>
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
            </Container>
        )
    }
}
