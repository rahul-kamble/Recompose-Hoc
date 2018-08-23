import * as constant from '../constant/constants'

export function setUpdatedCricketerInfo (updatedCricketerData) {
  return (dispatch, getState) => {
    let allCricketerData = getState().dashboard.allCricketerData.map(
      (cricketer) => cricketer.name === updatedCricketerData.name ? {...cricketer, odiRun: updatedCricketerData.odiRun,
        testRun: updatedCricketerData.testRun, iplRun: updatedCricketerData.iplRun, twentyRun: updatedCricketerData.twentyRun,
        ipmTeam: updatedCricketerData.ipmTeam, average: updatedCricketerData.average} : cricketer
    )
    dispatch({ type: constant.SINGLE_CRICKETER_DETAILS, payload: updatedCricketerData})    
    dispatch({ type: constant.UPDATED_CRICKETER_DATA, payload: allCricketerData})
  }
}

export function setCricketerData (cricketerData) {
  return (dispatch) => {
    dispatch({ type: constant.SINGLE_CRICKETER_DETAILS, payload: cricketerData})
  }
}
