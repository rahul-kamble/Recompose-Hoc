import * as constant from '../constant/constants'
import { changeRoutePage } from '../route'

export function login (name, password) {
  return (dispatch) => {
    changeRoutePage('/dashboard')
    dispatch({ type: constant.LOGIN_SUCCESSS, payload: {name, password} })
  }
}