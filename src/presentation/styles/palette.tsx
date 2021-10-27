type Palette = {
  [prop in number | string]: string
}

export const grey: Palette = {
  0: '#fafafa',
  50: '#f5f5f5',
  100: '#EFEFEF',
  200: '#e0e0e0',
  600: '#B1B1B1',
  700: '#616161',
  A50: '#dbdbdb',
  A100: '#d5d5d5',
  A200: '#4a4a4a',
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
