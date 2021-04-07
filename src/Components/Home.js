import React,{useContext} from 'react'
import{DesignContext} from '../Context/Context'
import ThemeButton from './ThemeButton'
const Home = () => {
    const[theme] = useContext(DesignContext)
    const design = theme.isLight?{
        color:theme.light.color,
        bg:theme.light.bg}:
        {color:theme.dark.color,
        bg:theme.dark.bg }


   
    return (
        <section style={{backgroundColor:design.color}} id ='home' className='d-flex flex-column justify-content-center align-items-center'>
         
            <ThemeButton/>
            <h1>Pietro Simcic</h1>
            <h3>Web Developer</h3>

        </section>
    )
}

export default Home
