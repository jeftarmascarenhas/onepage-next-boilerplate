import { DefaultTheme } from 'styled-components'
import { palette } from './palette'

export const defaultTheme: DefaultTheme = {
  borderRadius: '4px',
  palette,
  shadows: ['none', '0 1px 2px rgb(10 10 10 / 10%)'],
  text: {
    primary: palette.common.white,
    secondary: '#222',
    disabled: '#7a7a7a',
  },
  background: {
    default: palette.background.default,
  },
}
