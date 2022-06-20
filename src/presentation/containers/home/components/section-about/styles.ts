import styled from 'styled-components'

// background-color: ${({ theme }): string => theme.palette.grey['700']};
export const SectionAboutWrapper = styled.section`
  min-height: 600px; // remove isso é só para a seção ficar uma altura
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .holographic,
  .holographic-shape {
    width: 100%;
    position: absolute;
  }
  .holographic {
    max-width: 120px;
    display: block;
    height: auto;
    z-index: 1;
    top: 0;
    right: 0;
  }
  .holographic-shape {
    position: relative;
    max-width: 60px;
    z-index: 1;
    top: 50px;
    left: 100px;
  }
  .holographic-big {
    width: 100%;
    max-width: 128px;
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .arrow-right {
    margin-top: 40px;
    margin-right: 40px;
    max-width: 38px;
  }

  .small-triangle {
    position: absolute;
    left: 0;
    bottom: 0;
    max-width: 170px;
  }
  @media screen and (min-width: 768px) {
    .holographic-big {
    }
  }
  @media screen and (min-width: 1180px) {
    min-height: 900px;
    .holographic-big {
      max-width: 528px;
      bottom: -170px;
    }
    .holographic {
      top: -100px;
      right: -80px;
      max-width: 400px;
    }
    .holographic-shape {
      left: 0;
      max-width: 213px;
    }
  }

  @media screen and (min-width: 1190px) {
    .holographic-big {
      max-width: 628px;
      bottom: -270px;
    }
  }
`

export const AboutContainer = styled.div`
  width: 100%;
  max-width: 658px;
  display: flex;
  flex-direction: column;
  position: relative;
  /* @media screen and (min-width: 1024px) {
    max-width: 658px;
  } */
`

export const AboutContent = styled.div`
  max-width: 539px;
  display: flex;
  margin-top: 10rem;
  align-items: flex-start;
  .title {
    margin: 0;
  }
  /* @media screen and (min-width: 1024px) {
    max-width: 658px;
  } */
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
`
