import React, { Component } from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import Waitlist from '../../Waitlist/Waitlist'
import './Content.css'

export default class Content extends Component {
    render() {
        return (
            <Container id="contContainer">
                <Row>
                    <Col></Col>
                </Row>
                <Row id="cont1">
                    <Col></Col>
                    <Col xs={10} className="line">
                        <Waitlist></Waitlist>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
