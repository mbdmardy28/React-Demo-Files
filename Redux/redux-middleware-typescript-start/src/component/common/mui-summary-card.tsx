import React from "react";
import { Card, makeStyles, CardContent, Typography } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
    card: {
        height: 90,
        marginRight: 20,
        backgroundColor: green[50],
        marginBottom: 25

    }
})
interface Props {
    style:any,
    title: string,
    total: number
}
const MuiSummaryCard:React.FC<Props> = ({style, title, total}) => {
    const classes = useStyles();
    return <Card className={classes.card} style={style}>

    <CardContent>
        <Typography variant="caption">{title}</Typography>
        <Typography variant="h4" style={{ textAlign: "center" }}>{total}</Typography>
    </CardContent>
</Card>
}

export default MuiSummaryCard;