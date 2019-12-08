import React from 'react';
import firebase from '../../firebase';
import {  
  Grid, 
  Form, 
  Segment,
  Button, 
  Header, 
  Message, 
  Icon, 
 } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// stateful component
class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: [],
    loading: false
   };
  

displayErrors = errors => errors.map((error, i) => <p key={i}>{error.message}</p>);


  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => { 
    event.preventDefault();
    if(this.isFormValid()) {
      this.setState({ errors: [], loading: true}); 
    }
  };

  handleInputError = (errors, inputName) => {
    return errors.some(error => 
      error.message.toLowerCase().includes(inputName)
      ) 
        ? 'error' 
        : '' 
  };

  render() {
    const {  
      email, 
      password, 
      errors,
      loading 
    } = this.state;

    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>

          <Header as="h1" icon color="black" textAlign="center">
            <Icon name="code branch" color="black" />
            Login to BlackDevChat
          </Header>

          <Form onSubmit={this.handleSubmit} size="large">
            <Segment stacked> 
              <Form.Input 
              fluid 
              name="email" 
              icon="mail" 
              iconPosition="left" 
              placeHolder="Email Address" 
              onChange={this.handleChange} 
              value={email}
              className={this.handleInputError(errors, 'email')}
              type="email" /> 

              <Form.Input 
              fluid 
              name="password" 
              icon="lock" 
              iconPosition="left" 
              placeHolder="Password" 
              onChange={this.handleChange} 
              value={password}
              className={this.handleInputError(errors, 'password')}
              type="password" 
              /> 

              <Button 
                disabled={loading}
                className={loading ? "loading" : ""} 
                color="black" 
                fluid 
                size="large"
                >
                  Submit
              </Button> 
            </Segment>
          </Form>
          {errors.length > 0 && (
            <Message error>
              <h3>Error</h3> 
              {this.displayErrors(errors)}
            </Message>
          )}
          <Message>
            Don't have an account?<Link to="/Login">  Login</Link>
            </Message>
        </Grid.Column>
      </Grid>
      );
    }
  }
export default Login;