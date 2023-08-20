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
    const getallcourses = async()=>{
      await axios.get("/api/admin/courses", {
        headers: token
      }).then((res) => {
        console.log(res);
        setCourses(res.data.courses)
      })
    }
    getallcourses()
    
  }, [])
  return (<div className='panel-container'>{courses.map((ele) => <Panel key={ele._id} title={ele} />)}</div>)
}

export default AllCourses