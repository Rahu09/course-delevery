import React from 'react'
import axios from 'axios'
import { Button, TextField, Card } from '@mui/material'

function Login() {
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
    })
  }

  return (
    <div className='signup--container'>
            <Card className='signup--container--card'>
                <TextField onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="username" variant="outlined" />
                <TextField onChange={(e) => setPassword(e.target.value)} id="outlined-basic" label="password" variant="outlined" />
                <Button variant="contained" onClick={handleSubmit}>login</Button>
            </Card>
        </div>
  )
}

export default Login