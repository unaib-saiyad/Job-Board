import React from 'react'
import '../../assets/styles/authentication/Signup.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import myImage from '../../assets/images/authentication/Signup.jpg'

function Signup() {
  // Switching gender radio buttons and setting value
  const radioHandler = (event) => {
    event.stopPropagation();
    var targetElement = event.target;
    while(!targetElement.classList.contains('changeRadio')){
      if(targetElement.classList.contains('parentRadio')){
        return;
      }
      targetElement=targetElement.parentElement;
    }
    targetElement.classList.add('active-radio');
    targetElement.children[0].checked=true;
    const parentElement = targetElement.parentElement;
    const siblings = Array.from(parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== targetElement) {
        sibling.classList.remove('active-radio');
        sibling.children[0].checked=false;
      }
    });

  }

  return (
    <>
      <div className='auth-bg d-flex justify-content-center align-items-center'>
        <div className="main-content container row bg-white rounded-4 p-0 m-0">
          <div className='left-div col-lg-5 col-md-4 col-sm-0 m-0 p-0 h-100'>
            <img src={myImage} alt="" className='rounded-4 rounded-end-0' />
          </div>
          <div className='col-lg-7 col-md-8 col-sm-12 m-0'>
            <h2 className='h2 form-label p-2 text-center mt-2'>Registeration</h2>
            <div className="row px-4 mt-3 justify-content-center">
              <div className="justify-content-center row">
                <label htmlFor="username" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Username</label>
                <input className="input p-2 rounded col-xl-9 col-md-8 col-sm-12'" type="text" name="username" placeholder="Enter Username" autoComplete="off" />
              </div>
              <div className="justify-content-center row mt-3">
                <label htmlFor="email" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Email</label>
                <input className="input p-2 rounded col-xl-9 col-md-8 col-sm-12'" type="email" name="email" placeholder="Enter Email" autoComplete="off" />
              </div>
              <div className="justify-content-center row mt-3">
                <label htmlFor="password" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Password</label>
                <input className="input p-2 rounded col-xl-9 col-md-8 col-sm-12'" type="password" name="password" placeholder="Enter Password" autoComplete="off" />
              </div>
              <div className="justify-content-center row mt-3">
                <label htmlFor="confm_password" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Confirm Pass.</label>
                <input className="input p-2 rounded col-xl-9 col-md-8 col-sm-12'" type="password" name="confm_password" placeholder="Confirm Password" autoComplete="off" />
              </div>
              {/* <div className="justify-content-center row mt-3">
                <label htmlFor="mobile" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Mobile</label>
                <input className="input p-2 rounded col-xl-9 col-md-8 col-sm-12'" type="number" name="mobile" placeholder="Enter Mobile" autoComplete="off" />
              </div> */}
              <div className="row mt-3 d-flex">
                <label htmlFor="gender" className='py-2 col-xl-3 col-md-4 col-sm-12 fs-5'>Gender</label>
                <div className='col-xl-9 col-md-8 col-sm-12 row'>
                  <div className='parentRadio col-8 d-flex align-items-center'>
                    <label id='maleRadio' className='changeRadio p-2 rounded-5 btn w-50' onClick={radioHandler}>
                      <input type="radio" name="gender" value="male" hidden />
                      <i className="fa-solid fa-mars fa-xl"></i> Male
                    </label>
                    <label id='femaleRadio' className='changeRadio p-2 rounded-5 btn w-50' onClick={radioHandler}>
                      <input type="radio" name="gender" value="female" hidden />
                      <i className="fa-solid fa-venus fa-xl"></i> Female
                    </label>
                  </div>
                  <button className='btn col-4 btn-sm btn-success'>Submit</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;