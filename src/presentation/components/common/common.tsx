import styled from 'styled-components'

//5.0rem = 50px
export const Title = styled.h1`
  color: ${({ theme }): string => theme.text.primary};
  font-size: 5rem;
`
