import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/atoms/Button'
import './login.css'
import axios from 'axios'

const Login = () => {
  const [result,setResult]= useState([])  
  const [user_name,setUser_name] = useState('')
  const [password,setPassword] = useState('')

  const getApi= async ()=>{ 
          await axios.post(`http://192.168.100.66:5055/user/login`,{
            user_name : user_name,
            password : password
          })
          .then((res)=>setResult(res.data.data[0]))
        }
  const cek = [password===result.password,user_name===result.user_name]
        
  return (
    <div className='login-container'>
      <div className='container-input'>
        <h3>Login Form</h3>
        <input onChange={(e)=>setUser_name(e.target.value)} type="text" id='email' placeholder="email or user name" />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="password" />
        <Button name="login" className="btn-nav" fun={getApi}/>
      </div>
      <div>
        <Link to="/" > Back to Home </Link>
      </div>
    </div>
  )
}

export default Login