import React, { useState, useEffect, useRef } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import Footer from '../components/Footer';



const EditTask = (props) => {
    const { id } = useParams();
    // These useStates are all for the Task creation + POST functionality

    const [title, setTitle] = React.useState("");
    const [details, setDetails] = React.useState("");
    const [difficulty, setDifficulty] = React.useState("1");
    const [priority, setPriority] = React.useState("0");
    const [completed, setCompleted] = React.useState("0");
    const [tasks, setTasks] = React.useState("");

    const history = useHistory();

    // Need a useEffect to load the task (using task.id?) and then use setStates to appropriate values

    React.useEffect(() => {
        (async () => {
            const fetchRes = await fetch(`/api/tasks/${id}`);
            const tasks = await fetchRes.json();
            setTasks(tasks);
            console.log(tasks);
            setTitle(tasks.title);
            setDetails(tasks.details);
            setDifficulty(tasks.difficulty);
            setPriority(tasks.priority);
        })();
    }, []);


    const handleEdit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetch(`/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, details, difficulty, priority, completed }),
        });
        history.push("/home");
    };


    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await fetch(`/api/tasks/${id}`, {
            method: "DELETE",
        });
        history.push("/home");
    };

    return (
        <>
            <nav className="navbar">
                <Link to="/home">
                    <img
                        src="../images/affirmlylogotransparent.png"
                        alt="Affirmly Logo"
                        width="90"
                        height="90"
                    />
                </Link>
                <div>
                    <Link to="/accomplishedtasks" className="link">
                        Accomplished Task
                    </Link>
                </div>
                <div>
                    <Link to="/newtask" className="link">
                        New Task
                    </Link>
                </div>
                <div>
                    <Link to="/trophycase" className="link">
                        Trophy Case
                    </Link>
                </div>
                <div>
                    <Link to="/" className="link">
                        Logout
                    </Link>
                </div>
                <div>
                    3 Day Streak
                    <img
                        src="../images/megaphone.gif"
                        alt="megaphone"
                        width="100"
                        height="100"
                    />
                </div>
            </nav>
            <div>
                <h2 className="title m-2"> Edit Tasks</h2>
            </div>


            {/* Task Form */}
            <div className='d-flex flex-wrap justify-content-center'>

                <form className="newtask_form form-group border border-primary rounded shadow-lg p-3 mx-3 d-flex row justify-content-center">
                    {/* Title Textbox */}
                    <input value={title} type="text" placeholder="Task Title" className="todo-input m-2 col-8" onChange={(e) => setTitle(e.target.value)} />

                    {/* Details Textbox */}
                    <textarea value={details} className="col-8 m-2" onChange={(e) => setDetails(e.target.value)} type="text" name="details" placeholder="Task Details" maxLength="550" />


                    {/* Dropdown for Difficulty Level */}
                    <label className='my-2 col-12 text-center'>
                        Pick a difficulty level:
                        <select className="ml-2" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                            <option value="1">Difficulty Level 1</option>
                            <option value="2">Difficulty Level 2</option>
                            <option value="3">Difficulty Level 3</option>
                        </select>
                    </label>
                    {/* Priority Checkbox */}
                    <div className="form-check form-switch col-12 text-center mb-3">
                        <label className="form-check-label mt-2" htmlFor="flexSwitchCheckDefault">
                            Priority?
                        </label>
                        <input value={priority} className="form-check-input ml-2 mb-4" id="flexSwitchCheckDefault" type="checkbox" name="priority" onChange={(e) => setPriority(e.target.checked)} />
                    </div>

                    {/* Submit Button */}
                    <button className="btn btn-warning todo-button mr-2" onClick={handleEdit}>
                        Edit Task
                    </button>
                    <button className="btn btn-danger todo-button" onClick={handleDelete}>
                        Delete Task
                    </button>

                </form>
            </div>

            <Footer />

        </>

    )
}

export default EditTask;