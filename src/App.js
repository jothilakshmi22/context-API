import "./App.css";
import SideBar from "./components/SideBar";
// import Dashboard from './components/Dashboard';
import AllStudents from "./components/AllStudents";
import AddStudent from "./components/AddStudent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import EditStudents from "./components/EditStudents";
export const studentContext = React.createContext();

function App() {
  //   let data = {
  //     earning:"40,000",
  //     annual:"2,40,000",
  //     task:20,
  //     pending:26

  //   }

  let [students, setStudents] = useState([
    {
      name: "jothi",
      email: "jothi@gmail.com",
      mobile: "123123123",
      batch: "B31",
      status: true,
    },
  ]);
  return (
    <>
      <Router>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "15% 85%",
          }}
        >
          <div>
            <SideBar />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <studentContext.Provider value={{ students, setStudents }}>
              <Routes>
                {/* <Route path = '/dashboard' element={<Dashboard data={data}/>}/> */}
                <Route path="/all-students" element={<AllStudents />} />
                <Route path="/add-student" element={<AddStudent />} />
                <Route
                  path="/edit-student/:id"
                  element={<EditStudents data={{ students, setStudents }} />}
                />
                {/* <Route path = '*' element={<Dashboard data={data}/>}/> */}
              </Routes>
            </studentContext.Provider>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
