import { action_update_cart } from 'action/ActionAuth'
import { action_get_cart } from 'action/ActionAuth'
import { action_delete_cart } from 'action/ActionAuth'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function CartItem(props) {
  const dispatch = useDispatch()
  const users = JSON.parse(localStorage.getItem('user'))
  const {
    detailId,
    orderId,
    price,
    quantity,
    totalAmount,
    productName,
    note,
    productImage
  } = props.todo
  const [notify, setNotify] = useState(false)
  const [noteNew, setNoteNew] = useState(note)
  const [quantityNew,setQuantityNew] = useState(quantity)
  const handleDelete = () => {
    dispatch(action_delete_cart(detailId))
  }

  const handleUpdateDetail = () =>{
    const data = {
        "quantity": quantityNew,
        "note": noteNew    
    }
    dispatch(action_update_cart(detailId,data))
    setNotify(true)
  }
  useEffect(() => {
    if (notify == true) {
        toast(" Update Succses  !")
    }
}, [notify])

  return (
    <tr className="text-center">
      <td className="product-remove">
        <a onClick={handleDelete}>
          <span className="ion-ios-close" />
        </a>
      </td>
      <td className="image-prod">
        <img
          className="img"
          src={productImage}
          alt="Colorlib Template"
        />
      </td>
      <td className="product-name">
        <h3>{productName}</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Note"
          defaultValue={noteNew}
          onChange={e => setNoteNew(e.target.value)}
        />

      </td>
      <td className="price">{price} $</td>
      <td className="quantity">
        <div className="input-group mb-3">
          <input
            type="number"
            name="quantity"
            className="quantity form-control input-number"
            defaultValue={quantityNew}
            onChange={e => setQuantityNew(e.target.value)}
            min={1}
            max={100}
          />
        </div>
      </td>
      <td className="total">{totalAmount} $</td>
      <td>
      <Link className="btn btn-primary py-3 px-4" onClick={handleUpdateDetail} >Update</Link> 
    
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
