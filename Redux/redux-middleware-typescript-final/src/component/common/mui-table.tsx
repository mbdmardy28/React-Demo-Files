import React from "react";
import MaterialTable, { Column } from "material-table";
import { Task } from "../../redux/TaskState";

interface Props {
    title: string,
    isLoading?: boolean,
    columnHeaders: Array<Column<Task>>
    data: Task[]
    addRow: (row : any) => void
    deleteRow: (row: any) => void
}

const MuiTable: React.FC<Props> = ({
    title = 'Change Title', 
    isLoading, 
    columnHeaders, 
    data,
    addRow,
    deleteRow
}) => {

    return <MaterialTable
    title={title}
    isLoading={isLoading}
    columns={columnHeaders}
    data={data}
    editable={{
        onRowAdd: (newData) =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve()
                    addRow(newData);
                }, 600)
            }),
        onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                   
                }, 600);
            }),
        onRowDelete: (oldData) =>
            new Promise((resolve) => {
                resolve()
                deleteRow(oldData);
            }),
    }}
/>
}

export default MuiTable