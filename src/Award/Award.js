import React from 'react'
import Frame840 from './image/Frame 840.png'
import TopPC from './image/TopPC.png'
import para1 from './image/para1.png';
import para2 from './image/para2.png';
import para3 from './image/para3.png';

function Award() {
    return (
        <div>
             <div className='relative'>
             <div>
                   <img src={Frame840} className='absolute object-cover '/>
                    <img src={para2} className=' absolute object-cover '/>
                    <img src={para3} className=' absolute object-cover'/>
            </div>
            </div>
                
            <div className=' relative mb-24'>
                    <img src={TopPC} classname='mb-20'/>
            </div>
        </div>
    )
}

export default Award;