
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TableProduct from "./data/TableProduct";
import { getDataCatalog } from "service/api";
import { action_reset_data, action_reset_data_product } from "action/ActionAuth";
import { useSelector } from "react-redux";
import { TextareaAutosize } from '@mui/base';
import { storage } from "testfirebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import SearchProduct from "./data/SearchProduct";
import { action_Create_product } from "action/ActionAuth";

function Product() {
  const [productName, setProductName] = useState("")
  const [catalogID, setCatalogID] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [discount, setDiscount] = useState("")
  const [productImg, setProductImg] = useState("")
  const [subLink, setSubLink] = useState([])
  const dispatch = useDispatch()
  const handleAdd = () => {
    const data = {
      "catalog": {
        "catalogID": catalogID
      },
      "productName": productName,
      "price": price,
      "description": description,
      "productStatus": true,
      "productImg": productImg,
      "discount": discount,
      "listSub": subLink
    }
    dispatch(action_Create_product(data))

    setImageUrls([])
    setImageUrlsmt([])
    setCatalogID("")
    setDescription("")
    setDiscount("")
    setProductName("")
    setProductImg("")
    setPrice("")
    setImageUploadsmt([])
    setOpen(false);
    setNotifyCreat(true)

  }
  const [open, setOpen] = useState(false);
  const [notifyCreat, setNotifyCreat] = useState(false)

  const handleClickOpen = () => {
    getDataCatalog().then((res) => {
      dispatch(action_reset_data(res.data))
    })
    setOpen(true);
  };
  const link = useSelector(state => state.dataCatalog)
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
        setProductImg(url)
      });
    });
  };

  const [imageUploadmt, setImageUploadsmt] = useState([]);
  const [imageUrlsmt, setImageUrlsmt] = useState([]);

  useEffect(() => {
    const listObj = []
    imageUrlsmt.forEach(element => {
      let obj = { subLink: element }
      listObj.push(obj)
    })
    setSubLink(listObj)
  }, [imageUrlsmt])

  const handleChangemt = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImagemt = e.target.files[i];
      setImageUploadsmt((prevState => [...prevState, newImagemt]));
    }
  }
  const uploadFilemt = () => {
    if (imageUploadmt == []) return;
    setImageUrlsmt([])
    imageUploadmt.forEach((file) => {
      const imageRefmt = ref(storage, `images/${file.name}`);
      uploadBytes(imageRefmt, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrlsmt((prev) => [...prev, url]);
        });
      });
    })
  };
  const handleChange = (event) => { setCatalogID(event.target.value); };
  const handleClose = () => {
    setImageUrls([])
    setImageUrlsmt([])
    setCatalogID("")
    setDescription("")
    setDiscount("")
    setProductName("")
    setProductImg("")
    setPrice("")
    setImageUploadsmt([])
    setOpen(false);
  }
  useEffect(() => {
    if (notifyCreat == true) {
      toast("Create complete !")
    }
  }, [notifyCreat])
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Button sx={{ m: 3, mt: 0, mb: -2, maxHeight: 35, color: "green", boxShadow: 10, borderRadius: 3 }} variant="contained" color="dark" onClick={handleClickOpen}>
        Create new Product
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle >Create new catalog</DialogTitle>
        <DialogContent>

          <FormControl sx={{ minWidth: 80 }} max>
            Product Name
            <input sx={{ minWidth: 230, minHeight: 50 }} type="text" className="form-control" placeholder="Product name"
              value={productName}
              onChange={e => setProductName(e.target.value)} />
            Catalog
            <Select
              sx={{ minWidth: 230, minHeight: 50 }}
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={catalogID}
              onChange={handleChange}
              label="-"
            >
              {link.map((todo) => (
                <MenuItem value={todo.catalogID}>{todo.catalogName}</MenuItem>
              ))}
            </Select>
            Price
            <input type="text" className="form-control" placeholder="Price"
              value={price}
              onChange={e => setPrice(e.target.value)} />
            Description
            <TextareaAutosize style={{ height: 50 }} placeholder="  Description here..."
              value={description}
              onChange={e => setDescription(e.target.value)}
            ></TextareaAutosize>
            Discount
            <input type="text" className="form-control" placeholder="Discount"
              value={discount}
              onChange={e => setDiscount(e.target.value)} />
            Product Image

            <input type="file" className="form-control" placeholder="Product Image"
              onChange={(e) => setImageUpload(e.target.files[0])} />
            <Button color="error" onClick={uploadFile}> Upload Image</Button>
            {imageUrls.map((url) => {
              return <img width={"100px"} height={"100px"} src={url} />;
            })}

            Product Sub Image

            <input
              type='file'
              className="form-control" placeholder="Product Sub Image"
              multiple
              onChange={handleChangemt}
            />
            <Button color="error" onClick={uploadFilemt}> Upload Sub Image</Button>
            <div className="rowImage">
              {imageUrlsmt.map((url) => {
                return <div className="columnImage">
                  <img width={"100px"} height={"100px"} src={url} />
                </div>
              })}
            </div>
           
          </FormControl>

        </DialogContent>
        <DialogActions>
          <Button color="dark" onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Create</Button>

        </DialogActions>
      </Dialog>

      <SearchProduct></SearchProduct>
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
                  Product List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <TableProduct></TableProduct>
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

export default Product;
