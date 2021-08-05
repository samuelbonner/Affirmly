import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


const Home: React.FC<IHome> = () => {


    // here will be erica's home page this was just temporary home page
    return (
        <>


        <div className="text-center">this is the home page
        </div>
          <Link to="/accomplishedtasks">
            <button className="btn btn-primary justify-content-center">task</button>
          </Link>
        </>
      );
    };
    
    interface IHome { }
    
    export default Home;