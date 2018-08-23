import React from 'react'
import { connect } from 'react-redux'
import { compose, withState } from 'recompose'
import { Col, Row, Button } from 'react-bootstrap'
import FormComponent from '../../components/FormComponent'
import Modal from 'react-modal';
import CricketerInfo from '../../containers/CricketerInfo'

const CricketerDetails = ({ cricketerData, showCricketerInfoPanel, setCricketerInfoPanel }) => (
  <React.Fragment>
    {cricketerData ? 
      <Row>
        <Col md={6}>
          <FormComponent label='Name' data={cricketerData.name}/>
          <FormComponent label='Date Of Birth' data={cricketerData.dob}/>
          <FormComponent label='ODI Runs' data={cricketerData.odiRun}/>
          <FormComponent label='Test Runs' data={cricketerData.testRun}/>
          <FormComponent label='IPL Runs' data={cricketerData.iplRun}/>
          <FormComponent label='20-20 Runs' data={cricketerData.twentyRun}/>
          <FormComponent label='Average' data={cricketerData.average}/>
          <Col md={12} className="cricketer-details-edit-button">
            <Button 
              bsStyle="success" 
              bsSize="large" 
              onClick={() => setCricketerInfoPanel(true)}>
                <span className="glyphicon glyphicon-pencil" />
                Edit
            </Button>
          </Col>
        </Col>
        <Col md={6}>
          <img alt='img' src={cricketerData.src} />
        </Col>
        <Modal isOpen={showCricketerInfoPanel} onRequestClose={() => setCricketerInfoPanel(false)}>
          <div className="confirmation-overlay-block">
            <CricketerInfo
              cricketerData={cricketerData}
              setCricketerInfoPanel={setCricketerInfoPanel}
            />
          </div>
        </Modal>
      </Row> : null 
    }
  </React.Fragment>
)

export default compose(
  connect(state => ({ cricketerData: state.dashboard.cricketerData })),
  withState('showCricketerInfoPanel', 'setCricketerInfoPanel', false),
)(CricketerDetails)
