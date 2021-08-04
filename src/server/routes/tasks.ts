import * as express from "express";
import db from "../db";

const router = express.Router();

router.get("/:id?", async (req, res) => {
    const id: string = req.params.id;

    if (id) {
        const task = await db.Tasks.one(id);
        res.json(task[0]);
    } else {
        const tasks = await db.Tasks.all();
        res.json(tasks);
    }
});

router.post("/", async (req, res) => {
    const taskObj: task = req.body;

    try {
        const newUser = await db.Users.post(taskObj.name, taskObj.email);

        await db.Tasks.post(newUser.insertId, taskObj.content);

        res.send("success");
    } catch (error) {
        console.log(error);
    }
});

router.put("/:id", async (req, res) => {
    const id: string = req.params.id;
    const newContent: string = req.body.content;

    try {
        await db.Tasks.put(id, newContent);

        res.send("edited successfully");
    } catch (error) {
        console.log(error);
    }
});

router.delete("/:id", async (req, res) => {
    const id: string = req.params.id;

    try {
        await db.Tasks.destroy(id);

        res.send("deleted successfully");
    } catch (error) {
        console.log(error);
    }
});

interface task {
    id?: string;
    userid: string;
    name: string;
    details: string;
    difficulty: string;
    priority: string;
    completed: string;
}

export default router;
