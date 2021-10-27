import styled from 'styled-components'

//1rem = 10px
//1.6rem = 16px
export const FooterBase = styled.footer`
  text-align: center;
  padding: 1rem;
  font-size: 1.6rem;
  background-color: ${({ theme }): string => theme.palette.grey['600']};
`
