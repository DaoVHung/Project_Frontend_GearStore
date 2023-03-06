import { action_getProductByCatalog } from 'action/ActionAuth'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
export default function ListCatalog(props) {
    const dispatch = useDispatch()
    const{
        catalogID,
        catalogName
    }=props.todo
    const handleGetProduct = (catalogID) =>{
     dispatch(action_getProductByCatalog(catalogID))
    }
  return (
    <li>
    <Link onClick={()=>handleGetProduct(catalogID)} className="nav-link" >{catalogName}</Link>
  </li>
  )
}
