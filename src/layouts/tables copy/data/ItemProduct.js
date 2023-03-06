import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MDButton from 'components/MDButton';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { action_reset_data } from 'action/ActionAuth';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { getDataCatalog } from "service/api";
import { useSelector } from "react-redux";
import { TextareaAutosize } from '@mui/base';
import { storage } from "testfirebase";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import InputLabel from '@mui/material/InputLabel';
import { deleteProductz } from 'action/ActionAuth';
import { action_update_product } from 'action/ActionAuth';
export default function ItemProduct(props) {
    const dispatch = useDispatch()
    const { productID,
        productName,
        catalog,
        price,
        productStatus,
        discount,
        description,
        productImg,
        listSub,
    } = props.todo
    const link = useSelector(state => state.dataCatalog)

    const [open1, setOpen1] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [notifyDelete, setNotifyDelete] = useState(false)
    const [notifyUpdate, setNotifyUpdate] = useState(false)
    const [loading, setLoading] = useState(false)
    const [notifyCreat, setNotifyCreat] = useState(false)
    const [productNames, setProductNames] = useState(productName)
    const [catalogIDs, setCatalogIDs] = useState(catalog?.catalogID)
    const [prices, setPrices] = useState(price)
    const [descriptions, setDescriptions] = useState(description)
    const [discounts, setDiscounts] = useState(discount)
    const [productImgs, setProductImgs] = useState(productImg)
    const [subLinks, setSubLinks] = useState(listSub)
    const handleChange = (event) => { setCatalogIDs(event.target.value); };

    const handleDelete = (productID) => {
        dispatch(deleteProductz(productID))
        setOpen1(false);
        setLoading(!loading)
        setNotifyDelete(true)
    };
    const handleUpdate = () => {
        const data = {
            "catalog": {
                "catalogID": catalogIDs
            },
            "productName": productNames,
            "price": prices,
            "description": descriptions,
            "productStatus": true,
            "productImg": productImgs,
            "discount": discounts,
            "listSub": subLinks
        }

        dispatch(action_update_product(productID, data))
        setNotifyUpdate(true)
        setImageUrls([])
        setImageUrlsmt([])
        setCatalogIDs("")
        setDescriptions("")
        setPrices("")
        setImageUploadsmt([])
        setImageUpload([])
        setOpen(false);
        setNotifyCreat(true)
    }

    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    }
    const handleClickOpenA = () => {
        getDataCatalog().then((res) => {
            dispatch(action_reset_data(res.data))
        })
        setOpen(true);
    };

    useEffect(() => {
        if (notifyDelete == true) {
            toast("Change status complete !")
        }
    }, [notifyDelete])
    useEffect(() => {
        if (notifyUpdate == true) {
            toast("Update complete !")
        }
    }, [notifyUpdate]);
    const handleClose = () => {
        setImageUploadsmt([])
        setImageUpload([])
        setImageUrls([])
        setImageUrlsmt([])
        setOpen(false);
    }

    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const uploadFile = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
                setProductImgs(url)
            });
        });
    };


    const [imageUploadmt, setImageUploadsmt] = useState([]);
    const [imageUrlsmt, setImageUrlsmt] = useState([]);
    useEffect(() => {
        const listUrl = []
        {
            listSub.map((url) => {
                listUrl.push(url.subLink)
            })
        }
        setImageUrlsmt(listUrl)
    }, [listSub])
    useEffect(() => {
        const listObj = []
        imageUrlsmt.forEach(element => {
            let obj = { subLink: element }
            listObj.push(obj)
        })
        setSubLinks(listObj)
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
    return (
        <tr className="MuiTableRow-root css-n3cyd2-MuiTableRow-root" role="row">
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{productID}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{productName}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{catalog.catalogName}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{price} $</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{discount} %</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">
                    <div className="MuiBox-root css-1tguw1f">
                        <span className="MuiBadge-root css-n3v2yz-MuiBadge-root">
                            <span className="MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight css-50xu54-MuiBadge-badge">
                                {productStatus ? "Active" : "Inactive"}
                            </span>
                        </span>
                    </div>
                </div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">
                    {/* ================================= */}
                    <MDButton onClick={handleClickOpen1} variant="gradient" color="warning" fullWidth>
                        Status
                    </MDButton>
                    <Dialog
                        open={open1}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Change status confirmation ! "}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Do you want to change state {productName} ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose1}>Disagree</Button>
                            <Button onClick={() => handleDelete(productID)} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="MuiBox-root css-ekdnj9">
                    {/* ================================= */}
                    <MDButton variant="gradient" color="success" onClick={handleClickOpenA}>
                        Update
                    </MDButton>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle >Update Product</DialogTitle>
                        <DialogContent>
                            <FormControl sx={{ minWidth: 500 }} >
                                Product Name
                                <input sx={{ minWidth: 230, minHeight: 50 }} type="text" className="form-control" placeholder="Product name"
                                    defaultValue={productName}
                                    onChange={e => setProductNames(e.target.value)} />
                                Catalog

                                <FormControl sx={{ minWidth: 80 }} >
                                    <InputLabel id="demo-simple-select-label">{catalog.catalogName}</InputLabel>

                                    <Select
                                        sx={{ minWidth: 230, minHeight: 50 }}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={catalogIDs}
                                        onChange={handleChange}
                                    >
                                        {link.map((todo) => (
                                            <MenuItem value={todo.catalogID}>{todo.catalogName}</MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                                Price
                                <input type="text" className="form-control" placeholder="Price"
                                    defaultValue={prices}
                                    onChange={e => setPrices(e.target.value)} />
                                Description
                                <TextareaAutosize style={{ height: 50 }} placeholder="  Description here..."
                                    defaultValue={description}
                                    onChange={e => setDescriptions(e.target.value)}
                                ></TextareaAutosize>
                                Discount
                                <input type="text" className="form-control" placeholder="Discount"
                                    defaultValue={discount}
                                    onChange={e => setDiscounts(e.target.value)} />
                                Product Image

                                <input type="file" className="form-control" placeholder="Product Image"
                                    onChange={(e) => setImageUpload(e.target.files[0])} />
                                <Button color="error" onClick={uploadFile}> Upload Image</Button>
                                <img width={"100px"} height={"100px"} src={productImgs} />

                                Product Sub Image
                                <input
                                    type='file'
                                    className="form-control" placeholder="Product Sub Image"
                                    multiple
                                    onChange={handleChangemt}
                                />
                                <Button color="error" onClick={uploadFilemt}> Upload Sub Image</Button>
                                <div className="rowImage">
                                    {subLinks.map((url) => {
                                        return <div className="columnImage">
                                            <img width={"100px"} height={"100px"} src={url.subLink} />
                                        </div>
                                    })}
                                </div>
                            </FormControl>

                        </DialogContent>
                        <DialogActions>
                            <Button color="dark" onClick={handleClose}>Cancel</Button>
                            <Button onClick={handleUpdate}>Update</Button>

                        </DialogActions>
                    </Dialog>
                </div>
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

            </td>

        </tr>
    )
}
