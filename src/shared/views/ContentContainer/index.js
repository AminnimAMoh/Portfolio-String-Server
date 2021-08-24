"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const style_1 = __importDefault(require("./style"));
const react_redux_1 = require("react-redux");
const UX = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("../Pages/UX"))));
const UI = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("../Pages/UI"))));
const CV = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("../Pages/CV"))));
const D3 = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("../Pages/D3"))));
const Undeveloped = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("../Pages/Undeveloped"))));
function RenderObject(state) {
    switch (state.state) {
        case "UX":
            return jsx_runtime_1.jsx(UX, {}, void 0);
        case "UI":
            return jsx_runtime_1.jsx(UI, {}, void 0);
        case "CV":
            return jsx_runtime_1.jsx(CV, {}, void 0);
        case "D3":
            return jsx_runtime_1.jsx(D3, {}, void 0);
        default:
            return jsx_runtime_1.jsx(Undeveloped, {}, void 0);
    }
}
function ContentContainer() {
    const classes = style_1.default();
    const rootDetails = react_1.useRef(null);
    const scrollToTop = react_1.useRef(null);
    const handleScroll = () => {
        rootDetails.current &&
            scrollToTop.current &&
            rootDetails.current.scrollTop > 800
            ? (scrollToTop.current.style.transform =
                window.innerWidth > 1280
                    ? "translateY(-15px) scale(1)"
                    : "translateY(-75px) scale(1)")
            : scrollToTop.current &&
                (scrollToTop.current.style.transform =
                    window.innerWidth > 1280
                        ? "translateY(-15px) scale(0)"
                        : "translateY(-75px) scale(1)");
    };
    const handleClick = () => {
        var _a;
        (_a = rootDetails.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const { buttonAction: { rootState, delayState, renderPage }, screenAction: { screenState }, } = react_redux_1.useSelector((state) => state);
    return (jsx_runtime_1.jsx("div", Object.assign({ onScroll: handleScroll, ref: rootDetails, className: rootState && screenState === "wide"
            ? `${classes.root} open`
            : rootState && screenState === "limited"
                ? `${classes.root} open_vertically`
                : !rootState && delayState && screenState === "wide"
                    ? `${classes.root} close`
                    : !rootState && delayState && screenState === "limited"
                        ? `${classes.root} close_vertically`
                        : screenState === "limited"
                            ? `${classes.root} close_vertically`
                            : classes.root, style: rootState && !delayState && screenState === "wide"
            ? { width: "100%" }
            : !rootState && delayState && screenState === "wide"
                ? { width: "0%" }
                : rootState && !delayState && screenState === "limited"
                    ? { height: "100%" }
                    : !rootState && delayState && screenState === "limited"
                        ? { height: "0%" }
                        : {} }, { children: jsx_runtime_1.jsxs(react_1.Suspense, Object.assign({ fallback: "Loadding...." }, { children: [jsx_runtime_1.jsx("div", Object.assign({ ref: scrollToTop, className: classes.scrollToTop, onClick: handleClick }, { children: jsx_runtime_1.jsx("div", {}, void 0) }), void 0), jsx_runtime_1.jsx("img", { src: "images/Containers/Content_Frame/Mobile.png", alt: "content", className: classes.MobileFrame }, void 0), jsx_runtime_1.jsx(RenderObject, { state: renderPage }, void 0)] }), void 0) }), void 0));
}
exports.default = ContentContainer;
