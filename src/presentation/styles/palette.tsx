type Palette = {
  [prop in number | string]: string
}

export const grey: Palette = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#B1B1B1',
  700: '#757575',
  800: '#424242',
  900: '#212121',
  A100: '##f5f5f5',
  A200: '#4a4a4a',
  A400: '#bdbdbd',
  A700: '#616161',
}

export const palette = {
  common: {
    black: '#000',
    white: '#fff',
  },
  primary: {
    main: '#9C6FE4',
    contrastText: '#fff',
  },
  secondary: {
    main: '#259ECA',
    contrastText: '#fff',
  },
  error: {
    main: 'red',
  },
  background: {
    default: `
    #000
    `,
  },
  grey,
}
