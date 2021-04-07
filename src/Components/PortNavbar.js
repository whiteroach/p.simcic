import React,{useState, useEffect} from 'react'
import {Navbar, Nav} from 'react-bootstrap'
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
      // document.querySelector('#basic-navbar-nav').classList.add('fade')
      document.querySelector('#basic-navbar-nav').classList.remove('show')
    }
    const changeNav = () => {
      if(window.pageYOffset > 56){
        setNavBg(false)
      }else{setNavBg(true)}
    }
  //  window.onScroll(changeNavBgColor)
  useEffect(()=>{
    console.log('top changed!')
    changeNav()
  })
  window.addEventListener('scroll', changeNav)
    return (
       <>
       <Navbar expand="md" fixed = 'top' onScroll={(e)=>{console.log(window.pageYOffset)}} style={{backgroundColor:NavbarBg?'transparent':'blue'}}>
  <span onClick={scrollOnTop}>p.simcic</span>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav>
    <Nav>
          <Nav.Link> 
          <Link
              activeClass="active"
              to="about"
              exact="true"
              spy={true}
              smooth={true}
              // offset={-60}
              duration={900}
              onSetActive={closeMenu}
            >
            About
            </Link>
              </Nav.Link> 
           <Nav.Link> 
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
            <Nav.Link> <Link
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
       </>
    )
}

export default PortNavbar
