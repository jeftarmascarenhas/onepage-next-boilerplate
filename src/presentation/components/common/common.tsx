import styled from 'styled-components'

//5.0rem = 50px
export const Title = styled.h1`
  color: ${({ theme }): string => theme.text.primary};
  font-size: 4.2rem;
  font-weight: 400;
  line-height: 52px;
  @media screen and (min-width: 1024px) {
    font-size: 8rem;
    line-height: 105px;
  }
`
export const SubTitle = styled.h2`
  color: ${({ theme }): string => theme.text.primary};
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 24px;
  @media screen and (min-width: 1024px) {
    line-height: 26px;
    font-size: 2rem;
  }
`
