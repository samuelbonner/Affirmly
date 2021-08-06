import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


const Home: React.FC<IHome> = () => {


    // here will be erica's home page this was just temporary home page
    return (
        <>
        <nav className="navbar">
          <Link to="/">
    <img src='../images/affirmlylogotransparent.png' alt="Affirmly Logo" width="90" height="90"/>
          </Link>
    <div>
    <Link to="/accomplishedtasks" className="link">
            Accomplished Task
          </Link>
    </div>
    <div>
    <Link to="/trophycase" className="link">
          Trophy Case
          </Link>
          </div>
    <div>
    <Link to="/login" className="link">
          Logout
          </Link>
      </div>
    <div>
3 Day Streak
    <img src="../images/megaphone.gif" alt="megaphone" width="100" height="100" />
    </div>
</nav>


        <div className="text-center">this is the home page
        </div>

        </>
      );
    };
    
    interface IHome { }
    
    export default Home;