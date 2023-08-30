import React from 'react'
import axios from 'axios'
import Panel from './Panel'
import Cookies from 'js-cookie';
// import {userState} from "../store/atoms/users"
// import { useRecoilValue } from 'recoil'
//Purchased
function AllCourses() {
  // const admin = useRecoilValue(userState)
  let baseUrl = ""
  baseUrl = localStorage.getItem("account")

  Cookies.set('username', 'john_doe', { expires: 7 });
  const cookie = Cookies.get("username")
  const cookie1 = Cookies.get("token")
  // console.log(cookie,cookie1);
  // const BASE
  // console.log(baseUrl);
  const [courses, setCourses] = React.useState([])

  React.useEffect(() => {
    const getallcourses = async()=>{
      await axios.get(`${baseUrl}/courses`).then((res) => {
        // console.log(res);
        setCourses(res.data.courses)
      })
    }
    getallcourses()
    
  }, [])
  return (<div className='panel-container'>{courses.map((ele) => <Panel key={ele._id} title={ele} />)}</div>)
}

export default AllCourses