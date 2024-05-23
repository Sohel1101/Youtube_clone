import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import VideoPage from './VideoPage'
const MainContainer = () => {
  return (
    <div className='flex flex-col overflow-x-hidden mt-16'>
         <ButtonList/>
         <VideoContainer/>
    </div>
  )
}

export default MainContainer