
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";


import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import MDInput from "components/MDInput";

export default function data() {


  return {
    columns: [
      { Header: "product id", accessor: "productID", width: "10%", align: "center" },
      { Header: "product name", accessor: "productName", align: "center" },
      { Header: "catalog", accessor: "catalog", align: "center" },
      { Header: "price", accessor: "price", align: "center" },
      { Header: "discount", accessor: "discount", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {

        productID: 1,
        productName: "Logitech G502",
        catalog: "Mouse Gaming",
        price: 95 + "$",
        discount: 10 + "%",
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>

        ),
        action: (
          <MDTypography component="a" href="/userList" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      }
    ],
  };
}
