import * as express from 'express';
import tasksRouter from "./tasks";

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});

// Node does not like the router.use below -- Just kidding, works now
router.use('/api/tasks', tasksRouter);

export default router;