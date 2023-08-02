import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

function Landing() {

    const navigate = useNavigate();

    const [login, setLogin] = React.useState(
        localStorage.getItem("auth") ? true : false
    )

    function logout() {
        localStorage.removeItem("auth")
        setLogin(!login)
    }

    const reg = <div>
        <Button size="large" onClick={() => navigate('/signup')}>signup</Button>
        <br />
        <Button size="large" onClick={() => navigate('/login')}>login</Button>
    </div>

    const out = <div>
        <button onClick={logout}>Logout</button>
    </div>
    const handleClick = () => {
        console.log('clicked');
    }

    return <div className="landing-container">
        <div className="landing-intro landing black">
            <h1>Inspire. Educate.</h1>
            <h1>Empower</h1>
            <p>This is a community which provides free hands-on training in various fields of computer science</p>
            <p>and have an inclusive community focusing on a learn by doing approach.</p>
            <div className="chip-container">
                <Chip className="chips" label="Clickable" onClick={handleClick} />
                <Chip className="chips" label="Clickable" onClick={handleClick} />
                <Chip className="chips" label="Clickable" onClick={handleClick} />
            </div>
        </div>

        <div className="about-us">
            <div>
                <img src="https://wemakedevs.org/static/media/aboutus.02f2915b9ae736e9ef8a.png" alt="" />
            </div>
            <div>
                <h1>About us</h1>
                <ul>
                    <li>We believe that everyone, irrespective of their college or branch, technical or non-technical background can make it big. WeMakeDevs is an initiative built on this thought.</li>
                    <li>We provide hands-on training, mentorship for FREE and have an inclusive community.</li>
                    <li>Get expert guidance with career, Open Source, and internships, jobs around the world.</li>
                    <li>We are also having various events weekly or monthly. Do participate in those events to make your skills enhance.</li>
                    <div className="chip-container">
                        <Chip className="chips" label="Clickable" onClick={handleClick} />
                        <Chip className="chips" label="Clickable" onClick={handleClick} />
                        <Chip className="chips" label="Clickable" onClick={handleClick} />
                    </div>
                </ul>
            </div>
        </div>


        <div className="black landing">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>

        </div>
        {login ? out : reg}

    </div>
}

export default Landing;