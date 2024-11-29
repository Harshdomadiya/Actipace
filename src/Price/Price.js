import React from 'react'
import bg1 from './image/Bg-1.png';
import bg2 from './image/Bg-2.png';
import bg3 from './image/Bg-3.png';
import sec1 from './image/Section1.png';
import sec2 from './image/Section.png';
function Price() {
  return (
    // <div className='ml-10'>
    //     <div className='container mx-auto py-4 px-6'>
    //         <img src={sec1} className='w-1320 h-304.39'/>
    //     </div>
    //     <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
    //     <div>
    //         <img src={bg1} className='w-345.09 h-867.24'/>
    //     </div>
    //     <div>
    //         <img src={bg2} className='w-348.37 h-867.24'/>
    //     </div>
    //     <div>
    //         <img src={bg3} className='w-343.45 h-867.24'/>
    //     </div>
    //     </div>
      
    //     <div className=' ml-14 w-1320 h-521 top-1558 left-300'>
    //         <img src={sec2}/>
    //     </div>
    // </div>
    <div className='ml-10'>
        <div className='container mx-auto py-4 px-6'>
            <img src={sec1} className='w-300 h-204.39'/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <div>
            <img src={bg1} className='w-245.09 h-767.24'/>
        </div>
        <div>
            <img src={bg2} className='w-248.37 h-767.24'/>
        </div>
        <div>
            <img src={bg3} className='w-243.45 h-767.24'/>
        </div>
        </div>
      
        <div className=''>
            <img src={sec2} className='ml-14 w-1200 h-421 top-1458 left-300'/>
        </div>
    </div>
  )
}

export default Price;