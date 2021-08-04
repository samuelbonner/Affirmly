import { Query } from "./index";

// This defines a function ("all") which will return all tasks using the Query function defined in index.ts
const allTasks = async () =>
    await Query(`
    select tasks.id, tasks.name, tasks.details, tasks.difficulty, tasks.priority, tasks.completed, users.name
    from tasks
    join users on tasks.userid = users.id
`);

// This defines a function ("one") which will return one specific task using the Query function defined in index.ts
const oneTask = async (id: string) =>
    await Query(`
    select tasks.id, tasks.name, tasks.details, tasks.difficulty, tasks.priority, tasks.completed, users.name
    from tasks
    join users on tasks.userid = users.id
    where tasks.id = ?;
`, [id]);


// Not sure if this is necessary, but this should return all tasks from ONE specific user (targeting userid)
const allTasksFromUser = async (id: string) =>
    await Query(`
    select tasks.id, tasks.name, tasks.details, tasks.difficulty, tasks.priority, tasks.completed, users.name
    from tasks
    join users on tasks.userid = users.id
    where tasks.userid = ?;
`, [id]);

const post = async (userid: string, name: string, content: string, details: string, difficulty: string, priority: string, completed: string) => Query(`
    insert into tasks (userid, name, details, difficulty, priority, completed) values (?, ?)
`, [userid, name, details, difficulty, priority, completed]);

const put = async (id: string, newContent: string) => Query(`
    UPDATE tasks
    SET content = ?
    WHERE tasks.id = ?;
`, [newContent, id]);

const destroy = async (id: string) => Query(`
    DELETE FROM tasks WHERE tasks.id = ?;
`, [id]);


//These get exported, and then imported in index.ts as an object 'Tasks', and then exported again in index.ts
export default {
    allTasks,
    oneTask,
    allTasksFromUser,
    post,
    put,
    destroy
} 