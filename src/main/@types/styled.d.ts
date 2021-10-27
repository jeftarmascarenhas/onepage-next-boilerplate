import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    palette: {
      common: {
        black: string
        white: string
      }
      primary: {
        main: string
        contrastText: string
      }
      secondary: {
        main: string
        contrastText: string
      }
      error: {
        main: string
      }
      grey: {
        [prop in number | string]: string
      }
    }
    shadows: string[]
    text: {
      primary: string
      disabled: string
      secondary: string
    }
    background: {
      default: string
    }
  }
}
