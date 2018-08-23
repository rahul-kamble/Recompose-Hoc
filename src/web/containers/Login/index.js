import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../common/actions/login.js'
import { compose, withState } from 'recompose'
import { Row, Col, Button, ControlLabel, FormControl } from 'react-bootstrap'

const Login = ({ login, onNameChange, onPasswordChange, name, password }) => (
  <Row>
    <Col md={6} className='login-block'>
      <ControlLabel>Enter Your Details</ControlLabel>
      <FormControl
        type="text"
        value={name}
        placeholder="Enter Your Name here"
        onChange={(e) => onNameChange(e.target.value)} 
      />
      <FormControl
        type="text"
        value={password}
        placeholder="Enter Your Location here"
        onChange={(e) => onPasswordChange(e.target.value)} 
      />
      <Button 
        bsSize="large" 
        bsStyle="primary" 
        onClick={() => login(name, password)}>
          Submit
      </Button>
    </Col>
  </Row>
)

export default compose(
  connect(null, actions),
  withState('name', 'onNameChange', ''),
	withState('password', 'onPasswordChange', ''),
)(Login)
