import { Query } from "./index";
import "../routes/tasks";

// This defines a function ("all") which will return all tasks using the Query function defined in index.ts
const allTasks = async () =>
    await Query(`
    SELECT tasks.id, tasks.title, tasks.details, tasks.difficulty, tasks.priority, tasks.completed
    FROM tasks
    JOIN users ON tasks.userid = users.id
`);

// This defines a function ("one") which will return one specific task using the Query function defined in index.ts
// ,
const oneTask = async (id: string) =>
    await Query(
        `
    SELECT tasks.id, tasks.title, tasks.details, tasks.difficulty, tasks.priority, tasks.completed
    FROM tasks
    JOIN users ON tasks.userid = users.id
    WHERE tasks.id = ?;
`,
        [id]
    );

// Not sure if this is necessary, but this should return all tasks from ONE specific user (targeting userid)
const allTasksFromUser = async (id: string) =>
    await Query(
        `
    SELECT tasks.id, tasks.title, tasks.details, tasks.difficulty, tasks.priority, tasks.completed
    FROM tasks
    JOIN users ON tasks.userid = users.id
    WHERE tasks.userid = ?;
`,
        [id]
    );

// This works but causes a typescript error for the taskDTO.
// If we do end up using the code below then routes/tasks.ts needs to be updated as well to target only the taskDTO instead of individual parameters.
// // insert into tasks (userid, title, details, difficulty, priority, completed) values (?, ?, ?, ?, ?, ?)
// // const insert = (taskDTO: {
// //     userid: string;
// //     title: string;
// //     details: string;
// //     difficulty: string;
// //     priority: string;
// //     completed: string;
// // }) => Query(`INSERT INTO tasks SET ?`, [taskDTO]);

const insert = (
    userid: string,
    title: string,
    details: string,
    difficulty: string,
    priority: string,
    completed: string
) =>
    Query(
        `
    INSERT INTO tasks (userid, title, details, difficulty, priority, completed) VALUES (?, ?, ?, ?, ?, ?)
        `,
        [userid, title, details, difficulty, priority, completed]
    );

const put = async (id: string, newTitle: string, newDetails: string) =>
    await Query(
        `
    UPDATE tasks
    SET title = ?, 
    details = ?
    WHERE tasks.id = ?;
        `,
        [newTitle, newDetails, id]
    );

const destroy = async (id: string) =>
    await Query(
        `
    DELETE FROM tasks WHERE tasks.id = ?;
        `,
        [id]
    );

//These get exported, and then imported in index.ts as an object 'Tasks', and then exported again in index.ts
export default {
    allTasks,
    oneTask,
    allTasksFromUser,
    insert,
    put,
    destroy,
};
