import Axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import moment from 'moment'
import "./AddStudent.css";
function Editstudent(props) {
  const [sname, setSname] = useState(props.usn.sname);
  const [usn, setUsn] = useState(props.usn.usn);
  const [mobile, setMobile] = useState(props.usn.mobile);
  const [email, setEmail] = useState(props.usn.email);
  const [dob, setDob] = useState(moment(props.usn.dob).format('YYYY-MM-DD'))
  const [branch, setBranch] = useState(props.usn.branch);
  const [cgpa, setCgpa] = useState(props.usn.cgpa);
  const [studentsList, setStudentsList] = useState([]);

  const baseUrl = "http://localhost:3001";
  const editstudent = ({ handleOpen }) => {
    Axios.post(`${baseUrl}/updateStudents`, {
      sname: sname,
      usn: usn,
      mobile: mobile,
      email: email,
      dob: dob,
      branch: branch,
      cgpa: cgpa,
    }).then((response) => {
      if (response.data.err) {
        return toast("Some error", { type: "error" });
      } else return toast("Successfully Added", { type: "success" });
    });
  };

//   //////////////////GET REQUEST TO SHOW/READ DATA//////////////
//   const getStudents = () => {
//     Axios.post(`${baseUrl}/getprofile`, {
//         usn: props.usn,
//       }).then((response) => {
//         if (response.data.err) {
//             return toast("Some error", { type: "error" });
//           } else  {
//             setStudentsList(response.data);
//             alert(JSON.stringify(response.data))
//           };
//       });
//   };

//   useEffect(() => {
//     getStudents();
//     console.log
//   });


  return (
    <div className=" add-placement-box">
      <ToastContainer position="bottom-center" />
      <h2>Edit a Student </h2>
      <form>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setSname(e.target.value)}
            value={sname}
          />
          <label>Student Name</label>
        </div>
        {/* <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setUsn(e.target.value)}
            value={usn}
            editable={false}
            readOnly={true}
          />
          <label>USN</label>
        </div> */}
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setMobile(e.target.value)}
            value={mobile}
          />
          <label>Phone</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label>Email</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setDob(e.target.value)}
            value={dob}
          />
          <label>DOB (YYYY-MM-DD)</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setBranch(e.target.value)}
            value={branch}
          />
          <label>Branch</label>
        </div>
        <div className="add-placement-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setCgpa(e.target.value)}
            value={cgpa}
          />
          <label>CGPA</label>
        </div>
        <btn onClick={editstudent}>UPDATE</btn>
      </form>
    </div>
  );
}

export default Editstudent;
