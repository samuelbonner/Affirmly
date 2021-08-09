import * as React from "react";
import type { ITask } from "../../server/routes/tasks";

const TasksTable: React.FC<TasksTableProps> = ({ task }) => {
    return (

                <tbody>
                    {/* Need to find a way to have a dynamically loaded className for difficulty / priority / completed
                    Need to make this entire row clickable and call a TaskDetails component (need to write & link) using the task.id
                    TaskDetails should show the full details of the task, not just the Title & Difficulty */}
                    {/* Or should that be the EditTask component? */}
                    {/* Code should be something like:
                    <TaskDetails taskid={task.id} /> */}

                    <tr className={`level-${task.difficulty}`}>
                        <th scope="row">
                            <input className="checkbox" type="checkbox" checked />
                        </th>
                        <td>{task.title}</td>
                        {/* Need a way to dynamically check for task difficulty then return the appropriate trophy-in-progress for the below td */}
                        <td>bronze</td>
                    </tr>
                </tbody>
    );
};

interface TasksTableProps {
    task: ITask;
}

export default TasksTable;
