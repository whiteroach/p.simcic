import React,{useContext} from 'react'
import {DesignContext} from '../Context/Context'
import PortNavbar from './PortNavbar'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const PageContainer = () => {
    const[theme]= useContext(DesignContext)
    return (
        <div id ='pageContainer' className={theme.isLight?'light':'dark'}>
            <PortNavbar/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/> 
        </div>
    )
}

export default PageContainer
