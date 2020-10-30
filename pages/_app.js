import React from "react";
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/core";
import createCache from "@emotion/cache";
import ContextProvider from "../src/states/ContextProvider";


export const cache = createCache();


export default function MyApp(props) {
  const { Component, pageProps } = props;

  return (
    <CacheProvider value={cache}>
      <ContextProvider>
        <Component {...pageProps} />
      </ContextProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
