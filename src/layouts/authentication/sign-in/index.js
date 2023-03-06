
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { apiSignin } from "service/api";
import { History } from "@mui/icons-material";
import { Link, Navigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { action_signin } from "action/ActionAuth";
import Home from "user/components/Home";
import Admin from "Admin";
import { action_take_userName } from "action/ActionAuth";
import { action_get_cart } from "action/ActionAuth";
import { useEffect } from "react";

function Basic() {
 
  const [rememberMe, setRememberMe] = useState(false);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const dispatch = useDispatch()
  const [role, setRole] = useState("")
  const [userName, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
   const user = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    if(user){
         setEmail(user.userName)
    }else{
      setEmail("")
    }
  },[])
  // console.log("List role ", role);
  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }
    const data = {
      "userName": email,
      "password": password
    }
    apiSignin(data).then((res) => {
    
      localStorage.setItem('user', JSON.stringify(res.data));

      setRole(res.data.listRoles.length)
      setUsername(res.data.userName)
      dispatch(action_get_cart(res.data.userId))

      dispatch(action_take_userName(res.data))
    })
  };
  if (role >= 2) {
    return <Navigate to='/login/admin/dashboard' />
  }else if(role==1){
    return <Navigate to='/' />;
  }
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="error"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <p>{error}</p>

            <MDBox mb={2}>
              <input
                type="text"
                className="form-control"
                label="Username"
                placeholder="Username"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </MDBox>
            <MDBox mb={2}>
              <input

                className="form-control"
                label="Username"
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>

              <MDButton onClick={submitForm} variant="gradient" color="dark" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/login/admin/authentication/sign-up"
                  variant="button"
                  color="error"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}


export default Basic;
