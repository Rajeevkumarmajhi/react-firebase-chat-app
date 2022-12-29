import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className="logo">Quick Chat</span>
            <span className="title">Login</span>
            <form>
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>Sign In</button>
            </form>
            <p>You do have a account? Login</p>
        </div>
    </div>
  )
}

export default Login
