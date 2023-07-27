
import React from "react";
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
// import Panel from "./Panel";
/// This is the landing page. You need to add a link to the login page here.
/// Maybe also check from the backend if the user is already logged in and then show them a logout button
/// Logging a user out is as simple as deleting the token from the local storage.
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
            <div>
                <Chip className="chips" label="Clickable" onClick={handleClick} />
                <Chip className="chips" label="Clickable" onClick={handleClick} />
                <Chip className="chips" label="Clickable" onClick={handleClick} />
            </div>
        </div>

        <div className="gradient landing">
        {/* <Panel /> */}
            <h1>Welcome to course selling website!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
        </div>
        <div className="black landing">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, qui sit assumenda totam numquam quo ad. Vel consequuntur obcaecati minus minima nihil error quo, necessitatibus mollitia, neque distinctio ipsa deleniti.</p>
        </div>
        {login ? out : reg}

    </div>
}

export default Landing;