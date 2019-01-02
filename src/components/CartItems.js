import React from 'react'

const CartItems = (props) => {
  console.log(props)
  return(
    <div className="container">
      <h1>Cart Items</h1>
      <div className="collection-item">
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          <div>
            {props.list.map((item, idx) => 
              <div key={idx} className="list-group-item">
                <div className="row">
                  <div className="col-md-8">{item.product.name}</div>
                  <div className="col-md-2">${item.product.price/100}</div>
                  <div className="col-md-2">{item.quantity}</div>
                </div>
              </div>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems