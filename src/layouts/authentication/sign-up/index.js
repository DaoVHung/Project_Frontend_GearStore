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

// react-router-dom components
import { Link, Navigate, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import { action_signup } from "action/ActionAuth";
function Cover() {
  const dispatch = useDispatch()

  const [userName, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [notify, setNotify] = useState(false)
  const [notify2, setNotify2] = useState(false)
  const [error, setError] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    if (notify == true) {
      toast(" Passwords Don't Match !")
    }
  }, [notify])
  useEffect(() => {
    if (notify2 == true) {
      toast(" Fields are required !")
    }
  }, [notify2])
  const handleSignup = () => {
    
    if (password != confirmPassword) {
      setNotify(true)
      return
    }
    if (email === "" ||
      password === "" ||
      email === "" ||
      phoneNumber === "" ||
      fullName === "" ||
      userName == "") {
      setNotify2(true)
      return;
    }

    const data = {
      "userName": userName,
      "password": password,
      "email": email,
      "fullName": fullName,
      "address": address,
      "phoneNumber": phoneNumber
    }
    dispatch(action_signup(data))
   navigate("/login")
  }
  // const { names } = useSelector(state=>state.takeUsername)
 
  // useEffect(()=>{
  //   if(names){
      
  //   }else{
  //     navigate("/login/admin/authentication/sign-up")
  //   }
  // },[])



  return (
    <CoverLayout image={bgImage}>
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
      <Card>
        <MDBox
          variant="gradient"
          bgColor="error"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-7}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Join us today
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter your email and password to register
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={1}>
              <MDInput type="text" label="UserName" variant="standard" fullWidth
                value={userName}
                onChange={e => setUsername(e.target.value)} />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="password" label="Password" variant="standard" fullWidth
                value={password}
                onChange={e => setPassword(e.target.value)} />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="password" label="Confirm Password" variant="standard" fullWidth
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)} />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="email" label="Email" variant="standard" fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Full name" variant="standard" fullWidth
                value={fullName}
                onChange={e => setFullName(e.target.value)} />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Phone number" variant="standard" fullWidth
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)} />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Address" variant="standard" fullWidth
                value={email}
                onChange={e => setAddress(e.target.value)} />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="error"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1} >
              <MDButton variant="gradient" color="dark" onClick={handleSignup} fullWidth >
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/login/admin/authentication/sign-in"
                  variant="button"
                  color="error"
                  fontWeight="medium"
                  textGradient
                >
                  Sign In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>

    </CoverLayout>
  );
}

export default Cover;
