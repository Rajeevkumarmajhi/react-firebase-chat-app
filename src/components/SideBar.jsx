import React from 'react'
import Chats from './Chats'
import Navbar from './Navbar'
import Search from './Search'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default SideBar
