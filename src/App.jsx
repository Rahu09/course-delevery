import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import UpdateCourse from "./components/UpdateCourse";
import Purchased from "./components/Purchased";
import AllCourses from "./components/AllCourses";
import Header from "./components/Header";
import Nopage from "./components/Nopage";
import LogLogic from "./components/LogLogic";
import AddCourse from "./components/AddCourse";
import CoursePage from "./components/CoursePage";
import Course from "./components/Course";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <ScrollToTop />
          <LogLogic />
          <Header />
          <App2 />
        </Router>
      </RecoilRoot>
    </>
  );
}

const App2 = () => {
  const location = useLocation();
  let regex = /\/course\//i;
  return (
    <>
      <Routes>
        <Route path={"/addcourse"} element={<AddCourse />} />
        <Route path="/nopage" element={<Nopage />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/updatecourse/:id" element={<UpdateCourse />} />
        <Route path="/courses/purchased" element={<Purchased />} />
        <Route path="/Courses" element={<AllCourses />} />
        <Route path="/CoursePage/:id" element={<CoursePage />} />
        <Route path="/course/:id" element={<Course />} />
      </Routes>
      {!regex.test(location.pathname) && <Footer />}
    </>
  );
};

export default App;
