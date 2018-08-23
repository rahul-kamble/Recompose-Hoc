import React from 'react'
import { connect } from 'react-redux'
import CricketerInfoComponent from '../../components/CricketerInfo'
import * as actions from '../../../common/actions/dashboard'
import { compose, withState, withPropsOnChange, withHandlers } from 'recompose'

const CricketerInfo = ({ cricketerDetails, onCricketerInfoDismissClick, onCricketerInfoSaveClick, onChangeField }) => (
    <CricketerInfoComponent cricketerData={cricketerDetails}
      onCricketerInfoDismissClick={onCricketerInfoDismissClick}
      onCricketerInfoSaveClick={onCricketerInfoSaveClick}
      onChangeField={onChangeField}/>
  )

export default compose(
  connect(null, actions),
  withState('cricketerDetails', 'setCricketerData', undefined),
  withPropsOnChange([ 'cricketerData' ], ({ setCricketerData, cricketerData }) => {
		setCricketerData(cricketerData)
  }),
  withHandlers({
		onCricketerInfoSaveClick: ({ cricketerDetails, setUpdatedCricketerInfo, onCricketerInfoSaveClick }) => () => {
		  setUpdatedCricketerInfo(cricketerDetails)
      onCricketerInfoSaveClick()
    },
    onChangeField: ({ cricketerDetails, setCricketerData }) => (inputName, value) => {
		  let cricketerData = Object.assign({}, cricketerDetails)
      cricketerData[inputName] = value
      setCricketerData(cricketerData)
		}
	})
)(CricketerInfo)