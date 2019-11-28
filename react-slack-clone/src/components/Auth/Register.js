import React from 'react';
import {  Grid, Form, Button, Header, Message, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

// stateful component
class Register extends React.Component {
  handleChange = () => {}

  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle" className="app">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="black" textAlign="center">
            <Icon name="wechat" color="black" />
            Register for BlackDevChat
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input fluid name="username" icon="user" iconPosition="left" placeHolder="Username" onChange={this.handleChange} type="text" />

              <Form.Input fluid name="email" icon="mail" iconPosition="left" placeHolder="Email Address" onChange={this.handleChange} type="email" /> 

              <Form.Input fluid name="password" icon="lock" iconPosition="left" placeHolder="Password" onChange={this.handleChange} type="password" /> 
              <Form.Input fluid name="passwordConfirmation" icon="repeat" iconPosition="left" placeHolder="Password" onChange={this.handleChange} type="password" /> 

              <Button class="ui secondary button" color="black" fluid size="large">Submit</Button>
            </Segment>
          </Form>
          <Message>Already a user<Link to="/login"> Login</Link></Message>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Register;