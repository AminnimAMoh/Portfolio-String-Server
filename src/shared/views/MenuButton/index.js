"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const style_1 = __importDefault(require("./style"));
const react_use_measure_1 = __importDefault(require("react-use-measure"));
const react_redux_1 = require("react-redux");
const buttonActionSlice_1 = require("../../redux/slices/buttonActionSlice");
// import { Positions } from "./types";
// import { Typography } from "@material-ui/core";
const calPos = (index, length, size, state) => {
    if (window.innerWidth > 1280) {
        const inc = state ? 1.5 : 3;
        const rad = size / inc;
        const angle = ((2 * Math.PI) / length) * index;
        const x = rad * Math.cos(angle);
        const y = rad * Math.sin(angle);
        return { x, y };
    }
    else {
        const phase = window.innerWidth < 560 ? 8 : 20;
        const inc = state ? 3 : 30;
        const angle = ((Math.PI * 2) / length + 2) * index;
        const rad = size / inc;
        const x = rad * 5 * Math.cos(angle) + 5 * (rad * Math.sin(angle)) - phase;
        const y = 0;
        return { x, y };
    }
};
function MenuButton() {
    const classes = style_1.default();
    const dispatch = react_redux_1.useDispatch();
    // const [showInfo, setShowInfo] = useState<boolean>(false);
    // const [buttonPositions, setButtonsPosition] = useState<Positions[]>([
    //   { x: 0, y: 0 },
    // ]);
    const parentElement = react_1.useRef(null);
    const { buttonAction: { rootState, delayState, data }, screenAction: { screenState }, } = react_redux_1.useSelector((state) => state);
    const [buttonMesures, { width }] = react_use_measure_1.default();
    const [powerState, setPowerState] = react_1.useState(false);
    const buttonSizing = width;
    // useEffect(() => {
    //   buttonSizing > 0 &&
    //     data.map(
    //       ({ name, img }: { name: string; img: string }, index: number) => {
    //         // console.log(index);
    //         const { x, y } = calPos(index, data.length, buttonSizing, powerState);
    //         setButtonsPosition((preState) => {
    //           return [...preState, { x, y }];
    //         });
    //       }
    //     );
    // }, [buttonSizing]);
    // console.log(buttonPositions);
    const handlePowerClick = () => {
        var _a, _b;
        const parentChilrdernLength = (_a = parentElement.current) === null || _a === void 0 ? void 0 : _a.childElementCount;
        const prentArray = (_b = parentElement.current) === null || _b === void 0 ? void 0 : _b.children;
        if (parentChilrdernLength && prentArray) {
            for (let i = 1; i < parentChilrdernLength; i++) {
                prentArray[i].children[0].classList.remove("focused");
            }
        }
        if (rootState) {
            dispatch(buttonActionSlice_1.containerStateToggle("PowerButton"));
            setTimeout(() => {
                dispatch(buttonActionSlice_1.onDelayStateChange());
            }, 500);
        }
        else {
            setPowerState(() => !powerState);
        }
    };
    const handleClick = (e) => {
        var _a, _b;
        const payload = e.currentTarget.id;
        const parentChilrdernLength = (_a = parentElement.current) === null || _a === void 0 ? void 0 : _a.childElementCount;
        const prentArray = (_b = parentElement.current) === null || _b === void 0 ? void 0 : _b.children;
        if (parentChilrdernLength && prentArray) {
            for (let i = 1; i < parentChilrdernLength; i++) {
                prentArray[i].children[0].id === payload
                    ? prentArray[i].children[0].classList.add("focused")
                    : prentArray[i].children[0].classList.remove("focused");
            }
        }
        dispatch(buttonActionSlice_1.containerStateToggle(payload));
    };
    return (jsx_runtime_1.jsxs("div", Object.assign({ className: classes.root, ref: parentElement, style: screenState === "wide" && !rootState && !delayState
            ? { paddingRight: 0 }
            : screenState === "limited" && !rootState
                ? { paddingTop: 0 }
                : {} }, { children: [jsx_runtime_1.jsx("div", Object.assign({ className: powerState
                    ? `${classes.powerButton} open`
                    : `${classes.powerButton} close`, onClick: handlePowerClick }, { children: jsx_runtime_1.jsx("img", { ref: buttonMesures, src: 'images/Button/Menu_Trigger/Power_Button-Stoke.png', alt: "content-asset" }, void 0) }), void 0), data.map(({ name, img, toolKit, info, }, index) => {
                const { x, y } = calPos(index, data.length, buttonSizing, powerState);
                return (jsx_runtime_1.jsx("div", Object.assign({ className: classes.buttonContainers, style: { transform: `translate(${x}px, ${y}px)` } }, { children: jsx_runtime_1.jsx("div", { id: name, className: classes.iconButtons, style: {
                            width: buttonSizing / 4,
                            height: buttonSizing / 4,
                            backgroundImage: `url(${img})`,
                        }, onClick: (e) => handleClick(e) }, void 0) }), name));
            })] }), void 0));
}
exports.default = MenuButton;
