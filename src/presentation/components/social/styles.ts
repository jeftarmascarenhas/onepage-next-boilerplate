import styled from 'styled-components'

type SocialProps = {
  type?: 'dark' | 'light'
}

export const SocialBase = styled.div<SocialProps>`
  justify-content: center;
  display: none;
  .icon {
    margin-right: 3rem;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
  }
  .social-icon,
  .social-icon path {
    /* fill: ${({ theme }) => theme.palette.common.white}; */
  }
  @media screen and (min-width: 1100px) {
    display: flex;
  }
`
