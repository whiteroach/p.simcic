import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";


const PortNavbar = () => {

  const [NavbarBg, setNavBg] = useState(true)

  const scrollOnTop = () => {
    scroll.scrollToTop();
  };

  const closeMenu = () => {
    document.querySelector('#basic-navbar-nav').classList.remove('show')
  }
  const changeNav = () => {
    if (window.pageYOffset > 56) {
      setNavBg(false)
    } else { setNavBg(true) }
  }

  window.addEventListener('scroll', changeNav)
  return (

    <Navbar expand="md" fixed='top' style={{ backgroundColor: NavbarBg ? 'transparent' : 'inherit',color:'inherit'}}>
      <span onClick={scrollOnTop}>p.simcic</span>
      <Navbar.Toggle style = {{color:'inherit'}}aria-controls="basic-navbar-nav">
        <span class="material-icons">menu</span>
        {/* <div class="close-icon py-1">✖</div> */}
      </Navbar.Toggle>
      
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav>
            <Nav.Link style={{color:'inherit'}}>
              <Link
                
                activeClass="active"
                to="about"
                exact="true"
                spy={true}
                smooth={true}
                // offset={-60}
                duration={300}
                onSetActive={closeMenu}
              >
                About
            </Link>
            </Nav.Link>
            <Nav.Link style={{color:'inherit'}}>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                // offset={-60}
                duration={900}
                onSetActive={closeMenu}
              >
                Projects
            </Link>
            </Nav.Link>
            <Nav.Link style={{color:'inherit'}}> <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              // offset={-60}
              duration={900}
              onSetActive={closeMenu}
            >
              Contact
              </Link>
            </Nav.Link>
          </Nav>
        </Nav>

      </Navbar.Collapse>
    </Navbar>

  )
}

export default PortNavbar
