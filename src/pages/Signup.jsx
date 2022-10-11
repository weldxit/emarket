import React from 'react'
import Layout from './Layout'
import { Link } from 'gatsby'
import './css/signup.css'
export default function Signup() {
    function handleSubmit(e){
        e.preventDefault();
        alert('Wait for the backend ')
    }
    return (
        <Layout>

        <div className="sign">



            <form className='sig'  onSubmit={handleSubmit}>
                <h3 >Sign Up</h3>
                <div className="main">

                <div className='left'>

                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Village</label>
                    <input
                        type="test"
                        className="form-control"
                        placeholder="Enter Village"
                        />
                </div>
                <div className="mb-3">
                    <label>Gram Panchayat</label>
                    <input
                        type="test"
                        className="form-control"
                        placeholder="Enter Gram Panchayat"
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
                        </div>
                        <div className="right">

                    <div className="mb-3">
                    <label>Farmer Id Number</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter FIN"
                        />
                    </div>
                    <div className="mb-3">
                    <label>Adhar No</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="mb-3">
                    <label>Bank A/c No</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter password"
                        />
                    </div>
                    <div className="mb-3">
                    <label>Photo</label>
                    <input
                        type="file"
                        className="form-control"
                        placeholder="Enter password"
                        />
                    </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
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
        
                        </Layout>
    )
}


