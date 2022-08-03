import React, { useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { studentContext } from "../App";

function AllStudents(props) {
  const context = useContext(studentContext);
  console.log("context data", context);
  // console.log(props.data);

  // let [stu, setStu] = useState(props.data.students);

  let navigate = useNavigate();
  let handleDelete = (i) => {
    let newArr = [...context.students];
    newArr.splice(i, 1);
    context.setStudents(newArr);

    // let arr = props.data.students;
    // arr.splice(i, 1);
    // console.log(arr);
    // props.data.setStudents(arr); //this is an issue component is not renderring  thats why we neeed to update state
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Batch</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {context.students.map((e, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.batch}</td>
                <td>
                  {e.status ? (
                    <p style={{ color: "green" }}>Active</p>
                  ) : (
                    <p style={{ color: "red" }}>Inactive</p>
                  )}
                </td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => navigate("/edit-student/" + i)}
                  >
                    Edit
                  </Button>
                  &nbsp; &nbsp;
                  <Button variant="danger" onClick={() => handleDelete(i)}>
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default AllStudents;
