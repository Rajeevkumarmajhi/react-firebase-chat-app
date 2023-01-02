import { doc, onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { db } from '../firebase';

const Chats = () => {
  const [chats,setChats] = useState([]);
  const {currentUser} = useContext(AuthContext)
  
  useEffect(()=>{

    const getChats = () =>{
      
          const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
              // console.log("Current data: ", doc.data());
              setChats(doc.data());
          });
      
          return () =>{
            unsub();
          }
    }

    currentUser.uid && getChats()

  },[currentUser.uid]);

  console.log(chats);

  return (
    <div className='chats'>
      { Object.entries(chats)?.map((chat) => ( 
        <div className="userChat" key={chat[0]}>
          <img src={chat[1].userInfo.photoURL} alt='avatar' />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].userInfo.lastmessage?.text}</p>
          </div>
        </div> 
      ))}
    </div>
  )
}

export default Chats
