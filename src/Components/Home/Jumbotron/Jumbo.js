import React, { Component } from 'react';
import './Jumbo.css'
import { Jumbotron, Button, InputGroup, FormControl, Modal, Row, Col, Form } from 'react-bootstrap';
import './Jumbo.css';
import Clock from '../../Clock/Clock';


const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validPhoneRegex = RegExp(
    /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i
)
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

export default class Jumbo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            errors: {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            }
        };
    }
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'firstName': 
            errors.firstName = 
              value.length < 3
                ? 'First name must be at least 3 characters long!'
                : '';
            break;
          case 'lastName': 
            errors.lastName = 
              value.length < 3
                ? 'Last name must be at least 3 characters long!'
                : '';
            break;
          case 'email': 
            errors.email = 
              validEmailRegex.test(value)
                ? ''
                : 'Email is not valid!';
            break;
          case 'phone': 
            errors.phone = 
              validPhoneRegex.test(value)
                ? ''
                : 'Invalid phone number';
            break;
          default:
            break;
        }
    
        this.setState({errors, [name]: value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if(validateForm(this.state.errors)) {
        console.info('Valid Form')
        }else{
        console.error('Invalid Form')
        }
    }
    handleShow = event => {
        this.setState({show: true})
    }

    handleClose = event => {
        this.setState({show: false})
        console.log("this should close.")
    }




    render() {
        const {errors} = this.state; 
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
                            <Form onSubmit={this.handleSubmit} noValidate>
                                <br/>
                                <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="First name:"
                                    type="text"
                                    name='firstName'
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.firstName} 
                                    onChange={this.handleChange}
                                    noValidate
                                    />
                                    {
                                    errors.firstName.length > 0 &&
                                    <span className="error">{errors.firstName}</span>
                                    }
                                </InputGroup>
                                <br/>
                                 <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="Last name:"
                                    type="text"
                                    name="lastName"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.lastName} 
                                    onChange={this.handleChange}
                                    required
                                    />
                                    {
                                    errors.lastName.length > 0 &&
                                    <span className="error">{errors.lastName}</span>
                                    }
                                </InputGroup>
                                <br/>
                                <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="Email:"
                                    type="email"
                                    name="email"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.email} 
                                    onChange={this.handleChange}
                                    pattern=".+@globex.com"
                                    required
                                    />
                                    {
                                    errors.email.length > 0 && 
                                    <span className='error'>{errors.email}</span>
                                    }
                                </InputGroup>
                                <br/>
                                <InputGroup size="lg">
                                    <FormControl 
                                    placeholder="Phone:"
                                    type="tel"
                                    name="phone"
                                    aria-label="Large" 
                                    aria-describedby="inputGroup-sizing-sm" 
                                    value={this.state.phone} 
                                    onChange={this.handleChange}
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                    required
                                    />
                                    {errors.phone.length > 0 && 
                                    <span className='error'>{errors.phone}</span>}
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