import React from 'react'
import section from './image/Section.png'
import bg1 from './image/Background.png'
import bg2 from './image/Background1.png'
import bg3 from './image/Background2.png'
import Frame860 from './image/Frame 860.png'
import Frame861 from './image/Frame 861.png'
function ExtraPage() {
  return (
    <div>
        <div className='ml-20'>
            <img src={section} alt=""/>
        </div>
        <div className='ml-20'>
        <div className='grid grid-cols-2 gap-6'>
        <div>
            <img src={bg1} alt="" className='w-3/4 h-3/2 top-592 left-300 radius-16'/>
        </div>

        <div className='grid grid-cols-1 gap-6'>
        <div>
            <img src={bg2}  alt="" className='w-3/4 h-3/2 top-592 left-300 radius-16'/>
        </div>
        <div>
            <img src={bg3} alt="" className='w-3/4 h-3/2 top-592 left-300 radius-16'/>
        </div>
        </div>
        </div>
        </div>
       
        
       
      
        <div className='ml-56'>
        <div>
            <img src={Frame861} alt="" className='w-1/2 h-1/2 top-1616 ml-56'/>
        </div>
        <div>
            <img src={Frame860} alt="" className='w-1/2 h-1/2 top-1616 ml-56'/>
        </div>
        </div>
       
    </div>
  )
}

export default ExtraPage;