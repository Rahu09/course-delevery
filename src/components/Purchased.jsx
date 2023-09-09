import React from "react";
import axios from "axios";
import Panel from "./Panel";
// import {userState} from "../store/atoms/users"
// import { useRecoilValue } from 'recoil'
//Purchased
function AllCourses() {
  // const admin = useRecoilValue(userState)
  let baseUrl = "";
  baseUrl = localStorage.getItem("account");
  // console.log("hi"+admin.baseUrl);
  // const BASE
  // console.log(baseUrl);
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    const getallcourses = async () => {
      await axios.get(`${baseUrl}/purchasedCourses`).then((res) => {
        setCourses(res.data.purchasedCourses);
      });
    };
    getallcourses();
  }, []);
  return (
    <div className="panel-container">
      {courses.map((ele) => (
        <Panel key={ele._id} title={ele} />
      ))}
    </div>
  );
}

export default AllCourses;
