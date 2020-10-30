class UiReducers {
  TOOGLE_THEME = `TOOGLE_THEME`;
  SET_LOADING = `SET_LOADING`;
  CLEAR_ERROR = `CLEAR_ERROR`;
}

class UserReducers {
  SIGN_IN = `SIGN_IN`;
  SIGN_OUT = `SIGN_OUT`;
}

export default {
  UI: UiReducers,
  User: UserReducers,
};
