import React from 'react'

import {
  SectionServicesWrapper,
  ServiceItem,
  ServiceList,
  Services,
} from './styles'

const SectionServices: React.FC = () => {
  return (
    <SectionServicesWrapper id="services">
      <img
        src="/images/services/holographic-3D-medium-triangle.png"
        className="medium-triangle"
        alt=""
      />
      <ServiceList>
        <ServiceItem>
          <div className="icon">
            <img
              src="/images/services/smart-contract.png"
              className="smart-contract-icon"
            />
          </div>
          <h5 className="title">SMART CONTRACT</h5>
          <p className="description">
            Development technology in blockchain For you project
          </p>
        </ServiceItem>
        <ServiceItem>
          <div className="icon">
            <img
              src="/images/services/strategy-consulting.png"
              className="strategy-icon"
            />
          </div>
          <h5 className="title">STRATEGY CONSULTING</h5>
          <p className="description">
            Development technology in blockchain For you project
          </p>
        </ServiceItem>
        <ServiceItem>
          <div className="icon">
            <img
              src="/images/services/ux-design.png"
              className="ux-design-icon"
            />
          </div>
          <h5 className="title">UI/UX DESIGN</h5>
          <p className="description">
            Development technology in blockchain For you project
          </p>
        </ServiceItem>
        <ServiceItem>
          <div className="icon">
            <img
              src="/images/services/nft-project.png"
              className="nft-projects-icon"
            />
          </div>
          <h5 className="title">NFT PROJECTS</h5>
          <p className="description">
            Development technology in blockchain For you project
          </p>
        </ServiceItem>
        <ServiceItem>
          <div className="icon">
            <img
              src="/images/services/metaverse.png"
              className="metaverse-icon"
            />
          </div>
          <h5 className="title">METAVERSE</h5>
          <p className="description">
            Development technology in blockchain For you project
          </p>
        </ServiceItem>
        <ServiceItem>
          <div className="icon">
            <img
              src="/images/services/nft-generation.png"
              className="nft-generation-icon"
            />
          </div>
          <h5 className="title">NFT GENERATION</h5>
          <p className="description">
            Development technology in blockchain For you project
          </p>
        </ServiceItem>
      </ServiceList>
      <Services>Services</Services>
    </SectionServicesWrapper>
  )
}

export default SectionServices
