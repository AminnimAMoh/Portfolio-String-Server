"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import { useSelector } from "react-redux";
const styles_1 = __importDefault(require("./styles"));
function Info({}) {
    //   const {
    //     buttonAction: { data },
    //   } = useSelector((state: RootState) => state);
    const classes = styles_1.default();
    return (jsx_runtime_1.jsx("div", { className: classes.root }, void 0));
}
exports.default = Info;
