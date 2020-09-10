import './Style.css';
import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Jumbo from './Jumbotron/Jumbo.js'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbo/>
                <Row>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>test</Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
