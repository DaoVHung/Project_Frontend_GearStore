import { Button } from '@mui/material'
import { action_get_list_order_confirmed } from 'action/ActionAuth'
import { action_get_list_order_confirm } from 'action/ActionAuth'
import SweetPagination from 'layouts/panigation/SweetPagination'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemOrder from './ItemOrder'

export default function OrderTable() {
    const { carts } = useSelector(state => state.dataOrder || [])
    const [currentPageData, setCurrentPageData] = useState(carts||[])
    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(action_get_list_order_confirm())
    }, [])

    const getListConfirm =()=>{
        dispatch(action_get_list_order_confirm())
        localStorage.setItem('statusButton',true)
    }

    const getListConfirmed = ()=>{
        dispatch(action_get_list_order_confirmed())
        localStorage.setItem('statusButton',false)
    }

    return (
        <div className="MuiTableContainer-root css-1qsnayc-MuiTableContainer-root">
            <table role="table" className="MuiTable-root css-11qgpv8-MuiTable-root">

                <thead className="MuiBox-root css-1ircn5c">
                    <tr className="MuiTableRow-root css-n3cyd2-MuiTableRow-root" role="row">
                        <th >
                            <div
                                className="MuiBox-root css-1kcj9bb "
                                colSpan={0}
                                role="columnheader"
                            >
                                ORDER ID
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                DATE
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                TOTAL AMOUNT
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                PHONE NUMBER
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                Note
                            </div>
                        </th>
                        <th >
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                action
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody
                    className="MuiTableBody-root css-apqrd9-MuiTableBody-root"
                    role="rowgroup">
                    {currentPageData&&currentPageData.map((todo) => (
                        <ItemOrder todo={todo} key={todo.orderID} ></ItemOrder>
                    ))}
                </tbody>
            </table>
            <Button sx={{ m: 5, minHeight: 30, color: "Highlight", border: 0.5, boxShadow: 10 }} variant="contained" color="error"
            onClick={getListConfirm}
            >List Order</Button>
            <Button sx={{ m: 1, minHeight: 30, color: "red", border: 0.5, boxShadow: 10 }} variant="contained" color="error"
            onClick={getListConfirmed}
            >List Order Confirmed</Button>
            <div>
                <SweetPagination
            currentPageData={setCurrentPageData}
            dataPerPage={5}
            getData={carts}
             />
            </div>
        </div>
    )
}
