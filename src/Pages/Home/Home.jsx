import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Main from '../../Components/Main/Main'

function Home() {
  return (
    <div className='bg-[#F3F3F7] flex'>
     <Sidebar/>
     <Main/>
    </div>
  )
}

export default Home