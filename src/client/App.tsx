import * as React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import Home from "./views/Home";
import AccomplishedTasks from "./views/AccomplishedTasks";
import TrophyCase from "./views/TrophyCase";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import NewTask from "./views/NewTask";
import EditTask from "./views/EditTask";
const App: React.FC = (props: AppProps) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/accomplishedtasks">
                    <AccomplishedTasks />
                </Route>
                <Route exact path="/trophycase">
                    <TrophyCase />
                </Route>
                <Route exact path="/:id/edittask">
                    <EditTask />
                </Route>
                <Route exact path="/login">
                    <LogIn />
                </Route>
                <Route exact path="/newtask">
                    <NewTask />
                </Route>
                <Route exact path="/edittask">
                    <EditTask />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

interface AppProps {}

export default App;
