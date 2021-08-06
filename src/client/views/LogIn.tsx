import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {

    return (
        <>
            <Link to="/">
                home
          </Link>
        <div className ="d-flex row m-3 flex-wrap justify-content-center text-center">
<div className="card" style={{width: 400}}>
  <img src='../images/affirmlytransparentlogo.png' className="card-img-top" alt="..."/>
  <div className="card-body">
  <form>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
    <span>
        <img src="../images/icon.png" alt="icon" width="40" height="30" />
    </span>
        </label>
    <div className="col-sm-8">
      <input type="email" className="form-control" id="inputEmail3" placeholder="email"/>
    </div>
  </div>
  <div className="row mb-2 d-flex flex-wrap">
    <label htmlFor="inputPassword3" className="col-sm-3 col-form-label">
    <img src="../images/lock.png" alt="icon" width="40" height="30" />

    </label>
    <div className="col-sm-8">
      <input type="password" className="form-control" id="inputPassword3" placeholder="password"/>
    </div>
  </div>

  <div className="text-center d-flex flex-wrap justify-content-center m-2">
  <button type="submit" className="btn login-btn mx-2 col">Sign in</button>
  </div>

</form>
<div className="ml-2 mr-4">
  <Link to="/signup">
  <button type="submit" className="btn login-btn m-2 col">Sign up</button>
  </Link>
</div>
    <p className="card-text">Affirmly is your own to-do list that rewards your efforts with positivity and encourages forming healthy habits.</p>
  </div>
</div>
</div>
        </>
    )
};




export default LogIn