import React from 'react'
import Sidebar from './Sidebar'
import MainContainer from './MainContainer'
import { useSelector } from 'react-redux'
import {Outlet} from 'react-router-dom';

const Body = () => {
  const sts= useSelector((store)=>store.app.isOpen)
  console.log(sts)
  return (
    <div className='flex'>
      {sts? <><div><Sidebar/></div></>: null}
      <div className='ml-3'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default Body