import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Axios from "axios";
import { FaPlus } from "react-icons/fa";
import { useStateValue } from "../../Context/StateProvider";
import { Modal } from "@material-ui/core";
import AddStudent from "./AddStudent";
import "./Students.css";
import { toast, ToastContainer } from "react-toastify";
import Editstudent from "./EditStudent";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableHeading: {
    color: "white",
    background: "#323232",
    fontSize: 17,
  },
  tableData: {
    color: "white",
    background: "black",
    fontSize: 13,
  },
  tableBack: {
    backgroundColor: "black",
  },
});

function Students() {
  const classes = useStyles();
  const [studentsList, setStudentsList] = useState([]);
  const baseUrl = "http://localhost:3001";

  const [open, setOpen] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);

  const [usn, setUsn] = useState('');


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  
  /* eslint-disable */
  const [{ admin }, dispatchAdmin] = useStateValue();

  //////////////////GET REQUEST TO SHOW/READ DATA//////////////
  const getStudents = () => {
    Axios.get(`${baseUrl}/students`).then((response) => {
      setStudentsList(response.data);
    });
  };

  useEffect(() => {
    getStudents();
  });



  const deleteStudent = (usn) => () => {

    Axios.post(`${baseUrl}/studentDelete`, {
      usn: usn
    }).then((response) => {
      if (response.data.err) {
        return toast("Some error", { type: "error" });
      } else return toast("Successfully Deleted", { type: "success" });
    });
  };

  const editStudent = (usn) => () => {
    setUsn(usn);
    setOpenEdit(true);
  };




  return (
    <div className="placements_page">
      <ToastContainer position="bottom-center" />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeading}>
                Student Name
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                USN
              </TableCell>
              <TableCell className={classes.tableHeading}>
                Student Skills
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Phone
              </TableCell>

              <TableCell className={classes.tableHeading} align="left">
                Email
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                DOB(YYYY-MM-DD)
              </TableCell>

              <TableCell className={classes.tableHeading} align="left">
                Branch
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                CGPA
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((student,index) => {
              return (
                <TableRow key={index}>
                  <TableCell
                    className={classes.tableData}
                    component="th"
                    scope="row"
                  >
                    {student.sname}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {student.usn}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {student.sskills}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {student.mobile}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {student.email}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {student.dob.substring(0, 10)}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {student.branch}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {student.cgpa}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    <button onClick={deleteStudent(student.usn)}>
                      Delete
                    </button>
                    <button onClick={editStudent(student)}>
                      Edit
                    </button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {!admin || admin === "" ? null : (
        <>
          <div class="float" onClick={handleOpen}>
            <FaPlus className="my-float" />
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            className="modal"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <AddStudent isOpen={handleOpen} />
          </Modal>
        </>
      )}


      {!admin || admin === "" ? null : (
        <>
       
          <Modal
            open={openEdit}
            onClose={handleCloseEdit}
            className="modal"
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            <Editstudent isOpen={editStudent}  usn={usn}/>
          </Modal>
        </>
      )}
    </div>
  );
}

export default Students;
