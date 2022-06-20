import React from 'react'
import { SubTitle, Title } from '@/presentation/components'
import {
  SectionAboutWrapper,
  AboutContent,
  AboutContainer,
  AboutText,
} from './styles'

const SectionAbout: React.FC = () => {
  return (
    <SectionAboutWrapper id="about">
      <img
        src="/images/about/holographic-3D-small-triangle.png"
        className="small-triangle"
      />
      <AboutContainer>
        <img
          src="/images/about/holographic-3D-blue.png"
          className="holographic"
        />
        <img
          src="/images/about/Holographic-3D-shape-2.png"
          className="holographic-shape"
        />
        <AboutContent>
          <img src="/images/about/arrow-right.png" className="arrow-right" />
          <AboutText>
            <Title className="title">About us</Title>
            <SubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              tempor orci ex, in congue nulla fermentum ut. Nunc enim lacus,
              lobortis eu mi ut, tincidunt blandit justo. Nunc enim turpis,
              elementum nec urna sed, luctus tincidunt est.
            </SubTitle>
          </AboutText>
        </AboutContent>
      </AboutContainer>
      <img
        src="/images/about/holographic-3D-big.png"
        className="holographic-big"
      />
    </SectionAboutWrapper>
  )
}

export default SectionAbout
