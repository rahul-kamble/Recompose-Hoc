import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../common/actions/dashboard'
import { Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap'
import { compose } from 'recompose'

const CricketerNameList = ({ allCricketerData, setCricketerData }) => (
  <Row>
    <Col xs={12} md={9} className='calc'>
      <ListGroup>
        {allCricketerData.map(cricketer => (
          <ListGroupItem key={cricketer.name} onClick={() => setCricketerData(cricketer)}>
            {cricketer.name}
          </ListGroupItem>
        ))}
      </ListGroup>
    </Col>
  </Row>
)

export default compose(
  connect(state => ({ allCricketerData: state.dashboard.allCricketerData }), actions)
)(CricketerNameList)
