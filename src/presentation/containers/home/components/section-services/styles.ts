import styled, { css } from 'styled-components'

// background-color: ${({ theme }): string => theme.palette.grey['700']};
export const SectionServicesWrapper = styled.section`
  min-height: 100vh; // remove isso é só para a seção ficar uma altura
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 10.3rem;
  overflow: hidden;
  .medium-triangle {
    max-width: 218px;
  }
`

export const ServiceList = styled.ul`
  position: relative;
  z-index: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 246px);
  overflow-x: auto;
  gap: 3rem;
  padding: 3rem;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1190px) {
    max-width: 1200px;
    padding: 5rem;
    gap: 3rem;
    grid-template-columns: repeat(3, minmax(246px, 1fr));
  }
`

const itemEffect = css`
  background: rgba(255, 255, 255, 0.2);
  border-color: #20f9f9;
  backdrop-filter: blur(28px);
`

export const ServiceItem = styled.li`
  display: flex;
  flex-direction: column;
  transition: all 0.42s ease-in;
  border-radius: 30px;
  padding: 4rem 3.8rem;
  border: 3px solid transparent;
  cursor: pointer;

  .smart-contract-icon {
    max-width: 57px;
  }
  .strategy-icon {
    max-width: 57px;
  }
  .ux-design-icon {
    max-width: 48px;
  }
  .nft-projects-icon {
    max-width: 50px;
  }
  .metaverse-icon {
    max-width: 41px;
  }
  .nft-generation-icon {
    max-width: 57px;
  }
  .icon {
    min-height: 80px;
  }
  .title {
    font-family: Kumbh Sans;
    font-size: 2.6rem;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .description {
    font-family: Kumbh Sans;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
    margin-top: 0.8rem;
  }

  &:hover {
    width: 100%;
    ${itemEffect};
  }

  @media screen and (max-width: 1024px) {
    ${itemEffect}
  }
`

export const Services = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  font-family: 'Kumbh Sans';
  font-style: normal;
  font-weight: 400;
  line-height: 198px;
  color: #ffffff;
  transform: rotate(270deg) translate(50%, 100%);
  transform-origin: 0, 0;
  display: none;
  @media screen and (min-width: 1180px) {
    display: block;
    font-size: 130px;
  }

  @media screen and (min-width: 1190px) {
    font-size: 160px;
  }
`
