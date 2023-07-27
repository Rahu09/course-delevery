import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';

function ResponsiveAppBar() {

    const navigate = useNavigate()
    const [login, setLogin] = React.useState(
        localStorage.getItem("auth") ? 
        <Button size="large" onClick={logout}>Logout</Button> : 
        <div>
            <Button size="large" onClick={() => navigate('/signup')}>signup</Button>
            <Button size="large" onClick={() => navigate('/login')}>login</Button>
        </div>
    )

    function logout() {
        localStorage.removeItem("auth")
        setLogin(<div>
            <Button size="large" onClick={() => navigate('/signup')}>signup</Button>
            <Button size="large" onClick={() => navigate('/login')}>login</Button>
        </div>)
    }
    const append = login ?
        <Button size="large" onClick={logout}>Logout</Button> :
        <div>
            <Button size="large" onClick={() => navigate('/signup')}>signup</Button>
            <Button size="large" onClick={() => navigate('/login')}>login</Button>
        </div>

    return (
        <>
            <div className='navbar-container'>
                <div className="navbar">
                    <div className="navrighit">
                        logo
                        <Button size="large" onClick={() => navigate('/')}>Logo</Button>
                    </div>
                    <div className="navleft">
                        <Button size="large" onClick={() => navigate('/Courses')}>Courses</Button>
                        <Button size="large" onClick={() => navigate('/Nopage')}>Mentorship</Button>
                        <Button size="large" onClick={() => navigate('/Nopage')}>Events</Button>
                        <Button size="large" onClick={() => navigate('/Nopage')}>Newsroom</Button>
                        {login}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResponsiveAppBar;
