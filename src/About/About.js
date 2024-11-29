import React from 'react'
import background from './image/Background.png'
import bg2 from './image/Bg2.png'
import mission from './image/Mission.png'
import section from './image/Section.png'   
import vision from './image/Vision.png'
function About(){
    return(
        <div>
            <div className='ml-20'>
                <img src={section}/>
            </div>
           
            <div className='ml-20'>
                <img src={bg2} className='w-1320 h-304.39 top-592 left-300 radius-16'/>
            </div>
            <div>
                <img src={background}/>
            </div>
            <div>
                <img src={vision}/>
            </div>
            <div>
                <img src={mission}/>
            </div>
        </div>
    )
}

export default About;