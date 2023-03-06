import React from 'react'                                     ;
import { useState, useEffect, useContext } from 'react'       ;
import { useDispatch } from 'react-redux'                     ;
import { useSelector } from 'react-redux'                     ;
import Button from '@mui/material/Button'                     ;
import ItemProduct from './ItemProduct'                       ;
import { GET_LIST_PRODUCT } from 'action/ActionAuth'          ;
import { get_list_product_inactive } from 'action/ActionAuth' ;
import SweetPagination from '../../panigation/SweetPagination';
export default function TableProduct() {
    const { todos, page } = useSelector(state => state.dataProduct)
    const [currentPageData, setCurrentPageData] = useState(todos);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(GET_LIST_PRODUCT())
    }, [])

    
    const handleGetInactive = () => {
        console.log("Step 1: Từ component bắn 1 action");
        dispatch(get_list_product_inactive())
    }
    const handleGetActive = () => {
        dispatch(GET_LIST_PRODUCT())
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
                                product id
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                product name
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                catalog
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                price
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                discount
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                status
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
                    {currentPageData.map((todo) => (
                        <ItemProduct todo={todo} key={todo.productID} />
                    ))}
                </tbody>
            </table>
            <Button sx={{ m: 5, minHeight: 30, color: "Highlight", border: 0.5, boxShadow: 10 }} variant="contained" color="error"
                onClick={handleGetActive}
            >List Active</Button>
            <Button sx={{ m: 1, minHeight: 30, color: "red", border: 0.5, boxShadow: 10 }} variant="contained" color="error"
                onClick={handleGetInactive}
            >List Inactive</Button>
            <div>
                <SweetPagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={5}
                    getData={todos}
                    navigation={true} />
            </div>
        </div>
    )
}
