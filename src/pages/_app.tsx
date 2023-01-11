import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { storeWrapper } from '@store/store'
import '@common/css/layout.scss'
import { Provider } from 'react-redux'
import styled, { ThemeProvider } from 'styled-components'
/**
 * withRedux HOC
 * NextJS wrapper for Redux
 */

const Container = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
`

const CustomApp: FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = storeWrapper.useWrappedStore(rest)
  return (
    <ThemeProvider theme={Container}>
      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </ThemeProvider>
  )
}

export default CustomApp
