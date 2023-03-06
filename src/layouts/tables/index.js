/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components


import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDInput from "components/MDInput";
import { navbarRow } from "examples/Navbars/DashboardNavbar/styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Data

import projectsTableData from "layouts/tables/data/projectsTableData";
// import catalogData from "layouts/tables/data/catalogData"


//test
import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableCatalog from "./data/TableCatalog";
import TextField from '@mui/material/TextField';
import { useState, useEffect } from "react";
import { Hidden } from "@mui/material";
import { createCatalog } from "service/api";
import { getDataCatalog } from "service/api";
import { useDispatch } from "react-redux";
import { action_reset_data } from "action/ActionAuth";
import { searchCatalog } from "service/api";
import SearchAppBar from "./data/searchCatalog";
import { action_Create_Catalog } from "action/ActionAuth";
function Catalog() {
  const [catalogName, setCatalogName] = useState("")
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [notifyCreat, setNotifyCreat] = useState(false)
  useEffect(() => {
    if (notifyCreat == true) {
        toast("Create complete !")
    }
}, [notifyCreat])

  const handleAdd = () => {
    const data = {
      "catalogName": catalogName
    }
    dispatch(action_Create_Catalog(data))
  
    setCatalogName("")
    setOpen(false);
    setNotifyCreat(true)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <DashboardLayout>
                

      <DashboardNavbar />
      
      <Button  sx={{ m: 3, mt:0, mb:-2, maxHeight: 45, color:"green",boxShadow:10 ,borderRadius:3}} variant="contained" color="dark" onClick={handleClickOpen}>
       Create new catalog
      </Button>
      

      <Dialog open={open} onClose={handleClose}>
    
        <DialogTitle>Create new catalog</DialogTitle>
        <DialogContent>
          <input
            type="text"
            className="form-control"
            placeholder="Catalog name"
            value={catalogName}
            onChange={e => setCatalogName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button color="dark" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Create</Button>
        </DialogActions>
      </Dialog>
      
      <SearchAppBar ></SearchAppBar>
      
      
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="error"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white" >
                  Catalog List
                </MDTypography>
                
              </MDBox>
              <MDBox pt={3}>
                <TableCatalog isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={false}
                ></TableCatalog>
              </MDBox>
              
            </Card>
          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </MDBox>
      <Footer />
      <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
    </DashboardLayout>
    
  );
}

export default Catalog;
