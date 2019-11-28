import React from 'react';
import {  Grid, Form, Button, Header, Message, Icon, Segment } from 'semantic-ui-react';

// stateful component
class Register extends React.Component {
  handleChange = () => {}

  render() {
    return (
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" icon color="orange" textAlign="center">
            <Icon name="puzzle piece" color="orange" />
            Register for BlackChat
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input fluid name="username" icon="user" iconPosition="left" placeHolder="Username" onChange={this.handleChange} />
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Register;