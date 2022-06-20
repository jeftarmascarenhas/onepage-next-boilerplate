import React from 'react'
import Twitter from '@/presentation/assets/images/twitter.svg'

import {
  DropUse,
  InfoItem,
  Infos,
  SectionContactUsWrapper,
  ServiceContainer,
} from './styles'

const SectionContactUs: React.FC = () => {
  const handleDropLine = () => {
    alert('handleDropLine')
  }
  return (
    <SectionContactUsWrapper id="contact-us">
      <ServiceContainer>
        <DropUse onClick={handleDropLine}>Drop us a line!</DropUse>
        <Infos>
          <InfoItem>All rights reserved to blocklabz™ 2022</InfoItem>
          <InfoItem className="medium">
            Development technology in blockchain For you project
          </InfoItem>
          <InfoItem className="medium">
            Development technology in blockchain For you project
          </InfoItem>
        </Infos>
        <Twitter className="social-icon" />
      </ServiceContainer>
      <img
        src="/images/about/holographic-3D-shape-2.png"
        className="small-square"
      />
      <div className="medium-section">
        <img
          src="/images/about/holographic-3D-shape-2.png"
          className="medium-square"
        />
      </div>
    </SectionContactUsWrapper>
  )
}

export default SectionContactUs
