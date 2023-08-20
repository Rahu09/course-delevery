import { Card, Grid } from "@mui/material";
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { Loading } from "./Loading";
import { courseState } from "../store/atoms/course";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { courseTitle, coursePrice, isCourseLoading, courseImage } from "../store/selectors/course";

function Course() {
  let { id } = useParams();
  const setCourse = useSetRecoilState(courseState);
  const courseLoading = useRecoilValue(isCourseLoading);


  useEffect(() => {

    axios.get(`/api/admin/course/${id}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("auth"))
      }
    }).then(res => {
      setCourse({ isLoading: false, course: res.data.course });
    })
      .catch(e => {
        setCourse({ isLoading: false, course: null });
      });
  }, []);

  if (courseLoading) {
    return <Loading />
  }

  return <div className="gradient" style={{height:"100vh"}}>
    <GrayTopper />
    <Grid container>
      <Grid item lg={8} md={12} sm={12}>
        <UpdateCard />
      </Grid>
      <Grid item lg={4} md={12} sm={12}>
        <CourseCard />
      </Grid>
    </Grid>
  </div>
}

function GrayTopper() {
  const title = useRecoilValue(courseTitle);
  return <div style={{ height: 250, background: "black", top: 0, width: "100vw", zIndex: 0, marginBottom: -250 }}>
    <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <div>
        <Typography style={{ color: "white", fontWeight: 600 }} variant="h3" textAlign={"center"}>
          {title}
        </Typography>
      </div>
    </div>
  </div>
}

function UpdateCard() {
  const [courseDetails, setCourse] = useRecoilState(courseState);

  const [title, setTitle] = useState(courseDetails.course.title);
  const [description, setDescription] = useState(courseDetails.course.description);
  const [image, setImage] = useState(courseDetails.course.imageLink);
  const [price, setPrice] = useState(courseDetails.course.price);
  const navigate = useNavigate();

  return <div style={{ display: "flex", justifyContent: "center"}} >
    <Card varint={"outlined"} style={{ maxWidth: 700, marginTop: "35vh" }} className="course--card">
      <div style={{ padding: 25 }}>
        <Typography style={{ marginBottom: 10 }}>Update course details</Typography>
        <TextField
          value={title}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          fullWidth={true}
          label="Title"
          variant="outlined"
        />

        <TextField
          value={description}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
          fullWidth={true}
          label="Description"
          variant="outlined"
        />

        <TextField
          value={image}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setImage(e.target.value)
          }}
          fullWidth={true}
          label="Image link"
          variant="outlined"
        />
        <TextField
          value={price}
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          fullWidth={true}
          label="Price"
          variant="outlined"
        />

        <Button
          variant="contained"
          style={{background:"black"}}
          onClick={async () => {
            axios.put(`/api/admin/courses/` + courseDetails.course._id, {
              title: title,
              description: description,
              imageLink: image,
              published: true,
              price
            }, {
              headers: {
                "Content-type": "application/json",
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("auth"))
              }
            });
            let updatedCourse = {
              _id: courseDetails.course._id,
              title: title,
              description: description,
              imageLink: image,
              price
            };
            setCourse({ course: updatedCourse, isLoading: false });
            alert('course updated')
            navigate('/Courses')
          }}
        > Update course</Button>
      </div>
    </Card>
  </div>
}

function CourseCard(props) {
  const title = useRecoilValue(courseTitle);
  const imageLink = useRecoilValue(courseImage);

  return <div style={{ display: "flex" , marginTop: "23vh", justifyContent: "center", width: "100%"  }} >
    <Card style={{
      // margin: 10,
      width: 350,
      minHeight: 200,
      borderRadius: 20,
      marginRight: 50,
      paddingBottom: 15,
      zIndex: 2
    }} className="course--card">
      <img src={imageLink} style={{ width: 350 }} ></img>
      <div style={{ marginLeft: 10 }}>
        <Typography variant="h5">{title}</Typography>
        <Price />
      </div>
    </Card>
  </div>
}

function Price() {

  const price = useRecoilValue(coursePrice);
  return <>
    <Typography variant="subtitle2" style={{ color: "rgb(77, 49, 81)" }}>
      Price
    </Typography>
    <Typography variant="subtitle1">
      <b>Rs {price} </b>
    </Typography>
  </>
}

export default Course;