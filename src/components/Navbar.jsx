import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Quick Chat</span>
      <div className="user">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
