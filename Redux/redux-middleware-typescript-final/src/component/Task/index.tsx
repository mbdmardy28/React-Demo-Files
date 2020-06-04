import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Typography, CardContent, Card } from "@material-ui/core";
import MaterialTable, { Column } from "material-table";
import { Task, TaskState } from "../../redux/TaskState";
import { useSelector, useDispatch } from "react-redux";
import { AddTaskAction, DeleteTaskAction } from "../../redux/TaskActions";
import { green } from "@material-ui/core/colors";

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

interface TableState {
    columns: Array<Column<Task>>;
    data: Task[];
}

interface Props {
    dispatchGetTasks: () => void
}
const TaskComponent: React.FC<Props> = ({ dispatchGetTasks }) => {
    const classes = useStyles()
    const { tasks, loading } = useSelector<TaskState>(state => state) as TaskState
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
        console.log("perform delete action")
        dispatch(DeleteTaskAction(task));

    }

    return <Grid container spacing={2} style={{ margin: 10 }}>
        <Grid item xs={8}>
            <div>
                <MaterialTable
                    title="Tasks"
                    isLoading={loading}
                    columns={columnHeaders}
                    data={taskData}
                    editable={{
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve()
                                    handleAddRow(newData);
                                }, 600)
                            }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve) => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        setTaskData((prevState) => {
                                            const data = [...prevState];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                resolve()
                                console.log("old",oldData)
                                handleDeleteRow(oldData);

                            }),
                    }}
                />
            </div>

        </Grid>
        <Grid item xs={4} className={classes.CardRoot}>
            <Card className={classes.card} style={{ backgroundColor: "gray" }}>

                <CardContent>
                    <Typography variant="caption">New</Typography>
                    <Typography variant="h4" style={{ textAlign: "center" }}>10</Typography>
                </CardContent>
            </Card>

            <Card className={classes.card} style={{ backgroundColor: "green" }}>
                <CardContent>
                    <Typography variant="caption">Active</Typography>
                    <Typography variant="h4" style={{ textAlign: "center" }}>10</Typography>
                </CardContent>
            </Card>

            <Card className={classes.card} style={{ backgroundColor: "yellow" }}>
                <CardContent>
                    <Typography variant="caption">Resolved</Typography>
                    <Typography variant="h4" style={{ textAlign: "center" }}>10</Typography>
                </CardContent>
            </Card>
            <Card className={classes.card} style={{ backgroundColor: "purple" }}>
                <CardContent>
                    <Typography variant="caption">Closed</Typography>
                    <Typography variant="h4" style={{ textAlign: "center" }}>10</Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
}

export default TaskComponent