import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";
function AddCourse() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");
	const [price, setPrice] = useState(0)

	const handleSubmit = async(e) => {
		e.preventDefault();
		const body = {
			title: title,
			description: description,
			price,
			imageLink: image,
			published: true
		}

		await axios.post("/api/admin/courses", body, {
			headers: {
				Authorization: "Bearer " + JSON.parse(localStorage.getItem("auth"))
			}
		});
		alert("Added course!");
	}

	return <div className="signup--container gradient" style={{ height:"100%", minHeight: "83vh"}}>
		<div style={{ display: "flex", justifyContent: "center" }}>
			<Card varint={"outlined"} className='signup--container--card' style={{ width: "30vw", padding: 20 }}>
				<TextField
					style={{ marginBottom: 10 }}
					onChange={(e) => {
						setTitle(e.target.value)
					}}
					fullWidth={true}
					label="Title"
					variant="outlined"
				/>

				<TextField
					style={{ marginBottom: 10 }}
					onChange={(e) => {
						setDescription(e.target.value)
					}}
					fullWidth={true}
					label="Description"
					variant="outlined"
				/>

				<TextField
					style={{ marginBottom: 10 }}
					onChange={(e) => {
						setImage(e.target.value)
					}}
					fullWidth={true}
					label="Image link"
					variant="outlined"
				/>

				<TextField
					style={{ marginBottom: 10 }}
					onChange={(e) => {
						setPrice(e.target.value)
					}}
					fullWidth={true}
					label="Price"
					variant="outlined"
				/>

				<Button
					size={"large"}
					variant="contained"
					onClick={handleSubmit}
					style={{width:"40%"}}
				> Add course</Button>
			</Card>
		</div>
	</div>
}

export default AddCourse;