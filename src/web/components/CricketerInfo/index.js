import React from 'react'
import { Button, Form } from 'react-bootstrap'
import PropTypes from 'prop-types'

const CricketerInfo = ({
  cricketerData, 
  onCricketerInfoDismissClick, 
  onCricketerInfoSaveClick,
  onChangeField
}) => {
  return (
    <div>
      <div className='modal-header'>
        <button type='button' className='close' data-dismiss='modal' onClick={onCricketerInfoDismissClick}>
          <span aria-hidden='true' className='close'>×</span>
          <span className='sr-only'>Close</span>
        </button>
        <span className="cricketer-name">{cricketerData.name}</span>
      </div>
      <div className='modal-body'>
        <Form>
          <div className="form-group">
            <label>ODI Runs:</label>
            <input 
              type="text" 
              className="form-control" id="inputCity" 
              value={cricketerData.odiRun}
              onChange={e => onChangeField('odiRun', e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Test Runs:</label>
            <input type="text" 
              className="form-control" id="inputCity" 
              value={cricketerData.testRun}
              onChange={e => onChangeField('testRun', e.target.value)}/>
          </div>
          <div className="form-group">
            <label>IPL Runs:</label>
            <input type="text" 
              className="form-control" 
              id="inputCity" 
              value={cricketerData.iplRun}
              onChange={e => onChangeField('iplRun', e.target.value)}/>            
          </div>
          <div className="form-group">
            <label>20-20 Runs:</label>
            <input 
              type="text" 
              className="form-control" id="inputCity" 
              value={cricketerData.twentyRun}
              onChange={e => onChangeField('twentyRun', e.target.value)}/>
          </div>
          <div className="form-group">
            <label>IPL Team:</label>
            <input 
              type="text" 
              className="form-control" id="inputCity" 
              value={cricketerData.ipmTeam}
              onChange={e => onChangeField('ipmTeam', e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Average:</label>
            <input 
              type="text" 
              className="form-control" id="inputCity" 
              value={cricketerData.average}
              onChange={e => onChangeField('average', e.target.value)}/>
          </div>
        </Form>
        <hr />
        <div>
          <Button bsStyle="success" bsSize="large" className="float-right" onClick={onCricketerInfoSaveClick}>Save</Button>          
          <Button bsStyle="danger" bsSize="large" className="margin-right-10 float-right" onClick={onCricketerInfoSaveClick}>Cancel</Button>          
        </div>
        <div className='clearfix' />
      </div>
    </div>
  )
}
CricketerInfo.propTypes = {
  onCricketerInfoDismissClick: PropTypes.func,
  onCricketerInfoSaveClick: PropTypes.func,
  isAllDataSubmitted: PropTypes.bool,
  isError: PropTypes.bool,
  onCitizenshipChange: PropTypes.func,
  onCountryChange: PropTypes.func,
  onUploadIdentityDocChange: PropTypes.func,
  imagePreviewUrl: PropTypes.string
}
export default CricketerInfo
