import styled, { keyframes, css } from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { HeaderBaseProps } from './types'

const fixednimate = keyframes`
  from {
    top: -1.6rem;
  }
  to {
    top: 0;
  }
`

//1rem = 10px
//1.6rem = 16px

export const HeaderBase = styled.header<HeaderBaseProps>`
  position: ${({ sticky }) => (sticky ? 'fixed' : 'relative')};
  width: 100%;
  text-align: center;
  padding: 3rem;
  font-size: 1.6rem;
  background-color: ${({ theme }): string => theme.palette.grey['900']};
  ${({ sticky }) =>
    sticky &&
    css`
      animation: ${fixednimate} 0.36s linear alternate;
    `};
`

export const NavItem = styled(LinkScroll)`
  padding: 1rem;
  color: ${({ theme }): string => theme.palette.primary.main};
  &.active,
  &:hover {
    color: ${({ theme }): string => theme.palette.secondary.main};
  }
`
