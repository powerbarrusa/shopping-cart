import React from 'react'

const text = "Select Something!"
const AddItem = (props) => {
  return (
    <div className="container">
      <form>
        <div id="total">Total: {props.totalCalc}</div>
        <div className="collection-item">
          Quantity
          <input onChange={props.quantityListener} className="form-control" placeholder="Quantity" type="number"></input>
          Products
          <select onChange={props.productListener} className="form-control" defaultValue={text}>
            <option disabled>{text}</option>
            {props.products.map((add, idx) =>
            <option key={idx}>
            {add.name}</option>
            )}
          </select>
        </div>
      </form>
      <button onClick={props.addItem} className="btn btn-primary mt-3" type="submit" value="">Submit</button>
    </div>
  )}
export default AddItem