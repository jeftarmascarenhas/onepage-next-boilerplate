import React from 'react'
import Twitter from '@/presentation/assets/images/twitter.svg'
import { SocialBase } from './styles'

type SocialMediaProps = {
  type?: 'dark' | 'light'
} & React.HTMLAttributes<HTMLDivElement>

const SocialMedia: React.FC<SocialMediaProps> = ({
  type,
}: SocialMediaProps) => {
  return (
    <SocialBase type={type}>
      <a
        href="https://twitter.com/MonsterSuitNFT"
        target="_blank"
        rel="noreferrer"
        className="icon"
      >
        <Twitter className="social-icon" />
      </a>
    </SocialBase>
  )
}

export default SocialMedia
