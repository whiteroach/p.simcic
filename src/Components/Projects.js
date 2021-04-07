import React from 'react'
import Card from './Card'
const Projects = () => {
    return (
        <section id='projects' style={{backgroundColor:'violet'}}>
            <div className='container '>
                <h3>projects</h3>
                <div className='d-flex row'>
                <Card/>
                <Card/>
                <Card/>

                </div>
            </div>
        </section>
    )
}

export default Projects
