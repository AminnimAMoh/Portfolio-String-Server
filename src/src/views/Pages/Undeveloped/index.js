"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@material-ui/core");
const styles_1 = __importDefault(require("../styles"));
function Undeveloped() {
    const classes = styles_1.default();
    return (jsx_runtime_1.jsx("div", { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: 'h3', className: classes.topick_heading }, { children: "This page is temporary unavailable." }), void 0) }, void 0));
}
exports.default = Undeveloped;
