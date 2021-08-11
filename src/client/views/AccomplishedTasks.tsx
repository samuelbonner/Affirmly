import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TasksTable from "../components/TasksTable";
import type { ITask } from "../../server/routes/tasks";
import Footer from '../components/Footer';


const AccomplishedTask = () => {
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
            <nav className="navbar sticky-top">
                <Link to="/home">
                    <img src="../images/affirmlylogotransparent.png" alt="Affirmly Logo" width="120" height="100" />
                </Link>
                <div>
                    <Link to="/accomplishedtasks" className="link text-decoration-none">
                        Accomplished Task
                    </Link>
                </div>
                <div>
                    <Link to="/newtask" className="link text-decoration-none">
                        New Task
                    </Link>
                </div>
                <div>
                    <Link to="/trophycase" className="link text-decoration-none">
                        Trophy Case
                    </Link>
                </div>
                <div>
                    <Link to="/" className="link text-decoration-none">
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

            <main className="container">
                <section className="row">
                    <div className="m-2">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">Completed</th>
                                    <th scope="col" className="text-center">Task</th>
                                    <th scope="col" className="text-center">Edit</th>
                                    <th scope="col" className="text-center">Priority</th>
                                </tr>
                            </thead>
                            {tasks.map((task) => {
                                if (task.completed == 1) {
                                    return <TasksTable task={task} key={`task-${task.id}`} />;
                                }
                            })}
                        </table>
                    </div>
                </section>
            </main>

            <Footer />

        </>
    );
};

export default AccomplishedTask;
