import reducers from "../reducersType"

const uiReducer = new reducers.UI()

const isBroweser = () => typeof window !== "undefined"

const setThemeState = isDark => {
  window.localStorage.setItem(`theme`, JSON.stringify({ isDark }))
}

export const getThemeState = () =>
  isBroweser() && window.localStorage.getItem(`theme`)
    ? JSON.parse(window.localStorage.getItem(`theme`))
    : { isDark: false }

export const changeTheme = dispatch => {
  const isDark = getThemeState().isDark
  setThemeState(!isDark)
  dispatch({ type: uiReducer.TOOGLE_THEME, isDark: !isDark })
}
