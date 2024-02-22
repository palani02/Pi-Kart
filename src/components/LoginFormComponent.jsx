import React from 'react'

function LoginForm() {
  return (
    <div>
        <form >
            <label>
                User Name:
                <input type='text'/>
            </label>
            <label>
                Password:
                <input type='password'/>
            </label>
            <label>
               <button type="submit">Login</button>
            </label>
        </form>
    </div>
  )
}

export default LoginForm