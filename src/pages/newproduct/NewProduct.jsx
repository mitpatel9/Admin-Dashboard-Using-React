import React from 'react'
import "./NewProduct.css"

export default function NewProduct() {
  return (
    <div className='newproduct'>
      <h1 className="addproducttitle">New Product</h1>
      <form className="addproductform">
        <div className="addproductitem">
            <label>Image</label>
            <input type="file" id='file' />
        </div>
        <div className="addproductitem">
            <label>Name</label>
            <input type="text" id='file' placeholder='Item Name'/>
        </div>
        <div className="addproductitem">
            <label>Stock</label>
            <input type="text" id='file' placeholder='123'/>
        </div>
        <div className="addproductitem">
            <label>Active</label>
            <select name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </div>
        <button className="addproductbutton">Create</button>
      </form>
    </div>
  )
}
