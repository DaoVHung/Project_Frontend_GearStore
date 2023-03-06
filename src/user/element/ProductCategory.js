import { GET_LIST_PRODUCT } from 'action/ActionAuth'
import { action_getCatalogActive } from 'action/ActionAuth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ListCatalog from './ListCatalog'

export default function ProductCategory() {
  const dispatch = useDispatch()
  const catalog = useSelector(state => state.dataCatalog)
  useEffect(() => {
    dispatch(action_getCatalogActive())
  }, [])
  const handleGetAll=()=>{
    dispatch(GET_LIST_PRODUCT())
  }
  return (
    <div className="col-md-10 mb-5 text-center">
      <ul className="product-category">
        <li>
          <Link onClick={handleGetAll} className="nav-link" >All Gear</Link>
        </li>
        {catalog.map((todo) => (
          <ListCatalog todo={todo} key={todo.catalogID}></ListCatalog>
        ))}
      </ul>
    </div>
  )
}
