"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = require("@material-ui/core/styles");
const react_redux_1 = require("react-redux");
const LinearProgress_1 = __importDefault(require("@material-ui/core/LinearProgress"));
const useStyles = styles_1.makeStyles({
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
    const { dataStore: { errorState } } = react_redux_1.useSelector((state) => state);
    return (jsx_runtime_1.jsx("div", Object.assign({ className: classes.root }, { children: jsx_runtime_1.jsx(LinearProgress_1.default, { variant: 'indeterminate', classes: !errorState ? {
                query: classes.barRoot,
                bar: classes.bar,
            } : {
                query: classes.barRoot,
                bar: classes.barError,
            } }, void 0) }), void 0));
}
exports.default = DataPending;
