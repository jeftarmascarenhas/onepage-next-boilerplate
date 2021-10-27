import React, { useState, useEffect } from 'react'
import { HeaderBase, NavItem } from './styles'

const Footer: React.FC = () => {
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 120) {
      setSticky(true)
    } else if (scrollTop < 77) {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return (): void => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <HeaderBase sticky={sticky}>
      <NavItem
        activeClass="active"
        spy
        smooth
        duration={600}
        to="home"
        offset={-77}
      >
        Home
      </NavItem>
      <NavItem
        activeClass="active"
        spy
        smooth
        duration={600}
        to="example"
        offset={-55}
      >
        Example
      </NavItem>
    </HeaderBase>
  )
}

export default Footer
