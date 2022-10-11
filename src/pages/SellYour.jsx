import React from 'react'
import {Link} from 'gatsby'
import Form from 'react-bootstrap/Form';

export default function SellYour() {
  return (
    <div className="sign">



    <form className='sig'>
        <h3 >Product Details</h3>
        <div className="main">

        <div className='left'>

        <div className="mb-3">
            <label>Name</label>
            <input
                type="text"
                className="form-control"
                placeholder="Name of your product"
            />
        </div>
        <div className="mb-3">
            <label>Catagory</label>
        <Form.Select aria-label="Catagory">
      <option>Select Catagory</option>
      <option value="0">Rice</option>
      <option value="1">Dal</option>
      <option value="2">Vegitables</option>
      <option value="3">Mashroom</option>
      <option value="4">Meat</option>
      <option value="5">Desi Chicken</option>
      <option value="6">Egg</option>
    </Form.Select>
        </div>
        <div className="mb-3">
            <label>Quantity</label>
            <input
                type="number"
                className="form-control"
                placeholder="e.g 10kg"
                />
        </div>
        <div className="mb-3">
            <label>Selling Price</label>
            <input
                type="number"
                className="form-control"
                placeholder="₹ 1,000"
                />
        </div>
        <div className="mb-3">
            <label>Block</label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Block"
                />
        </div>
        <div className="mb-3">
            <label>Dist</label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Dist"
                />
            </div>
            <div className="mb-3">
            <label>Image</label>
            <input
                type="file"
                className="form-control"
                placeholder="Upload an image folder"
            />
        </div>
                </div>
                </div>
        <div className="d-grid">
            <button type="submit" className="btn btn-primary">
                Sign Up
            </button>
        </div>
        <p className="forgot-password text-right">
            Already registered <Link to='/Login'>Sign in</Link>
        </p>
    </form>
    

                </div>
  )
}
