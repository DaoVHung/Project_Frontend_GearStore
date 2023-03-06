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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// Data


function UserList() {

  const [productName, setProductName] = useState("")
  const [catalogID, setCatalogID] = useState("")
  const [price, setPrice] = useState("")
  const [productStatus, setProductStatus] = useState("")
  const [description, setDescription] = useState("")
  const [discount, setDiscount] = useState("")
  const [productImg, setProductImg] = useState("")
  const [subLink, setSubLink] = useState("")


  const [open, setOpen] = useState(false);
  const [notifyCreat, setNotifyCreat] = useState(false)
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
}

  return (
    <DashboardLayout>
      <DashboardNavbar />

      

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
                <MDTypography variant="h6" color="white">
                  User List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                {/* <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  noEndBorder
                /> */}
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>

          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default UserList;
