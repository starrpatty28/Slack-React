import React from 'react';
import firebase from '../../firebase';
import {  
  Grid, 
  Form, 
  Button, 
  Header, 
  Message, 
  Icon, 
  Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// stateful component
class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  //Check is the form is filled out function
  isFormValid = () => {
    if(this.isFormEmpty(this.state)) {
      //throw an errow
    } else if (!this.isPasswordValid()) {
      // throw an error
    } else {
      // the form is valid
      return true;
    }
  }

  isFormEmpty = ({ username, email, password, passwordConfirmation }) => {
    return !username.length || !email.length || !password.length || !passwordConfirmation.length;
  }



  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => { 
    if(this.isFormValid()) {
      event.preventDefault();
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(createdUser => {
          console.log(createdUser);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }

  render() {
    const { username, email, password, passwordConfirmation } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>

          <Header as="h2" icon color="black" textAlign="center">
            <Icon name="wechat" color="black" />
            Register for BlackDevChat
          </Header>

          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked> 

              <Form.Input 
              fluid 
              name="username" 
              icon="user" 
              iconPosition="left" 
              placeHolder="Username" 
              onChange={this.handleChange} 
              value={username}
              type="text" 
              />

              <Form.Input 
              fluid 
              name="email" 
              icon="mail" 
              iconPosition="left" 
              placeHolder="Email Address" 
              onChange={this.handleChange} 
              value={email}
              type="email" /> 

              <Form.Input 
              fluid 
              name="password" 
              icon="lock" 
              iconPosition="left" 
              placeHolder="Password" 
              onChange={this.handleChange} 
              value={password}
              type="password" 
              /> 

              <Form.Input 
              fluid name="passwordConfirmation" 
              icon="repeat" 
              iconPosition="left" 
              placeHolder="Password" 
              onChange={this.handleChange} 
              value={passwordConfirmation}
              type="password" 
              /> 

              <Button 
                class="ui secondary button" 
                color="black" 
                fluid 
                size="large">
                  Submit
              </Button> 
            </Segment>
          </Form>
          <Message>Already a user<Link to="/login"> Login</Link></Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Register;