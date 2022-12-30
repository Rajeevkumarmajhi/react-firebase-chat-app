import React, { useState } from 'react';
import Add from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth,storage,db } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Register = () => {
  const [error,setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email       = e.target[1].value;
    const password    = e.target[2].value;
    const file        = e.target[3].files[0];
    
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(       
        (error) => {
          console.warn(error);
          setError(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {

            await updateProfile(res.user,{
              displayName,
              photoURL:downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid : res.user.uid,
              displayName,
              email,
              photoURL:downloadURL,
            });

            await setDoc(doc(db,"userChats",res.user.uid),{})

          });
        }
      );

      console.log(res);

    }catch(err){
      console.warn(err);
      setError(true);
    }
  
  }




  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className="logo">Quick Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Display Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="avatar" />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {
            error && <span> Something went wrong</span>
          }
        </form>
        <p>You don't have a account? Register</p>
      </div>
    </div>
  )
}

export default Register
