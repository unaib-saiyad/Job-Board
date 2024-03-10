import React from 'react'
import '../../assets/styles/authentication/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import myImage from '../../assets/images/authentication/Signup.jpg'

function Login() {
  return (
    <>
      <div className='auth-bg d-flex justify-content-center align-items-center'>
        <div className="main-content container row bg-white rounded-4 p-0 m-0">
          <div className='left-div col-lg-5 col-md-4 col-sm-0 m-0 p-0 h-100'>
            <img src={myImage} alt="" className='rounded-4 rounded-end-0' />
          </div>
          <div className='col-lg-7 col-md-8 col-sm-12 m-0 d-flex flex-column justify-content-center'>
            <h2 className='h2 form-label p-2 text-center'>Login</h2>
            <div className="row px-4 mt-2 justify-content-center">
              <div className="justify-content-center row mt-3">
                <label htmlFor="email" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Email</label>
                <input className="input p-2 rounded col-xl-9 col-md-8 col-sm-12'" type="email" name="email" placeholder="Enter Email" autoComplete="off" />
              </div>
              <div className="justify-content-center row mt-3">
                <label htmlFor="password" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Password</label>
                <input className="input p-2 rounded col-xl-9 col-md-8 col-sm-12'" type="password" name="password" placeholder="Enter Password" autoComplete="off" />
              </div>
              <div className="row mt-3 justify-content-end">
                <button className='btn col-4 btn-sm btn-success'>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;