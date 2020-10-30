import Reducers from "../reducersType"

const reducers = new Reducers.User()

export default (state, action) => {
  switch (action.type) {
    case reducers.SIGN_IN:
      return {
        ...state,
        authenticated: true,
      }
    case reducers.SIGN_OUT:
      return {
        ...state,
        authenticated: false,
      }
    case reducers.GET_USER_CREDENTIALS:
      return {
        ...state,
        credentials: action.credentials,
      }
    default:
      return state
  }
}
