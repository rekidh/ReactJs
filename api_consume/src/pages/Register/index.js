import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/atoms/Button'
import axios from 'axios'
import '../Login/login.css'

const Register =()=> {
  const [email,setEmail]=useState('')
  const [userName,setUserName]=useState('')
  const [pass,setPass]=useState('')
  const postApi= async ()=>{ 
          await axios.post(`http://192.168.18.255:5055/user`,{
            email:email,
            user_name:userName,
            password:pass
          })
          .then((res)=>console.log(res.data[0]))
        }

  return (
      <div className='login-container'>
        <div className='container-input'>
          <h3>Registration Form{email}</h3>
          <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="email or user name" />
          <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="username" />
          <input onChange={(e)=>setPass(e.target.value)} type="password" placeholder="password" />
          <Button name="login" className="btn-nav" fun={postApi}/>
        </div>
        <div>
          <Link to="/" > Back to Home </Link>
        </div>
      </div>
  )
}

export default Register