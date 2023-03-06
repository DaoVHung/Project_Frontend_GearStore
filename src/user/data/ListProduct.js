import SweetPagination from 'layouts/panigation/SweetPagination'
import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

export default function ListProduct() {
  const { todos } = useSelector(state => state.dataProduct)
  // console.log("todos sau goi again", todos);
  const [currentPageData, setCurrentPageData] = useState(todos)
  return (
    <div>
      <div className="row">
        {currentPageData.map((todo) => (
          <Product todo={todo} key={todo.productID} />
        ))}
      </div>
      <div className="row mt-5">
      <div className="col text-center">
       <SweetPagination
          currentPageData={setCurrentPageData}
          dataPerPage={8}
          getData={todos}
          navigation={true}
        >
        </SweetPagination>
      </div>
    </div>
    </div>
  )
}
