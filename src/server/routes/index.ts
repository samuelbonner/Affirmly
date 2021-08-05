import * as express from 'express';
import tasksRouter from "./tasks";

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

// Need to setup and add usersRouter & trophiesRouter as well??
router.use('/api/tasks', tasksRouter);

export default router;