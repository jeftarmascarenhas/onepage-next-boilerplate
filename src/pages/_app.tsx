/* eslint-disable no-undef */
import { ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'presentation/styles/global-styles'
import { defaultTheme } from '@/presentation/styles/theme'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>One Page With NEXT.js</title>
        {/* When do you uncomment add your Google Analytics code G-0000  */}

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-740RPYTD0V"
        ></script> */}

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || []
          function gtag() {
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          
          gtag('config', 'G-740RPYTD0V', {
            page_path: window.location.pathname,
          })
          
          `,
          }}
        /> */}
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
export default MyApp
