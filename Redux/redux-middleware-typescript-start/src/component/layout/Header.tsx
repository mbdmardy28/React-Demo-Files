import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

export default () => {
    return <AppBar position="static">
        <Toolbar>
            <Typography variant="subtitle1">
                Redux and Unit Test Demo
            </Typography>
        </Toolbar>
    </AppBar>
}