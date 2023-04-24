/* eslint-disable */
import { Modal } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { useStateValue } from "../../Context/StateProvider";
import AddCompany from "./AddCompany";
import "./Companies.css";
import EditCompany from "./EditCompany";
import axios from "axios";

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
    cursor: "pointer",
    // border: "0.01 px",
  },
  tableBack: {
    backgroundColor: "black",
  },
});

function Company_ML() {
  const classes = useStyles();
  const [companiesList, setCompaniesList] = useState([]);
  const baseUrl = "http://localhost:3001";


  const [openEdit, setOpenEdit] = useState(false);

  const [companyDetails, setCompanyDetails] = useState('');

  const [open, setOpen] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);

  
  const [profiles, setProfiles] = useState([]);
  const [currPerson, setCurrPerson] = useState("");
  const [user, dispatchUser] = useStateValue();

  const getProfiles = () => {

    console.log("users",user.user[0].usn)
    axios.get(`${baseUrl}/profile`).then((response) => {
      setProfiles(response.data);
    console.log('data',response.data[0].usn)
    getCompanies(user.user[0].usn)
    });
  };

  useEffect(() => {
    getProfiles();
  }, []);




  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleOpenCompany = () => {
    setOpenCompany(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseCompany = () => {
    setOpenCompany(false);
  };
  const [{ admin }, dispatchAdmin] = useStateValue();

  


  //////////////////GET REQUEST TO SHOW/READ DATA//////////////
  const getCompanies = (usn) => {
  
    Axios.get(`${baseUrl}/get_my_companies?id=${usn}`).then((response) => {
      setCompaniesList(response.data);
    });
  };




  const deleteCompany = (id) => () => {
    Axios.post(`${baseUrl}/companyDelete`, {
      id: id
    }).then((response) => {
      if (response.data.err) {
        return toast("Some error", { type: "error" });
      } else return toast("Successfully Deleted", { type: "error" });
    });
  };


  const editCompany = (usn) => () => {
    setCompanyDetails(usn);
    setOpenEdit(true);
  };


//   useEffect(() => {
//     getCompanies();
//   },[]);

  return (
    <div className="companies_page">
      <TableContainer component={Paper}>
        <ToastContainer position="bottom-center" />
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeading}>
                Company Name
              </TableCell>
              <TableCell className={classes.tableHeading}>
                Required skills
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Website
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Package
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Eligibility(CGPA)
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Position
              </TableCell>
              <TableCell className={classes.tableHeading} align="left">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companiesList.map((company, key) => {
              key = key;
              return (
                <TableRow key={key}>
                  <TableCell
                    className={classes.tableData}
                    component="th"
                    scope="row"
                  // onClick={handleOpenCompany}
                  >
                    {company.cname}
                  </TableCell>
                  {/* <ModalComponent
                    openCompany={openCompany}
                    handleCloseCompany={handleCloseCompany}
                    cname={company.cname}
                    cdescription={company.cdescription}
                    email={company.email}
                    website={company.website}
                    adrs={company.adrs}
                  /> */}
                  {/* {companiesList.map((item) => {
                    companiesList[item] = company;
                    return ( */}
                  {/* <Modal
                    open={openCompany}
                    onClose={handleCloseCompany}
                    className="modal"
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  > */}
                  {/* {companiesList.map((item) => {
                      companiesList[item] = company;
                      return ( */}
                  {/* <CompanyDetails
                      currCompanyName={company.cname}
                      handleCloseCompany={handleCloseCompany}
                      openCompany={openCompany}
                    /> */}
                  {/* );
                    })} */}
                  {/* </Modal> */}
                  {/* );
                  })} */}
                  <TableCell className={classes.tableData} align="left">
                    {company.crequiredskills}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {company.website}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {company.package}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {company.mincgpa}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {company.position}
                  </TableCell>
                  <TableCell className={classes.tableData} align="left">
                    {admin?<><button onClick={deleteCompany(company.id)}>
                      Delete
                    </button>
                    <button  onClick={editCompany(company)} >
                      Edit
                    </button></>:<>
                    
                    
                    {/* {console.log("hrushi",company)} */}
                    <button onClick={() => {
  const url = company.website.startsWith('http') ? company.website : `http://${company.website}`;
  window.open(url, '_blank');
}}>Apply</button>


                    </>}
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
            <AddCompany />
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
            <EditCompany isOpen={editCompany} companyDetails={companyDetails} />
          </Modal>
        </>
      )}
    </div>
  );
}

export default Company_ML;
