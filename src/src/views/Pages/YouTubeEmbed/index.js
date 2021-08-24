"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = __importDefault(require("../styles"));
const react_use_measure_1 = __importDefault(require("react-use-measure"));
function YouTubeEmbed({ embedID }) {
    const classes = styles_1.default();
    const [videoContainer, { width }] = react_use_measure_1.default();
    return (jsx_runtime_1.jsx("div", Object.assign({ className: classes.video_container, ref: videoContainer }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: classes.video_root }, { children: jsx_runtime_1.jsx("div", Object.assign({ className: classes.video_responsive }, { children: jsx_runtime_1.jsx("iframe", { width: "100%", height: width / 2, src: `https://www.youtube.com/embed/${embedID}`, frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, title: "Embedded youtube" }, void 0) }), void 0) }), void 0) }), void 0));
}
exports.default = YouTubeEmbed;
