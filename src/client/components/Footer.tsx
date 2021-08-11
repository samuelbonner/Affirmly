import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <>
            <div className="footer position-fixed py-3 fixed-bottom">
                <Link to="/home">
                    <img src="../images/affirmlylogotransparent.png" alt="Affirmly Logo" width="90" height="90" />
                </Link>
                <div>
                    <a href="https://icons8.com/icon/44019/linkedin">
                        <img src="https://img.icons8.com/nolan/64/linkedin.png" />
                    </a>
                    {/* <Link to="/accomplishedtasks" className="link">
                        Accomplished Task
                    </Link> */}
                </div>
                <div>
                    <a href="https://icons8.com/icon/44003/facebook">
                        <img src="https://img.icons8.com/nolan/64/facebook.png" />
                    </a>
                    {/* <Link to="/newtask" className="link">
                        New Task
                    </Link> */}
                </div>
                <div>
                    <a href="https://icons8.com/icon/bYzsf9Bmocst/twitter">
                        <img src="https://img.icons8.com/nolan/64/twitter.png" />
                    </a>
                    {/* <Link to="/trophycase" className="link">
                        Trophy Case
                    </Link> */}
                </div>
                <div>
                    <a href="https://icons8.com/icon/43625/instagram-logo">
                        <img src="https://img.icons8.com/nolan/64/instagram-new.png" />
                    </a>
                    {/* <Link to="/" className="link">
                        Logout
                    </Link> */}
                </div>
                <div>
                    <a href="https://icons8.com/icon/Uehg4gyVyrUo/copyright">
                        <div className="copyright d-inline-flex"><img src="https://img.icons8.com/nolan/18/copyright.png" className="align-self-start"/>
                        <span className="inc" style={{fontSize: "38px"}}>Affirmly, Inc</span>
                        </div>
                    </a>
                </div>
            </div>

        </>


    )




}

// interface IFooter { };

export default Footer;