import React from 'react'

function RegisterForm() {
  return (
    <div>
        <form>
            <label>
                First Name:
                <input type='text'/>
            </label>
            <label>
                Last Name:
                <input type='text'/>
            </label>
            <label>
                Email:
                <input type='email'/>
            </label>
            <label>
                Password:
                <input type='password'/>
            </label>
            <label>
                Confirm Password:
                <input type='password'/>
            </label>
        </form>
    </div>
  )
}

export default RegisterForm