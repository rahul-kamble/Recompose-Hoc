import React from 'react'
import { Row, Col } from 'react-bootstrap'
import CricketerNameList from '../CricketerNameList'
import CricketerDetails from '../CricketerDetails'

const Dashboard = () => (
  <Row>
    <Col xs={12} md={3} className='calc'>
      <CricketerNameList />
    </Col>
    <Col xs={12} md={7} className='calc'>
      <CricketerDetails />
    </Col>
  </Row>
)

export default Dashboard
