import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const NewTask: React.FC<NewTaskProps> = (props) => {
    // These useStates are all for the Task creation + POST functionality

    const [title, setTitle] = React.useState("");
    const [details, setDetails] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("1");
    const [priority, setPriority] = React.useState("0");
    const [completed, setCompleted] = React.useState("0");

    const history = useHistory();

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userid: 1, title, details, difficulty, priority, completed }),
        });
        history.push("/");
    };

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
                    <Link to="/newtask" className="link">
                        NewTask
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
                <h2 className="title m-2"> New Tasks</h2>
            </div>

            {/* Task Form */}
            <form className="newtask_form form-group border border-primary rounded shadow-lg p-3 mx-3">
                {/* Title Textbox */}
                <input value={title} type="text" placeholder="Task Title" className="todo-input" onChange={(e) => setTitle(e.target.value)} />

                {/* Details Textbox */}
                <textarea value={details} onChange={(e) => setDetails(e.target.value)} type="text" name="details" placeholder="Task Details" maxLength="550" />

                {/* Priority Checkbox */}
                <div className="form-check form-switch">
                    <input value={priority} className="form-check-input" id="flexSwitchCheckDefault" type="checkbox" name="priority" onChange={(e) => setPriority(e.target.checked)} />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                        Priority
                    </label>
                </div>

                {/* Dropdown for Difficulty Level */}
                <label>
                    Pick a difficulty level:
                    <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                        <option value="1">Difficulty Level 1</option>
                        <option value="2">Difficulty Level 2</option>
                        <option value="3">Difficulty Level 3</option>
                    </select>
                </label>

                {/* Submit Button */}
                <button className="btn btn-primary todo-button" onClick={handleSubmit}>
                    Add Task
                </button>
            </form>
        </>
    );
};

interface NewTaskProps {}

export default NewTask;
