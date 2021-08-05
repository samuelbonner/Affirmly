import React, { useEffect, useState } from 'react'

const AccomplishedTask = () => {
    return (
        <>
            
<nav className="navbar">
    <img src='../images/affirmlytransparentlogo.png' alt="Affirmly Logo" width="80" height="80"/>
    <div>Accomplished Tasks</div>
    <div>Trophy Case</div>
    <div>Logout</div>
    <div>
2 Day Streak
    <img src="../images/megaphone.gif" alt="megaphone" width="100" height="100" />
    </div>
        {/* <img src="https://ssekodesigns.com/wp-content/uploads/2019/10/lightning-bolt-sticker.gif" width="70" height="70"/> */}
</nav>
<div>
    <h2 className="title m-2">Accomplished Tasks</h2>
</div>




        <div className="m-2">
        <table className="table table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Task</th>
      <th scope="col">Badge</th>
    </tr>
  </thead>
  <tbody>
    <tr className="level-1">
      <th scope="row"> <input type="checkbox"/>
      </th>
      <td>grocery shopping</td>
      <td>bronze</td>
    </tr>
    <tr className="level-3">
      <th scope="row"><input className="checkbox" type="checkbox"/>
      </th>
      <td>fill out job application</td>
      <td>gold</td>
    </tr>
    <tr className="level-2">
      <th scope="row"><input type="checkbox"/>
      </th>
      <td>call parents</td>
      <td>silver</td>
    </tr>
  </tbody>
</table>

        </div>
      
        </>
    )
}

export default AccomplishedTask