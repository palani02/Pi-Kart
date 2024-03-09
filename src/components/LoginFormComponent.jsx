import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../config/fire'
import './LoginFormComponent.css'
function LoginFormComponent() {
  const navigate = useNavigate();
  const[values,setValues] = useState({
    email:"",
    pass:"",
  });
  const[errorMsg,setErrorMsg] = useState("");
  const[submitButtonDisabled,setSubmitButtonDisabled] = useState(false);
  const handleSubmission=()=>{
    if(!values.email || !values.pass)
    {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth,values.email,values.pass)
    .then(async(res)=>{
      setSubmitButtonDisabled(false)
      navigate("/");
    })
    .catch((err)=>{
      setSubmitButtonDisabled(false);
      setErrorMsg(err.message)
    })
  }
  return (
    <div>
        <form className='login-form'>
          <div className="login-content">
          <div className='login-title'>Login Credential</div>
            <label>
                Email
                <input type='email' onChange={(event)=>setValues((prev)=>({...prev,email:event.target.value}))} placeholder='Enter Your Email'/>
            </label>
            <label>
                Password
                <input type='password' onChange={(event)=>setValues((prev)=>({...prev,pass:event.target.value}))} placeholder='Enter your password'/>
            </label>
            <div>
              <b>{errorMsg}</b>
            </div>
            <label>
               <button disabled={submitButtonDisabled} onClick={handleSubmission} type="submit">Login</button>
            </label>
            </div>
        </form>
    </div>
  )
}

export default LoginFormComponent