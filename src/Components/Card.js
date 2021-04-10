import React,{useState} from 'react'


const Card = () => {
    const[isFlipped, setFlip]= useState(false);
    const flip = () => {
        setFlip(!isFlipped)
    }
    
    return (
       <div className = 'project col-md-4'>
           <div className= {isFlipped?'project-inner is-flipped':'project-inner'} onClick={flip}>
               <div className='project-face project-face-front'>
                   <div className='project-content'>
                       <div className='project-header'>
                           <img src='' alt='' className='project-pic'></img>
                       </div>
                       <div className='project-body'>
                           <h3>title</h3>
                       </div>
                   </div>
               </div>
               <div className='project-face project-face-back'>
                   <div className='project-description'>
                       <p>The alarm still oscillated, louder here, the rear of the previous century. The Tessier-Ashpool ice shattered, peeling away from the Chinese program’s thrust.
                        </p>
                   </div>
                   <div className= 'project-links'>
                    <span><a href='https://github.com/whiteroach' target='_blank'><i class="fab fa-github-square"></i></a></span>
                    <span><a href='' target='_blank'><i class="fas fa-globe"></i></a></span>
                    <span class="material-icons" style={{fontSize:'40px'}}>preview</span>
                   </div>
               </div>
           </div>
       </div>
    )
}

export default Card
