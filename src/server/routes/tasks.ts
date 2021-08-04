import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
    const id: string = req.params.id;

    if (id) {
        const task = await db.Tasks.oneTask(id);
        res.json(task[0]);
    } else {
        const tasks = await db.Tasks.allTasks();
        res.json(tasks);
    }
});

router.post("/", async (req, res) => {
    // We create a variable for "task Data Transfer Object" to use below
    const taskDTO: task = req.body;
    console.log(taskDTO);

    try {
        // const newUser = await db.Users.insert(taskDTO.userid, taskDTO.title, taskDTO.details, taskDTO.difficulty, taskDTO.priority, taskDTO.completed);

        await db.Tasks.insert(taskDTO.userid, taskDTO.title, taskDTO.details, taskDTO.difficulty, taskDTO.priority, taskDTO.completed);
        // taskDTO.userid, taskDTO.title, taskDTO.details, taskDTO.difficulty, taskDTO.priority, taskDTO.completed
        res.send("Posted successfully");

    } catch (error) {
        console.log(`There was an error in router.insert in tasks.ts, specifically: ${error}`);
    }
});

router.put("/:id", async (req, res) => {
    const id: string = req.params.id;
    const newTitle : string = req.body.title;
    const newDetails: string = req.body.details;

    try {
        await db.Tasks.put(id, newTitle, newDetails);

        res.send("Edited successfully");
    } catch (error) {
        console.log(`There was an error in router.put in tasks.ts, specifically: ${error}`);
    }
});

router.delete("/:id", async (req, res) => {
    const id: string = req.params.id;

    try {
        await db.Tasks.destroy(id);

        res.send("Deleted successfully");
    } catch (error) {
        console.log(`There was an error in router.delete in tasks.ts, specifically: ${error}`);
    }
});

interface task {
    id?: string;
    userid: string;
    title: string;
    details: string;
    difficulty: string;
    priority: string;
    completed: string;
}

export default router;
