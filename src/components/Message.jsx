import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src='https://www.w3schools.com/howto/img_avatar.png' alt="avatar" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
      {/* <img src='https://www.w3schools.com/howto/img_avatar.png' alt="avatar" /> */}

      </div>
    </div>
  )
}

export default Message
