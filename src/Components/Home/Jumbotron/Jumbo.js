import React, { Component } from 'react';
import './Jumbo.css'
import { Jumbotron, Button, InputGroup, FormControl, Modal, Row, Col, Form } from 'react-bootstrap';
import './Jumbo.css';
import Clock from '../../Clock/Clock';

export default class Jumbo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            time: '',
            show: false,
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            phoneError: '',
            validated: false
        };

        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleValidate = this.handleValidate.bind(this);
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
    handleTimeChange = event => {
        this.setState(
            {
                time: event.target.value
            });
    }

    handleValidate = () => {
        // let firstNameError = "";
        // let lastNameError = "";
        let emailError = "";
        // let phoneError = "";

        if (!this.state.email.includes('@')) {
            emailError = 'Invalid email';
        }
        if (emailError) {
            this.setState({emailError});
                return false;
        }
        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        event.stopPropagation();
        const isValid = this.validate();

        if (isValid) {
            console.log(this.state);
            this.setState(this.state)
        }

        // alert('This info should be sent to mongo: First name: ' + this.state.firstName + ' last name: ' + this.state.lastName + ' Email: ' + this.state.email + ' Phone: ' + this.state.phone + ' Time submitted: ' + this.state.time);
        
        console.log(this.state.firstName, this.state.lastName, this.state.phone, this.state.email)
        // setValidated(true);
    }

    handleShow = event => {
        this.setState({show: true})
    }

    handleClose = event => {
        this.setState({show: false})
        console.log("this should close.")
    }




    render() {
        return (
            <Jumbotron>
                <h1 className="display-4">Holup</h1>
                <hr className="my-4"/>
                <p className="lead">Please feel free to check-in and you will be notified once you are ready.</p>
                <h2 className="time">Current time: <Clock /></h2>
                <Button onClick={this.handleShow}>Check-In</Button>
                <Modal className="custom_modal" show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton={this.handleClose}>
                            <Modal.Title>Check-In here!</Modal.Title>
                        </Modal.Header>
                        <Row>
                            <Col>
                            <Form noValidate onSubmit={this.handleSubmit}>
                                <br/>
                                <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="First name:"
                                    type="text"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.firstName} 
                                    onChange={this.handleFirstNameChange}
                                    required
                                        />
                                </InputGroup>
                                <br/>
                                 <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="Last name:"
                                    type="text"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.lastName} 
                                    onChange={this.handleLastNameChange}
                                    required
                                    />
                                </InputGroup>
                                <br/>
                                <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="Email:"
                                    type="email"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.email} 
                                    onChange={this.handleEmailChange}
                                    pattern=".+@globex.com"
                                    required
                                    />
                                </InputGroup>
                                <br/>
                                <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="Phone:"
                                    type="tel"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.phone} 
                                    onChange={this.handlePhoneChange}
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    required
                                    />
                                </InputGroup>
                                <br/>
                                <Modal.Footer>
                                <Button type="submit" onClick={ this.handleClose }>Submit</Button>
                                </Modal.Footer>
                            </Form>
                            </Col>
                        </Row>
                    </Modal>
            </Jumbotron>
        )
    }
}

// turn the button into a component that displays modal. 