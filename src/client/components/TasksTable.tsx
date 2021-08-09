import * as React from "react";
import type { ITask } from "../../server/routes/tasks";

const TasksTable: React.FC<TasksTableProps> = ({ task }) => {
    return (
        <div className="m-2">
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th scope="col">Completed</th>
                        <th scope="col">Task</th>
                        <th scope="col">Badge</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Need to find a way to have a dynamically loaded className for difficulty / priority / completed
                    Need to make this entire row clickable and call a TaskDetails component (need to write & link) using the task.id
                    TaskDetails should show the full details of the task, not just the Title & Difficulty */}
                    {/* Code should be something like:
                    <TaskDetails taskid={task.id} /> */}

                    <tr className={`${task.difficulty}`}> {/* Need to update the app.scss file to match the task.difficulty or vice versa here */}
                        <th scope="row">
                            <input className="checkbox" type="checkbox" checked />
                        </th>
                        <td>`${task.title}`</td>
                        {/* Need a way to dynamically check for task difficulty then return the appropriate trophy-in-progress for the below td */}
                        <td>bronze</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

interface TasksTableProps {
    task: ITask;
}

export default TasksTable;
