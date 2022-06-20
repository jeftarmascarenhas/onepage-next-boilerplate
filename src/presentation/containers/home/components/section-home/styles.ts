import styled from 'styled-components'

export const HomeSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/images/home/img-home.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom center;
  padding: 9rem 2rem;
  @media screen and (min-width: 1024px) {
    padding: 5rem 2rem;
    min-height: 1098px;
  }
`

export const ButtonDown = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  max-width: 7.2rem;
  /* height: 126px; */
  padding: 2.2rem 2.5rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(22px);
  > .icon {
    width: 2.171rem;
    height: 2.743rem;
  }
  @media screen and (min-width: 1024px) {
    > .icon {
      width: 3.8rem;
      height: 4.8rem;
    }
    padding: 3.9rem 4.4rem;
    max-width: 12.6rem;
  }
`

export const HomeContent = styled.div`
  max-width: 241px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    max-width: 658px;
  }
`
