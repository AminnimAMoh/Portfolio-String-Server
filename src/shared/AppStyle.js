"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("@material-ui/core/styles");
const useStyle = styles_1.makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        flexFlow: "row-reverse",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.down("md")]: {
            flexFlow: "column",
        },
        "&.open": {
            paddingRight: theme.spacing(20),
            [theme.breakpoints.down("md")]: {
                paddingRight: theme.spacing(0),
            },
        },
        "&.close": {
            paddingRight: 0,
        },
    },
    landinginfo: {
        position: "absolute",
    },
    Splash: {
        position: "absolute",
        width: "100%",
        height: "100%",
        padding: theme.spacing(6),
        color: "white",
    },
    loading: {
        width: "100%",
        position: "absolute",
        top: 0,
        zIndex: 1,
    },
    snackbar: {
        cursor: 'pointer',
        // background: 'red',
        '& >*': {
            background: '#9c3c41',
        }
    }
}));
exports.default = useStyle;
