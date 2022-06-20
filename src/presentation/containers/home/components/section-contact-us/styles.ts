import styled from 'styled-components'

// background-color: ${({ theme }): string => theme.palette.grey['700']};
export const SectionContactUsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* overflow: hidden; */
  background: linear-gradient(
    90deg,
    rgba(50, 41, 129, 1) 0%,
    rgba(38, 49, 126, 0.4192270658263305) 100%
  );
  .social-icon {
  }
  .small-square {
    position: absolute;
  }
  .small-square {
    max-width: 100px;
    left: 100px;
    bottom: 0;
    transform: translateY(-50%);
    display: none;
  }
  .medium-square {
    max-width: 130px;
    position: relative;
    transform: translate(130%, -10%);
  }
  .medium-section {
    position: relative;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    .small-square {
      display: block;
    }
    .medium-square {
      display: block;
      transform: translateY(30%);
    }
  }
`

export const ServiceContainer = styled.div`
  width: 100%;
  max-width: 880px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1190px) {
    max-width: 1034px;
  }
`

export const DropUse = styled.button`
  position: relative;
  top: -81px;
  z-index: 1;
  background-color: #5444c2;
  border: 0;

  padding-top: 4.8rem;
  padding-bottom: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Kumbh Sans;
  font-size: 45px;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  align-self: stretch;
  min-height: 162px;
  box-shadow: 0px 8px 9px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  @media screen and (min-width: 768px) {
    border-radius: 30px;
  }
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`

export const InfoItem = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-bottom: 3rem;
  .medium {
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0rem;
  }
`
