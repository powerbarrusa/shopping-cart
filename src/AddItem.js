import React from 'react'

const AddItem = (props) => {
  console.log(props)
  return (
    <div className="container">
      <form>
        <div className="collection-item">
          Products
          <select className="form-control">
          {props.itemsToAdd.map((add) =>
            <option>{add.name}</option>
            )}
          </select>
        </div>
      </form>
    </div>
  )}
export default AddItem