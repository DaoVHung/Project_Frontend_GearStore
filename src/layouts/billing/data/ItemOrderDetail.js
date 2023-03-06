import React from 'react'

export default function ItemOrderDetail(props) {
   
    const {
        detailId,
        note,
        price,
        orderId,
        productName,
        quantity,
        totalAmount
    } = props.todo
    return (
        <tr className="MuiTableRow-root css-n3cyd2-MuiTableRow-root" role="row">
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{detailId}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{productName}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{quantity}</div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{price} $ </div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{totalAmount} </div>
            </td>
            <td className="MuiBox-root css-15jcv17">
                <div className="MuiBox-root css-ekdnj9">{note} </div>
            </td>
        </tr>
    )
}
