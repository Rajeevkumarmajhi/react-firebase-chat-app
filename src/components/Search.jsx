import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a user' />
      </div>
     <div className="userChat">
        <img src='https://www.w3schools.com/howto/img_avatar.png' alt='avatar' />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>

      </div> 
    </div>
  )
}

export default Search
