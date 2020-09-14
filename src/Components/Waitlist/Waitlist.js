import React, { Component } from 'react'
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'

export default class Waitlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange = event => {
        this.setState(
            {
                firstName: event.target.value
            });
    }
    handleLastNameChange = event => {
        this.setState(
            {
                lastName: event.target.value
            });
    }
    handleEmailChange = event => {
        this.setState(
            {
                email: event.target.value
            });
    }
    handlePhoneChange = event => {
        this.setState(
            {
                phone: event.target.value
            });
    }

    handleSubmit = event => {
        
        alert('This info should be sent to mongo: ' + this.state.firstName);
        
        console.log(this.state.firstName, this.state.lastName, this.state.phone, this.state.email)
        event.preventDefault();
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                    <form onSubmit={this.handleSubmit}>
                        <br/>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text 
                                id="inputGroup-sizing-lg" 
                                >First name:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                            aria-label="Large" 
                            aria-describedby="inputGroup-sizing-sm" 
                            type="text"
                            value={this.state.firstName} 
                            onChange={this.handleFirstNameChange}
                                />
                        </InputGroup>
                        <br/>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Last name:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                            aria-label="Large" 
                            aria-describedby="inputGroup-sizing-sm" 
                            value={this.state.lastName} 
                            onChange={this.handleLastNameChange}
                            />
                        </InputGroup>
                        <br/>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Email:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                            aria-label="Large" 
                            aria-describedby="inputGroup-sizing-sm" 
                            value={this.state.email} 
                            onChange={this.handleEmailChange}
                            />
                        </InputGroup>
                        <br/>
                        <InputGroup size="lg">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-lg">Phone:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl 
                            aria-label="Large" 
                            aria-describedby="inputGroup-sizing-sm" 
                            value={this.state.phone} 
                            onChange={this.handlePhoneChange}
                            />
                        </InputGroup>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                    </Col>
                </Row>
            </Container>
        )
    }
}
