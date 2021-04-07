import React, {useContext} from 'react'
import{DesignContext} from '../Context/Context'
import Card from './Card'
const Projects = () => {
    const[theme] = useContext(DesignContext)
    const design = theme.isLight?{
        color:theme.light.color,
        bg:theme.light.bg}:
        {color:theme.dark.color,
        bg:theme.dark.bg }
        
    return (
        <section id='projects' style={{backgroundColor:design.color}}>
            <div className='container'>
                <span className='mb-3'><h3 className='mb-5'>projects</h3></span>
                <div className='d-flex row project-container'>
                <Card/>
                <Card/>
                <Card/>

                </div>
            </div>
        </section>
    )
}

export default Projects
