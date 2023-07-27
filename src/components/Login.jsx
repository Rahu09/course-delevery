import React from 'react'
import axios from 'axios'
import { Button, TextField, Card } from '@mui/material'
import {useNavigate} from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      "username": username,
      "password": password
    }
    axios.post("/api/users/login", {}, {
      headers: user
    }).then((res) => {
      localStorage.setItem('auth', JSON.stringify(res.data.token));
      navigate('/')
    })
  }

  return (
    <div className='signup--container'>
      <div className='signup-head'>
        <h1>Welcome To Course Delivery</h1>
        <h2>login to your account.</h2>
      </div>

      <Card className='signup--container--card'>
        <TextField className='text' onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="username" variant="outlined" />
        <TextField className='text' onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="password" variant="outlined" />
        <Button  variant="contained" onClick={handleSubmit}>login</Button>
      </Card>
    </div>
  )
}

export default Login