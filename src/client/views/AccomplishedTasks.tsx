import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AccomplishedTask = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">
                    <img src="../images/affirmlylogotransparent.png" alt="Affirmly Logo" width="90" height="90" />
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
            <div>
                <h2 className="title m-2">Accomplished Tasks</h2>
            </div>

            <div className="m-2">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Completed</th>
                            <th scope="col">Task</th>
                            <th scope="col">Badge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="level-1">
                            <th scope="row">
                                <input type="checkbox" checked />
                            </th>
                            <td>grocery shopping</td>
                            <td>bronze</td>
                        </tr>
                        <tr className="level-3">
                            <th scope="row">
                                <input className="checkbox" type="checkbox" checked />
                            </th>
                            <td>fill out job application</td>
                            <td>gold</td>
                        </tr>
                        <tr className="level-2">
                            <th scope="row">
                                <input type="checkbox" checked />
                            </th>
                            <td>call parents</td>
                            <td>silver</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AccomplishedTask;
