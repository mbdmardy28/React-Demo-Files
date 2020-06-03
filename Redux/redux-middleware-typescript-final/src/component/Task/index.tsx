import React, { useState, useEffect } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import MaterialTable, { Column } from "material-table";
import { Task, TaskState } from "../../redux/TaskState";
import { useSelector, useDispatch } from "react-redux";
import { AddTaskAction } from "../../redux/TaskActions";


const useStyles = makeStyles({
    paper: {
        padding: 10,
        margin: 10,

        overflowY: 'auto',
        height: 440
    },
    table: {
        margin: 10
    }
});

interface TableState {
    columns: Array<Column<Task>>;
    data: Task[];
}

interface Props {
    dispatchGetTasks: () => void
}
const TaskComponent: React.FC<Props> = ({dispatchGetTasks}) => {
    const classes = useStyles()
    const {tasks, loading} = useSelector<TaskState>(state=> state) as TaskState
    const columnHeaders: Array<Column<Task>> = [
        { title: 'Id', field: 'id', hidden: true },
        { title: 'Title', field: 'title' },
        { title: 'Description', field: 'description' },
        {
            title: 'Status',
            field: 'status',
            lookup: { Active: 'Active', New: 'New',Resolved: 'Resolved', Closed:'Closed' },
        },
    ]

    const [taskData, setTaskData] = useState<Task[]>([]);

    useEffect(() => {
        dispatchGetTasks();

    },[dispatchGetTasks])
   
    useEffect(() => {
        if(tasks.length > 0) {
            setTaskData(tasks)
        }
    }, [tasks])
   
    const dispatch = useDispatch();

    const handleAddRow = (task: Task) => {
        dispatch(AddTaskAction(task));
    }

    return <Grid container spacing={2}>
        <Grid item xs={8}>
            <div className={classes.table}>
            <MaterialTable
                    title="Tasks"
                    isLoading={loading}
                    columns={columnHeaders}
                    data={taskData}
                    editable={{
                        onRowAdd: (newData) =>
                            new Promise((resolve) => {
                                resolve()
                                handleAddRow(newData);
                             
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
                                setTimeout(() => {
                                    resolve();

                                    setTaskData((prevState) => {
                                        const data = [...prevState];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </div>
       
        </Grid>
        <Grid item xs={4}>
            
        </Grid>
    </Grid>
}

export default TaskComponent