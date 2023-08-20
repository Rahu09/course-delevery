import React from 'react'
import axios from "axios"
import { Button, TextField, Card } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/users";
import { Link } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState("")
  const [password, setPassword] = React.useState("")
  const setUser = useSetRecoilState(userState)

  const [exist, setExist] = React.useState(<p></p>)

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      password
    }
    axios.post("/api/admin/signup", body)
      .then((res) => {
        localStorage.setItem('auth', JSON.stringify(res.data.token));
        setUser({
          isLoading: false,
          userLogin: true
        })
        navigate('/')
      }).catch(() => setExist(<p>user already exist</p>))
  }

  return (
    <div className='signup--container gradient'>
      <div className='signup-head'>
        <h1>Welcome To Course Delivery</h1>
        <h2>Don't have an account yet?. SIGNUP!!</h2>
      </div>

      <Card className='signup--container--card'>
        <TextField className='text' onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="username" variant="outlined" />

        <TextField className='text' onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="password" type={"password"} variant="outlined" />
        
        <Button variant="contained" onClick={handleSubmit}>Register</Button>
      </Card>
      <div >
        {exist}
      </div>
      <div>Already have an acount? <Link to="/Login">Login</Link></div>
    </div>
  )
}

export default Signup