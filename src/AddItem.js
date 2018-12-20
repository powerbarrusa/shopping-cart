import React from 'react'

const AddItem = (props) => {
  console.log(props)
  return (
    <div className="container">
      <form>
        <div id="total">Total: </div>
        <div className="collection-item">
          Quantity
          <input className="form-control" type="text" name="firstname"></input>
          Products
          <select className="form-control">
          {props.itemsToAdd.map((add) =>
            <option>{add.name}</option>
            )}
          </select>
        </div>
      </form>
      <button class="btn btn-primary mt-3" type="submit" value="Submit">Submit</button>
    </div>
  )}
export default AddItem