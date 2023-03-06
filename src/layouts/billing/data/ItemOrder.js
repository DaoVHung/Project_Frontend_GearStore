import React from 'react'
import MDButton from 'components/MDButton'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { action_get_order_detail } from 'action/ActionAuth';
import ItemOrderDetail from './ItemOrderDetail';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { action_confirm_order } from 'action/ActionAuth';

export default function ItemOrder(props) {
    const dispatch = useDispatch()
    const {
        orderID,
        date,
        email,
        fullName,
        note,
        orderStatus,
        totalAmount,
        phoneNumber
    } = props.todo

    const [notify, setNotify] = useState(false)

    const [open1, setOpen1] = React.useState(false);
    const [open, setOpen] = React.useState(false);
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

    const handleGetOrderDetail = () => {
        dispatch(action_get_order_detail(orderID))
        setOpen(true);
    }
      const listOrderDetail = JSON.parse(localStorage.getItem('orderDetail'))
      const {detail} = useSelector(state => state.dataOrderDetail)
    const handleConfirmOrder = () => {
        dispatch(action_confirm_order(orderID))
        setNotify(true)
        setOpen1(false);
    }
    useEffect(() => {
        if (notify == true) {
            toast(" Confirm Succses  !")
        }
    }, [notify])
    const [button, setBotton] = useState(true)
    const statusButton = localStorage.getItem('statusButton')
    console.log("button store ", statusButton);
    console.log("button state ", button);

    useEffect(() => {
        if (statusButton==="true") {
            setBotton(true)
        } else {
            setBotton(false)
        }
    }, [statusButton])
    return (
        <tr className="MuiTableRow-root css-n3cyd2-MuiTableRow-root" role="row">
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{orderID}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{date}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{totalAmount} $</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{phoneNumber} </div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{note} </div>
            </td>

            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">
                    {button?<MDButton onClick={handleClickOpen1} variant="gradient" color="warning" fullWidth>
                        affirm
                    </MDButton>:""}
                    
                    <Dialog
                        open={open1}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Order details ! "}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Order ID............... : {orderID} <br></br>
                                Date..................... : {date}<br></br>
                                Email................... : {email}<br></br>
                                FullName............ : {fullName}<br></br>
                                Note.................... : {note}<br></br>
                                TotalAmount....... : {totalAmount} $<br></br>
                                PhoneNumber..... : {phoneNumber}<br></br>
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose1}>Disagree</Button>
                            <Button onClick={handleConfirmOrder} autoFocus>
                                Agree
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <div className="MuiBox-root css-ekdnj9">
                    {/* ================================= */}
                    <MDButton onClick={handleGetOrderDetail} variant="gradient" color="success" >
                        Detail
                    </MDButton>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle sx={{}}>Order {orderID}</DialogTitle>
                        <DialogContent>
                            <table role="table" className="MuiTable-root css-11qgpv8-MuiTable-root">

                                <thead className="MuiBox-root css-1ircn5c">
                                    <tr className="MuiTableRow-root css-n3cyd2-MuiTableRow-root" role="row">
                                        <th >
                                            <div
                                                className="MuiBox-root css-1kcj9bb "
                                                colSpan={0}
                                                role="columnheader"
                                            >
                                                Detail ID
                                            </div>
                                        </th>
                                        <th className="MuiBox-root css-1qbdd0n">
                                            <div
                                                className="MuiBox-root css-1kcj9bb"
                                                colSpan={1}
                                                role="columnheader"
                                            >
                                                Product Name
                                            </div>
                                        </th>
                                        <th className="MuiBox-root css-1qbdd0n">
                                            <div
                                                className="MuiBox-root css-1kcj9bb"
                                                colSpan={1}
                                                role="columnheader"
                                            >
                                                Quantity
                                            </div>
                                        </th>
                                        <th className="MuiBox-root css-1qbdd0n">
                                            <div
                                                className="MuiBox-root css-1kcj9bb"
                                                colSpan={1}
                                                role="columnheader"
                                            >
                                                Price
                                            </div>
                                        </th>
                                        <th className="MuiBox-root css-1qbdd0n">
                                            <div
                                                className="MuiBox-root css-1kcj9bb"
                                                colSpan={1}
                                                role="columnheader"
                                            >
                                                TotalAmount
                                            </div>
                                        </th>
                                        <th >
                                            <div
                                                className="MuiBox-root css-1kcj9bb"
                                                colSpan={1}
                                                role="columnheader"
                                            >
                                                Note
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody
                                    className="MuiTableBody-root css-apqrd9-MuiTableBody-root"
                                    role="rowgroup">
                                    {detail.map((todo) => (
                                        <ItemOrderDetail todo={todo} key={todo.detailId} ></ItemOrderDetail>
                                    ))}
                                </tbody>
                            </table>
                        </DialogContent>
                        <DialogActions>
                            <Button color="dark" onClick={handleClose}>Close</Button>
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
