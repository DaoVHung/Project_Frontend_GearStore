import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

import MDButton from 'components/MDButton';
import { deleteCatalog } from 'service/api';
import MDInput from "components/MDInput";


import { getDataCatalog } from 'service/api';
import { useDispatch } from 'react-redux';
import { action_reset_data } from 'action/ActionAuth';
import { updateCatalog } from 'service/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingOverlay from 'react-loading-overlay';
import { deleteListPosts } from 'action/ActionAuth';
import { action_delete_catalog } from 'action/ActionAuth';
import { action_update_caatalog } from 'action/ActionAuth';

export default function ItemCtalog(props) {
    const dispatch = useDispatch()
    const { catalogID, catalogName, catalogStatus } = props.todo
    const [catalogUpdate, setCatalogUpdate] = useState(catalogName)
    const [open1, setOpen1] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [notifyDelete, setNotifyDelete] = useState(false)
    const [notifyUpdate, setNotifyUpdate] = useState(false)
    const [notifyError, setNotifyError] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleClickOpen1 = () => {
        setOpen1(true);
    };
    const handleClose1 = () => {
        setOpen1(false);
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const handleDelete = (catalogID) => {
       
        dispatch(action_delete_catalog(catalogID))
        setOpen1(false);
        setLoading(!loading)
        setNotifyDelete(true)
    };
    useEffect(() => {
        if (notifyDelete == true) {
            toast("Inactive complete !")
        }
    }, [notifyDelete])

    useEffect(() => {
        if (notifyUpdate == true) {
            toast("Update complete !")
        }
    }, [notifyUpdate]);


    useEffect(() => {
        if (notifyError == true) {
            toast("Update False !")
        }
    }, [notifyError]);
    const handleUpdate = (catalogID) => {
        const data = {
            "catalogName": catalogUpdate
        }
        dispatch(action_update_caatalog(catalogID,data))

        setOpen(false);
    }

    


    return (

        <tr className="MuiTableRow-root css-n3cyd2-MuiTableRow-root" role="row">
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{catalogID}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{catalogName}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">
                    <div className="MuiBox-root css-1tguw1f">
                        <span className="MuiBadge-root css-n3v2yz-MuiBadge-root">
                            <span className="MuiBadge-anchorOriginTopRightRectangular MuiBadge-overlapRectangular MuiBadge-badge MuiBadge-standard MuiBadge-anchorOriginTopRight css-50xu54-MuiBadge-badge">
                                {catalogStatus ? "Active" : "Inactive"}
                            </span>
                        </span>
                    </div>
                </div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">
                    {/* ================================= */}
                    <MDButton onClick={handleClickOpen1} variant="gradient" color="warning" fullWidth>
                        Delete
                    </MDButton>
                    <Dialog
                        open={open1}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Delete confirmation ! "}

                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Do you want to delete {catalogName} ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose1}>Disagree</Button>
                            <Button onClick={() => handleDelete(catalogID)} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="MuiBox-root css-ekdnj9">
                    {/* ================================= */}
                    <MDButton variant="gradient" color="success" onClick={handleClickOpen}>
                        Update
                    </MDButton>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Update catalog</DialogTitle>
                        <DialogContent>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Catalog name"
                                defaultValue={catalogName}
                                onChange={e => setCatalogUpdate(e.target.value)}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button color="dark" onClick={handleClose}>Cancel</Button>
                            <Button onClick={() => handleUpdate(catalogID)} autoFocus >Update</Button>
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
