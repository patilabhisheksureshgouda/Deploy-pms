import Axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddCompany.css";
function AddCompany() {
  const [cname, setCname] = useState("");
  const [crequiredskills, setcrequiredskills] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [phone, setPhone] = useState(0);
  const [website, setWebsite] = useState("");
  const [jloc, setjloc] = useState("");
  const [salary, setSalary] = useState(0);
  const [mincgpa, setMinCgpa] = useState(0);
  
  const baseUrl = "http://localhost:3001";

  const addCompany = () => {
    Axios.post(`${baseUrl}/addcompany`, {
      cname: cname,
      crequiredskills: crequiredskills,
      // email: email,
      // phone: phone,
      position: position,
      website: website,
      jloc: jloc,
      package: salary,
      mincgpa: mincgpa,
    }).then((response) => {
      // if (response.data.message) {
      //   return toast(" User already exists", { type: "error" });
      // }
      if (response.data.err) {
        return toast(" User already exists", { type: "error" });
      } else return toast("Successfully Added", { type: "success" });
    });
  };
  return (
    <div className=" add-company-box">
      <ToastContainer position="bottom-center" />
      <h2>Add a company</h2>
      <form>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setCname(e.target.value)}
          />
          <label>Company Name</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setcrequiredskills(e.target.value)}
          />
          <label>required skills</label>
        </div>
         <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setPhone(e.target.value)}
          />
          <div className="add-company-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setPosition(e.target.value)}
          />
          <label>Position</label>
        </div>

          <label>Phone</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setWebsite(e.target.value)}
          />
          <label>Website</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setjloc(e.target.value)}
          />
          <label>Job Location</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setSalary(e.target.value)}
          />
          <label>Package</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => {
              setMinCgpa(e.target.value);
            }}
          />
          <label>Eligibility (CGPA)</label>
        </div>
        <btn onClick={addCompany}>Add</btn>
      </form>
    </div>
  );
}

export default AddCompany;
