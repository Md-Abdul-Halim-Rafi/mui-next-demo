import Reducers from "../reducersType"

const reducers = new Reducers.UI()

export default (state, action) => {
  switch (action.type) {
    case reducers.TOOGLE_THEME:
      return {
        ...state,
        isDark: action.isDark,
      }
    default:
      return state
  }
}
