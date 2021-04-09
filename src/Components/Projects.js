import React from 'react'
import Card from './Card'
const Projects = () => {
      
    return (
        <section id='projects'>
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
