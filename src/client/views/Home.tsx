import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import LogIn from './Login';
import Footer from '../components/Footer';
import affirmations from "../../server/utils/affirmations";
import { toast } from "../components/ToastManager";
import TasksTable from "../components/TasksTable";
import type { ITask } from "../../server/routes/tasks";

const Home: React.FC<IHome> = () => {
    // here will be erica's home page this is just placeholder styling

    const [tasks, setTasks] = React.useState<ITask[]>([]);

    // This useEffect runs once upon page load and fetches all tasks. The tasks get filtered by an if statement checking for completed(boolean) in the map function below
    React.useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const fetchRes = await fetch("/api/tasks");
        const tasks = await fetchRes.json();
        setTasks(tasks);
    };

    const handleCompleteCheck = async (id: number, title, details, difficulty, priority) => {
        await fetch(`/api/tasks/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: id, title: title, details: details, difficulty: difficulty, priority: priority, completed: 1 }),
        });

        //This pops up a Toast with an Affirmation from the Affirmation.ts
        toast.show({
            title: "Task Complete!",
            content: affirmations[Math.floor(Math.random() * affirmations.length)],
            duration: 15000,
        });

        // setTimeout is currently not necessary, but we can uncomment the below lines incase there is a timing error with fetchTasks on completing a checkmark
        // setTimeout(() => {
            fetchTasks();
        // }, 500);
    };

    return (
        <>
            <nav className="navbar sticky-top">
                <Link to="/home">
                    <img src="../images/affirmlylogotransparent.png" alt="Affirmly Logo" width="90" height="90" />
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
                    <img src="../images/megaphone.gif" alt="megaphone" width="100" height="100" />
                </div>
            </nav>


            <div className="text-center">this is the home page</div>

            <div className="d-flex flex-wrap m-2 justify-content-center">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    onClick={() => {
                        toast.show({
                            title: "Task Completed!",
                            content: affirmations[Math.floor(Math.random() * affirmations.length)],
                            duration: 15000,
                        });
                    }}
                />
            </div>

            <div className="text-center">Open Tasks</div>

            {/*Affirmation placeholder for dynamic Affirmation loading*/}

            <main className="container">
                <section className="row">
                    <div className="tasks-div m-2 px-0 shadow-lg rounded-lg">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Completed</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Badge</th>
                                </tr>
                            </thead>
                            {tasks.map((task) => {
                                if (task.completed == 0) {
                                    return <TasksTable task={task} key={`task-${task.id}`} handleCompleteCheck={handleCompleteCheck} />;
                                }
                            })}
                        </table>
                    </div>
                </section>
            </main>
            
            <Footer />

            {/* Leaving commented code below just incase */}

            {/* <div className="footer position-fixed py-3 fixed-bottom">
                <Link to="/home">
                    <img src="../images/affirmlylogotransparent.png" alt="Affirmly Logo" width="90" height="90" />
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
                    <img src="../images/megaphone.gif" alt="megaphone" width="100" height="100" />
                </div>
            </div> */}
        </>
    );
};

interface IHome {}

export default Home;
