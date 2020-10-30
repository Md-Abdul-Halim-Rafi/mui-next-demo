import React, { useReducer } from "react";
import { ThemeProvider } from "@material-ui/styles";
import Head from 'next/head';
import { CssBaseline } from "@material-ui/core";
import { muiLightTheme, muiDarkTheme } from "../../styles/theme";

import { getUserActivity, getUser } from "./actions/userActions";
import { getThemeState } from "./actions/uiActions";

// Reducers
import uiReducers from "./reducers/uiReducers";
import userReducers from "./reducers/userReducers";

export const AppContext = React.createContext();

const ContextProvider = (props) => {
  const [ui, uiDispatch] = useReducer(uiReducers, [], () => {
    const isDark = getThemeState().isDark;
    return { isDark, loading: false, error: undefined };
  });
  const [user, userDispatch] = useReducer(userReducers, {}, () => {
    return {
      uid: getUser().uid ? getUser().uid : ``,
      gmail: getUser().gmail ? getUser().gmail : ``,
      userName: getUser().userName ? getUser().userName : ``,
      photoURL: getUser().photoURL ? getUser().photoURL : ``,
    };
  });
 

  return (
    <AppContext.Provider
      value={{
        ui: ui,
        uiDispatch,
        user: user,
        userDispatch,
      }}
    >
        <Head>
          <title>🔥MAINLY CODING: ফ্রি অনলাইন প্রোগ্রামিং কোর্স, ইবুক, বই ও ব্লগ!</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <meta name='robots' content='index' />
          <meta name='Googlebot' content='index' />
        </Head>
        {/* <ThemeProvider theme={muiLightTheme}> */}
        <ThemeProvider theme={ui.isDark ? muiDarkTheme : muiLightTheme}>
          <CssBaseline />
          {props.children}
        </ThemeProvider>
    </AppContext.Provider>
  );
};

export default ({ children }) => <ContextProvider>{children}</ContextProvider>;
