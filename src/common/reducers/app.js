import { REQUEST_STARTED, REQUEST_SUCCESSS, REQUEST_FAILED, LOGGED_IN, LOGGED_OUT } from '../constant/constants'

const initialState = {
  loading: false,
  data: null,
  errorMessage: null,
  isAccount: false,
  isFunds: false,
  isHome: true
}

export default function loginReducer (state = initialState, action) {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true
      }
    case REQUEST_SUCCESSS:
      return {
        ...state,
        loading: false
      }
    case REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        errorMessage: action.error ? action.error : 'Error'
      }
    case LOGGED_IN:
      return {
        ...state,
        data: 'Logged In'
      }
    case LOGGED_OUT:
      return {
        ...state,
        data: null
      }
    default :
      return {
        ...state
      }
  }
}
