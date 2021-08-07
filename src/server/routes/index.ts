import * as express from "express";
import tasksRouter from "./tasks";
import trophiesRouter from "./trophies";
import usersRouter from "./users";

const router = express.Router();

router.get("/api/hello", (req, res, next) => {
    res.json("World");
});

// Need to setup and add usersRouter & trophiesRouter as well??
router.use("/api/tasks", tasksRouter);
router.use("/api/users", usersRouter);
router.use("/api/trophies", trophiesRouter);

export default router;
