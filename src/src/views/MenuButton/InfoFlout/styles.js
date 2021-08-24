"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@material-ui/core");
const useStyles = core_1.makeStyles((theme) => ({
    root: {
        position: "absolute",
        height: "100%",
        width: "100%",
        padding: theme.spacing(5),
        display: "table",
        perspective: "500px",
    },
    landinginfo: {
        position: "relative",
        width: "100%",
        transformStyle: "preserve-3d",
        height: "40px",
    },
    moverText: {
        position: "absolute",
        opacity: .5,
    },
}));
exports.default = useStyles;
