import React from 'react'
import axios from 'axios'
import Panel from './Panel'
//Purchased
function AllCourses() {
  const [courses, setCourses] = React.useState([])

  const token = {
    Authorization: "Bearer " + JSON.parse(localStorage.getItem("auth"))
  }
  React.useEffect(() => {
    axios.get("/api/users/courses", {
      headers: token
    }).then((res) => {
      console.log(res);
      setCourses(res.data.courses)
    })
  }, [])
  let render = courses.length !== 0 ?
    <div className='panel-container'>{courses.map((ele) => <Panel key={ele._id} title={ele} />)}</div> :
    <div className='panel-container-null'>you need to login to see the content</div>

  return (render)
}

export default AllCourses