import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import SocialMedia from '../social/social'
import { HeaderBase, HeaderContent, NavItem } from './styles'

const Footer: React.FC = () => {
  const [sticky, setSticky] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 120) {
      setSticky(true)
    } else if (scrollTop < 77) {
      setSticky(false)
    }
  }

  const handleOpenMenuToggle = (): void => {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <HeaderBase sticky={sticky}>
      <Image src="/logo.png" width={203} height={34} />
      <button className="hamburger" onClick={handleOpenMenuToggle}>
        <span></span>
        <span></span>
      </button>
      <HeaderContent>
        <NavItem
          activeClass="active"
          spy
          smooth
          duration={600}
          to="about"
          offset={-77}
        >
          ABOUT
        </NavItem>
        <NavItem
          activeClass="active"
          spy
          smooth
          duration={600}
          to="services"
          offset={-55}
        >
          SERVICES
        </NavItem>
        <NavItem
          activeClass="active"
          className="featured"
          spy
          smooth
          duration={600}
          to="contact-us"
          offset={-120}
        >
          CONTACT US
        </NavItem>
        <SocialMedia className="header-social" />
      </HeaderContent>
    </HeaderBase>
  )
}

export default Footer
