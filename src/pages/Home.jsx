import React from 'react'
import Chat from '../components/Chat'
import SideBar from '../components/SideBar'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <SideBar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
