import * as React from "react";
import type { ITask } from "../../server/routes/tasks";
import { Link } from "react-router-dom";

const TasksTable: React.FC<TasksTableProps> = ({ task }) => {
    return (
        <tbody>
            <tr className={`level-${task.difficulty}`}>
                <th scope="row">
                    <input className="checkbox" type="checkbox" />
                </th>
                <td>{task.title}</td>
                <td>
                    <Link to={`/${task.id}/edittask`}>Edit</Link>
                </td>
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
