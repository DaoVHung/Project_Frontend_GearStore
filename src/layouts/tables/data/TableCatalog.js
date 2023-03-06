import React, { useState, useEffect, useContext } from 'react'
import ItemCtalog from './ItemCtalog'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { action_getAllCatalog } from 'action/ActionAuth'
import SweetPagination from 'layouts/panigation/SweetPagination';

export default function TableCatalog() {
    const [listCatalog, setListCatalog] = useState([])
    const link = useSelector(state => state.dataCatalog)
    const [currentPageData, setCurrentPageData] = useState(link);

    const dispatch = useDispatch()
    
    useEffect(() => {
            dispatch(action_getAllCatalog()) 
    }, [])

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="MuiTableContainer-root css-1qsnayc-MuiTableContainer-root">


            <table role="table" className="MuiTable-root css-11qgpv8-MuiTable-root">

                <thead className="MuiBox-root css-1ircn5c">
                    <tr className="MuiTableRow-root css-n3cyd2-MuiTableRow-root" role="row">
                        <th className="MuiBox-root css-112cizy">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                catalog id
                            </div>
                        </th>
                        <th className="MuiBox-root css-1qbdd0n">
                            <div
                                className="MuiBox-root css-1kcj9bb"
                                colSpan={1}
                                role="columnheader"
                            >
                                catalog name
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
                        <th className="MuiBox-root css-1qbdd0n">
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
                    role="rowgroup"
                >

                    {currentPageData.map((todo) => (
                        <ItemCtalog todo={todo} key={todo.catalogID} />
                    ))}


                </tbody>
            </table>
            <div>
                <SweetPagination
                    currentPageData={setCurrentPageData}
                    dataPerPage={5}
                    getData={link}
                    navigation={true}
                />
            </div>
        </div>
    )
}
