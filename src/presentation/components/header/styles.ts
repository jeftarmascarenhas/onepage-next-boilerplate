import styled, { keyframes, css } from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { HeaderBaseProps } from './types'

type NavMobileProps = {
  open: boolean
}

const fixedAnimate = keyframes`
  from {
    top: -1.6rem;
  }
  to {
    top: 0;
  }
`

//1rem = 10px
//1.6rem = 16px
//background-color: ${({ theme }): string => theme.palette.grey['900']};
export const HeaderBase = styled.header<HeaderBaseProps>`
  position: ${({ sticky }) => (sticky ? 'fixed' : 'absolute')};
  width: 100%;
  text-align: center;

  padding: 3rem;
  font-size: 1.6rem;

  ${({ sticky }) =>
    sticky &&
    css`
      animation: ${fixedAnimate} 0.36s linear alternate;
    `};
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ sticky }) =>
    sticky &&
    css`
      border-color: #20f9f9;
      backdrop-filter: blur(28px);
    `};
  .hamburger {
    display: flex;
    background-color: transparent;
    border: none;
    width: 28px;
    > span {
      width: 100%;
      height: 1px;
      display: block;
      background-color: white;
      margin-bottom: 10px;
    }
  }
`

export const NavItem = styled(LinkScroll)`
  padding: 1rem 2.3rem;
  font-size: 1.6rem;
  line-height: 20px;
  color: ${({ theme }): string => theme.palette.common.white};
  border-radius: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &.active,
  &:hover {
    color: ${({ theme }): string => theme.palette.secondary.main};
  }
  &.featured {
    border: 0.2rem solid ${({ theme }): string => theme.palette.common.white};
  }
`

export const HeaderContent = styled.div`
  padding-left: 4.7rem;
  padding-right: 4.7rem;
  flex: 1;
  gap: 2rem;
  display: none;
  > .header-social {
    margin-left: 2rem;
    opacity: 0.2;
  }
  @media screen and (min-width: 1100px) {
    display: flex;
    justify-content: center;
    max-width: 1000px;
    /* grid-template-columns: repeat(3, auto); */
  }
`

export const NavMobile = styled.nav<NavMobileProps>`
  display: flex;
  flex-direction: column;
  position: fixed;
  min-height: 85px;
  top: -100px;
  left: 0;
  z-index: -999;
  opacity: 0;
  box-shadow: 0px 4px 0px rgba(0, 0, 0, 0.1);
  background-color: inherit;
  border-radius: 0px 0px 20px 20px;
  width: 100%;
  background-color: inherit;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      top: 69px;
      z-index: 90;
      visibility: visible;
    `}
  @media screen and (min-width: 1100px) {
    display: none;
  }
`
