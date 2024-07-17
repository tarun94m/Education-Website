import React, { useEffect, useState } from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><AnchorLink href="#home">Home</AnchorLink></li>
        <li><AnchorLink href="#program">Program</AnchorLink></li>
        <li><AnchorLink href="#about">About us</AnchorLink></li>
        <li><AnchorLink href="#gallery">Campus</AnchorLink></li>
        <li><AnchorLink href="#testimonial">Testimonials</AnchorLink></li>
        <li><button className='btn'><AnchorLink href="#contact">Contact us</AnchorLink></button></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
