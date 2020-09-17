import './Style.css';
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Jumbo from './Jumbotron/Jumbo.js'
import Content from './Content/Content'

export default class Home extends Component {
    render() {
        return (
            <Container id="content">
                <Jumbo/>
                <Content /> 
            </Container>
        )
    }
}
