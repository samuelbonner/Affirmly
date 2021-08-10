import * as React from "react";
import type { ITask } from "../../server/routes/tasks";
import { useHistory, useParams, Link } from "react-router-dom";
import affirmations from "../../server/utils/affirmations";
import { toast } from "../components/ToastManager";

const TasksTable: React.FC<TasksTableProps> = (props) => {

    const history = useHistory();

    return (
        <tbody>
            <tr className={`level-${props.task.difficulty}`}>
                <th scope="row">
                    <input className="checkbox" type="checkbox" onChange={() => props.handleCompleteCheck(props.task.id, props.task.title, props.task.details, props.task.difficulty, props.task.priority)} />
                </th>
                <td>{props.task.title}</td>
                <td>
                    <Link to={`/${props.task.id}/edittask`}>Edit</Link>
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
