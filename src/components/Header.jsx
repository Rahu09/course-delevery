import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/users'


import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from '@mui/material/Typography';

function ResponsiveAppBar() {

	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [width, setWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		window.addEventListener("resize", ()=>setWidth(window.innerWidth));
		return () => window.removeEventListener("resize", ()=>setWidth(window.innerWidth));
	});
	
	const navigate = useNavigate()
	const {userLogin} = useRecoilValue(userState)
	const setUser = useSetRecoilState(userState);

	function logout() {
		localStorage.removeItem("auth")
		setUser({
			isLoading: false,
			userLogin: false
		})
		navigate('/')
		setTimeout(()=>alert("you have been logged out"),1000)
	}

	let show = <></>
	if(width>850){
		show = <div className='at--large'>
		<Button size="large" onClick={() => navigate('/Courses')}>All Courses</Button>
		<Button size="large" onClick={() => navigate('/addcourse')}>Add Course</Button>
		<Button size="large" onClick={logout}>Logout</Button>
	</div>
	} else {
		const handleOpenNavMenu = (event) => {
			setAnchorElNav(event.currentTarget);
		};
		const handleCloseNavMenu = (event, key) => {
			console.log(key);
			setAnchorElNav(null);
		};
		show = <div className='at--small'>
		<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
			<IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="false"
				onClick={handleOpenNavMenu}
				color="inherit"
			>
				<MenuIcon />
			</IconButton>
			<Menu
				id="menu-appbar"
				anchorEl={anchorElNav}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right"
				}}
				keepMounted
				transformOrigin={{
					vertical: "top",
					horizontal: "right"
				}}
				open={Boolean(anchorElNav)}
				onClose={() => handleCloseNavMenu("hi")}
				sx={{
					display: { xs: "block" }
				}}
			>
				<MenuItem onClick={() => navigate('/Courses')}>
					<Typography textAlign="center">Courses</Typography>
				</MenuItem>
				<MenuItem onClick={() => navigate('/addcourse')}>
					<Typography textAlign="center">Add course</Typography>
				</MenuItem>
				<MenuItem onClick={() => navigate('/Nopage')}>
					<Typography textAlign="center">Events</Typography>
				</MenuItem>
				<MenuItem onClick={() => navigate('/Nopage')}>
					<Typography textAlign="center">Newsroom</Typography>
				</MenuItem>
				<MenuItem onClick={logout}>
					<Typography textAlign="center">Logout</Typography>
				</MenuItem>
			</Menu>
		</Box>
	</div>
	}

	return (
		<>
			<div className='navbar-container'>
				<div className="navbar">
					<div className="navrighit">
						<Button size="large" onClick={() => navigate('/')}>Course \\_// delevery</Button>
					</div>
					<div className="navleft">
						{userLogin ?
							show :
							<div>
								<Button size="large" onClick={() => navigate('/login')}>Login / Signup</Button>
							</div>}
					</div>
				</div>
			</div>
		</>
	)
}
export default ResponsiveAppBar;