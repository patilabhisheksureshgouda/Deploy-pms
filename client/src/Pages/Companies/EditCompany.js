import Axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./AddCompany.css";
function EditCompany(props) {
  const [cname, setCname] = useState(props.companyDetails.cname);
  const [crequiredskills, setcrequiredskills] = useState(props.companyDetails.crequiredskills);
  const [email, setEmail] = useState(props.companyDetails.email);
  const [phone, setPhone] = useState(props.companyDetails.phone);
  const [website, seWebsite] = useState(props.companyDetails.website);
  const [jloc, setjloc] = useState(props.companyDetails.jloc);
  const [salary, setSalary] = useState(props.companyDetails.package);
  const [mincgpa, setMinCgpa] = useState(props.companyDetails.mincgpa);
  const [position, setPosition] = useState(props.companyDetails.position);
  const baseUrl = "http://localhost:3001";

  const editCompany = () => {
    Axios.post(`${baseUrl}/updateCompany`, {
      cname: cname,
      crequiredskills: crequiredskills,
      email: email,
      phone: phone,
      website: website,
      jloc: jloc,
      package: salary,
      mincgpa: mincgpa,
      position: position,
    }).then((response) => {
      // if (response.data.message) {
      //   return toast(" User already exists", { type: "error" });
      // }
      if (response.data.err) {
        return toast("Please check", { type: "error" });
      } else return toast("Successfully Updated", { type: "success" });
    });
  };
  return (
    <div className=" add-company-box">
      <ToastContainer position="bottom-center" />
      <h2>Edit  company</h2>
      <form>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setCname(e.target.value)}
            value={cname}
            readOnly={true}
          />
          <label>Company Name</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setcrequiredskills(e.target.value)}
            value={crequiredskills}
          />
          <label>Required skills</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            readOnly={true}
          />
          <label>Email</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            readOnly={true}
          />
          <label>Phone</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => seWebsite(e.target.value)}
            value={website}
          />
          <label>Website</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setjloc(e.target.value)}
            value={jloc}
          />
          <label>job Location</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            required="true"
            name=""
            onChange={(e) => setSalary(e.target.value)}
            value={salary}
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
            value={mincgpa}
          />
          <label>Eligibility (CGPA)</label>
        </div>
        <div className="add-company-form">
          <input
            type="text"
            name=""
            required="true"
            onChange={(e) => setPosition(e.target.value)}
            value={position}
          />
          <label>Position</label>
        </div>
        <btn onClick={editCompany}>UPDATE</btn>
      </form>
    </div>
  );
}

export default EditCompany;
