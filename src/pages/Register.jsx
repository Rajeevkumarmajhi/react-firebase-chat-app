import React from 'react'
import Add from "../img/addAvatar.png"

const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Quick Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder='Display Name' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <input style={{ display:"none" }} type="file" id="file" />
                <label htmlFor="file">
                    <img src={Add} alt="avatar" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>You don't have a account? Register</p>
        </div>      
    </div>
  )
}

export default Register
