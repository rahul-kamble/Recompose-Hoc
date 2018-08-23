import { LOGIN_SUCCESSS } from '../constant/constants'

const initialState = {
  name: '',
  password: ''
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSS:
      return {
        ...state,
        name: action.payload.name,
        password: action.payload.password
      }
    default:
      return {
        ...state
      }
  }
}
