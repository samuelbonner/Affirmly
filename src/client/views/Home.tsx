import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import affirmations from "../../server/utils/affirmations";
import { toast } from "../components/ToastManager";
import TasksTable from "../components/TasksTable";
import type { ITask } from "../../server/routes/tasks";

const Home: React.FC<IHome> = () => {
    // here will be erica's home page this is just placeholder styling

    const [tasks, setTasks] = React.useState<ITask[]>([]);

    // This useEffect runs once upon page load and fetches all tasks. The tasks get filtered by an if statement checking for completed(boolean) in the map function below
    React.useEffect(() => {
        (async () => {
            const fetchRes = await fetch("/api/tasks");
            const tasks = await fetchRes.json();
            setTasks(tasks);
        })();
    }, []);

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
                        New Task
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

            {/*Affirmation placeholder for dynamic Affirmation loading*/}

            <main className="container">
                <section className="row">
                    <div className="m-2">
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
                                    return <TasksTable task={task} key={`task-${task.id}`} />;
                                }
                            })}
                        </table>
                    </div>
                </section>
            </main>
        </>
    );
};

interface IHome {}

export default Home;
