import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TasksTable from "../components/TasksTable";
import type { ITask } from "../../server/routes/tasks";

const Home: React.FC<IHome> = () => {
    // here will be erica's home page this is just placeholder styling

    const [tasks, setTasks] = React.useState<ITask[]>([]);

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
            {/*Affirmation placeholder for dynamic Affirmation loading*/}

            <main className="container">
                <section className="row">
                    <div className="m-2">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Completed</th>
                                    <th scope="col">Task</th>
                                    <th scope="col">Badge</th>
                                </tr>
                            </thead>
                            {tasks.map((task) => {
                                return <TasksTable task={task} key={`task-${task.id}`} />;
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