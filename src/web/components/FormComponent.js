import React from 'react'
import { Row } from 'react-bootstrap'

const FormComponent = (props) => {
  return (
    <Row>
    {props.label ? <form className="form-horizontal" action="/action_page.php">
      <div className="form-group">
        <label className="control-label col-sm-4">{props.label}:</label>
        <div className="col-sm-6 padding-top-7">{props.data}</div>
      </div>
    </form> : null }
    </Row>
    
  )
}
export default FormComponent
