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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Billing from "layouts/billing";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Star from "layouts/tables copy 4";
import Product from "layouts/tables copy";
import Catalog from "layouts/tables";
import UserList from "layouts/tables copy 2";
// @mui icons
import Icon from "@mui/material/Icon";
import Home from "user/components/Home";

const routes = [

  {
    type: "collapse",
    name: "Dashboard",
    key: "login/admin/dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "admin/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Catalog",
    key: "login/admin/catalog",
    icon: <Icon fontSize="small">article</Icon>,
    route: "admin/catalog",
    component: <Catalog />,
  }, {
    type: "collapse",
    name: "Product",
    key: "login/admin/product",
    icon: <Icon fontSize="small">category</Icon>,
    route: "admin/product",
    component: <Product />,
  },
  //  {
  //   type: "collapse",
  //   name: "UserList",
  //   key: "login/admin/userList",
  //   icon: <Icon fontSize="small">supervised_user_circle
  //   </Icon>,
  //   route: "admin/userList",
  //   component: <UserList />,
  // }, 
  // {
  //   type: "collapse",
  //   name: "Star",
  //   key: "login/admin/star",
  //   icon: <Icon fontSize="small">star_half</Icon>,
  //   route: "admin/star",
  //   component: <Star />,
  // },
  {
    type: "collapse",
    name: "Billing",
    key: "login/admin/billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "admin/billing",
    component: <Billing />,
  },

  // {
  //   type: "collapse",
  //   name: "Notifications",
  //   key: "login/admin/notifications",
  //   icon: <Icon fontSize="small">notifications</Icon>,
  //   route: "admin/notifications",
  //   component: <Notifications />,
  // },
  {
    type: "collapse",
    name: "Profile",
    key: "login/admin/profile",
    icon: <Icon fontSize="small">folder_shared</Icon>,
    route: "admin/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "login/authentication/sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "admin/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "login/authentication/sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "admin/authentication/sign-up",
    component: <SignUp />,
  },{
    type: "collapse",
    name: "Home",
    key: "",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/",
    component: <Home />,
  },
];

export default routes;
