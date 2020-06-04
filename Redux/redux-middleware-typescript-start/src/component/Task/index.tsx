import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Column } from "material-table";
import { MuiSummaryCard, MuiTable } from "../common";
import { Task } from "../../redux/TaskState";

const useStyles = makeStyles({
    CardRoot: {
        display: "flex",
        flexDirection: "column",

    }
});


const TaskComponent: React.FC<any> = () => {
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

    return <Grid container spacing={2} style={{ margin: 10 }}>
        <Grid item xs={8}>
            <MuiTable
                isLoading={false}
                title="Task Grid"
                columnHeaders={[...columnHeaders]}
                data={[]}
                addRow={() => console.log("addRow")}
                deleteRow={() => console.log("deleteRow")}
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