import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Column } from "material-table";
import { Task, TaskState } from "../../redux/TaskState";
import { useSelector, useDispatch } from "react-redux";
import { AddTaskAction, DeleteTaskAction } from "../../redux/TaskActions";
import { green } from "@material-ui/core/colors";
import { MuiTable, MuiSummaryCard } from "../common";

const useStyles = makeStyles({
    card: {
        height: 90,
        marginRight: 20,
        backgroundColor: green[50],
        marginBottom: 25

    },
    CardRoot: {
        display: "flex",
        flexDirection: "column",

    }
});


interface Props {
    dispatchGetTasks: () => void
}
const TaskComponent: React.FC<Props> = ({ dispatchGetTasks }) => {
    const columnHeaders: Array<Column<Task>> = [
        { title: 'Id', field: 'id', hidden: true },
        { title: 'Title', field: 'title' },
        { title: 'Description', field: 'description' },
        {
            title: 'Status',
            field: 'status',
            lookup: { Active: 'Active', New: 'New', Resolved: 'Resolved', Closed: 'Closed' },
        },
    ]
    const classes = useStyles()
    const { tasks, loading } = useSelector<TaskState>(state => state) as TaskState

    const [taskData, setTaskData] = useState<Task[]>([]);

    useEffect(() => {
        dispatchGetTasks();

    }, [dispatchGetTasks])

    useEffect(() => {
        if (tasks.length > 0) {
            setTaskData(tasks)
        }
    }, [tasks])

    const dispatch = useDispatch();

    const handleAddRow = (task: Task) => {
        dispatch(AddTaskAction(task));
    }

    const handleDeleteRow = (task: Task) => {
        dispatch(DeleteTaskAction(task));
    }

    return <Grid container spacing={2} style={{ margin: 10 }}>
        <Grid item xs={8}>
            <MuiTable
                isLoading={loading}
                title="Task Grid"
                columnHeaders={[...columnHeaders]}
                data={taskData}
                addRow={handleAddRow}
                deleteRow={handleDeleteRow}
            />
        </Grid>
        <Grid item xs={4} className={classes.CardRoot}>
            <MuiSummaryCard
                title="New"
                style={{ backgroundColor: "gray" }}
                total={5}
            />

            <MuiSummaryCard
                title="Active"
                style={{ backgroundColor: "green" }}
                total={10}
            />

            <MuiSummaryCard
                title="Resolved"
                style={{ backgroundColor: "yellow" }}
                total={20}
            />

            <MuiSummaryCard
                title="Closed"
                style={{ backgroundColor: "purple" }}
                total={30}
            />
        </Grid>
    </Grid>
}

export default TaskComponent