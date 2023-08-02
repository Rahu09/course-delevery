import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/users'

function ResponsiveAppBar() {

    const navigate = useNavigate()
    const login = useRecoilValue(userState)
    const setUser = useSetRecoilState(userState);

    const add = login.userLogin ?
        <div>
            <Button size="large" onClick={logout}>Logout</Button>
            <Button size="large" onClick={() => navigate('/Courses')}>Courses</Button>
            <Button size="large" onClick={() => navigate('/Nopage')}>Mentorship</Button>
            <Button size="large" onClick={() => navigate('/Nopage')}>Events</Button>
            <Button size="large" onClick={() => navigate('/Nopage')}>Newsroom</Button>
        </div> :
        <div>
            <Button size="large" onClick={() => navigate('/signup')}>signup</Button>
            <Button size="large" onClick={() => navigate('/login')}>login</Button>
        </div>

    function logout() {
        localStorage.removeItem("auth")
        setUser({
            isLoading: false,
            userLogin: false
        })
    }

    return (
        <>
            <div className='navbar-container'>
                <div className="navbar">
                    <div className="navrighit">
                        logo
                        <Button size="large" onClick={() => navigate('/')}>Logo</Button>
                    </div>
                    <div className="navleft">
                        {login.userLogin ?
                        <div>
                            <Button size="large" onClick={() => navigate('/Courses')}>Courses</Button>
                            <Button size="large" onClick={() => navigate('/Nopage')}>Mentorship</Button>
                            <Button size="large" onClick={() => navigate('/Nopage')}>Events</Button>
                            <Button size="large" onClick={() => navigate('/Nopage')}>Newsroom</Button>
                            <Button size="large" onClick={logout}>Logout</Button>
                        </div> :
                        <div>
                            <Button size="large" onClick={() => navigate('/signup')}>signup</Button>
                            <Button size="large" onClick={() => navigate('/login')}>login</Button>
                        </div>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ResponsiveAppBar;
