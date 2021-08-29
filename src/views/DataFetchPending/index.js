import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import LinearProgress from '@material-ui/core/LinearProgress';
const useStyles = makeStyles({
    root: {
        width: "100%",
    },
    barRoot: {
        backgroundColor: '#061621'
    },
    bar: {
        backgroundColor: '#12393d'
    },
    barError: {
        backgroundColor: '#9c3c41'
    }
});
function DataPending() {
    const classes = useStyles();
    const { dataStore: { errorState } } = useSelector((state) => state);
    return (React.createElement("div", { className: classes.root },
        React.createElement(LinearProgress, { variant: 'indeterminate', classes: !errorState ? {
                query: classes.barRoot,
                bar: classes.bar,
            } : {
                query: classes.barRoot,
                bar: classes.barError,
            } })));
}
export default DataPending;
//# sourceMappingURL=index.js.map