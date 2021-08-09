import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'


const NewTask = (props) => {




    const [input, setInput] = useState('')

    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    })





    const handleChange = e => {
        setInput(e.target.value)
    }


    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };
    return (
        <>


            <nav className="navbar">
                <Link to="/">
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
                        NewTask
                    </Link>
                </div>
                <div>
                    <Link to="/edittask" className="link">
                        EditTask
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
                    <img
                        src="../images/megaphone.gif"
                        alt="megaphone"
                        width="100"
                        height="100"
                    />
                </div>
            </nav>
            <div>
                <h2 className="title m-2"> New Tasks</h2>
            </div>
            <form className='todo-form' onSubmit={handleSubmit}>
                <input type='text' placeholder='New Task' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef} />
                <button className='todo-button'>Submit</button>
            </form>
            </>



            )
}

            export default NewTask;