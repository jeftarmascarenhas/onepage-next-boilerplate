import React from 'react'
import Image from 'next/image'
import { LoadFeatures } from '@/domain/usecases'
import { Title } from '@/presentation/components'
import Hamburger from '@/presentation/assets/images/hamburger-menu.svg'
import { HomeSectionWrapper } from './styles'

type Props = {
  features: LoadFeatures.Model[]
}

const featureStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(333px, 533px))',
  gap: '2rem',
}

const HomeSection: React.FC<Props> = ({ features }: Props) => {
  return (
    <HomeSectionWrapper id="home">
      <Hamburger />
      <Title>Section-Home</Title>
      <div style={featureStyle}>
        {!!features.length &&
          features.map((feature) => (
            <div key={feature.id}>
              <Image
                src={feature.src}
                alt={feature.title}
                width={533}
                height={304}
                objectFit="cover"
              />
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
      </div>
    </HomeSectionWrapper>
  )
}

export default HomeSection
