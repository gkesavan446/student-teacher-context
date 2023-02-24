import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login/Login';
import Student from './components/Student/Student';
import Portal from "./components/Portal/Portal"
import { useState } from 'react';
import Mentor from './components/Teacher/Mentor';
import MentorView from './components/Teacher/MentorView';
import StudentView from './components/Student/StudentView';
import AdmissionForm from './components/Student/AdmissionForm';
import EditStudent from './components/Student/EditStudent';
import { UserProvider } from './components/Context/UserContext';

function App() {
  const [studentdata, setstudentData] = useState([
    {
      roll_no: 1,
      name: "Student 1",
      standard: 12,
      mother_name: "Lakshmi",
      father_name: "Karan",
      contact: "9090909090",
      address: "Chennai"
    },
    {
      roll_no: 2,
      name: "Student 2",
      standard: 12,
      mother_name: "Amudha",
      father_name: "Ashwin",
      contact: "9012345678",
      address: "Bangaluru"
    }
  ])
  const mentordata = [
    {
      employe_id: 1,
      name: "Tamizhini",
      subject: "Tamil",
      qualification: "B.A., Tamil",
      experience: "10 years",
      salary: 30000,
      contact: "9191919191",
      address: "Chennai"
    },
    {
      employe_id: 2,
      name: "Anne",
      subject: "English",
      qualification: "B.A., English",
      experience: "3 years",
      salary: 30000,
      contact: "9000190001",
      address: "Chennai"
    },
    {
      employe_id: 3,
      name: "Murugan",
      subject: "Maths",
      qualification: "M.sc., B.Ed.,",
      experience: "8 years",
      salary: 40000,
      contact: "9797979797",
      address: "Chennai"
    },
    {
      employe_id: 4,
      name: "Shakeela",
      subject: "Science",
      qualification: "M.Sc., Chemistry",
      experience: "2 years",
      salary: 35000,
      contact: "8080808080",
      address: "Chennai"
    },
    {
      employe_id: 5,
      name: "Somnath",
      subject: "Social",
      qualification: "M.A., History)",
      experience: "1 year",
      salary: 28000,
      contact: "7070707070",
      address: "chennai"
    }
  ]
  const [mentorVisible, setMentorVisible] = useState(false);
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Login setMentorVisible={setMentorVisible} />} />
        <Route path="/portal" element={<Portal />}>
          <Route path='mentor' element={<Mentor mentordata={mentordata} />} />
          <Route path='mentorview/:id' element={<MentorView mentordata={mentordata} />} />
          <Route path="student" element={<Student studentdata={studentdata} setstudentData={setstudentData} mentorVisible={mentorVisible} />} />
          <Route path='studentview/:id' element={<StudentView studentdata={studentdata} />} />
          <Route path='admissionform' element={<AdmissionForm studentdata={studentdata} setstudentData={setstudentData} />} />
          <Route path='editstudent/:id' element={<EditStudent studentdata={studentdata} setstudentData={setstudentData} />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;
