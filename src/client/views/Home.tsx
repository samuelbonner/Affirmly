import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


import LogIn from './Login';//This is currently the homepath, so this isn't called in the Navbar anymore
import Navbar from '../components/Navbar';
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
            <Navbar />

            {/* <nav className="navbar sticky-top">
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
            </nav> */}



           
            
            <div className="text-center mt-3"><h3><strong>Welcome, Affirmly!</strong></h3></div>


            {/*Affirmation placeholder for dynamic Affirmation loading*/}

            <main className="container">
                <section className="row">
                    <div className="tasks-div m-2 mb-5 px-0 rounded border-0">
                        <table className="table table-bordered table-hover rounded-lg">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center">Completed</th>
                                    <th scope="col" className="text-center">Task</th>
                                    <th scope="col" className="text-center">Edit</th>
                                    <th scope="col" className="text-center">Priority</th>
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

interface IHome { }

export default Home;
