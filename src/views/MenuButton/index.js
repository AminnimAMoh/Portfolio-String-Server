import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef } from "react";
import useStyle from "./style";
import useMeasure from "react-use-measure";
import { useDispatch, useSelector } from "react-redux";
import { containerStateToggle, onDelayStateChange,
// addButtonsPosition
 } from "../../redux/slices/buttonActionSlice";
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
    const classes = useStyle();
    const dispatch = useDispatch();
    // const [showInfo, setShowInfo] = useState<boolean>(false);
    // const [buttonPositions, setButtonsPosition] = useState<Positions[]>([
    //   { x: 0, y: 0 },
    // ]);
    const parentElement = useRef(null);
    const { buttonAction: { rootState, delayState, data }, screenAction: { screenState }, } = useSelector((state) => state);
    const [buttonMesures, { width }] = useMeasure();
    const [powerState, setPowerState] = useState(false);
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
            dispatch(containerStateToggle("PowerButton"));
            setTimeout(() => {
                dispatch(onDelayStateChange());
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
        dispatch(containerStateToggle(payload));
    };
    return (_jsxs("div", Object.assign({ className: classes.root, ref: parentElement, style: screenState === "wide" && !rootState && !delayState
            ? { paddingRight: 0 }
            : screenState === "limited" && !rootState
                ? { paddingTop: 0 }
                : {} }, { children: [_jsx("div", Object.assign({ className: powerState
                    ? `${classes.powerButton} open`
                    : `${classes.powerButton} close`, onClick: handlePowerClick }, { children: _jsx("img", { ref: buttonMesures, src: 'images/Button/Menu_Trigger/Power_Button-Stoke.png', alt: "content-asset" }, void 0) }), void 0), data.map(({ name, img, toolKit, info, }, index) => {
                const { x, y } = calPos(index, data.length, buttonSizing, powerState);
                return (_jsx("div", Object.assign({ className: classes.buttonContainers, style: { transform: `translate(${x}px, ${y}px)` } }, { children: _jsx("div", { id: name, className: classes.iconButtons, style: {
                            width: buttonSizing / 4,
                            height: buttonSizing / 4,
                            backgroundImage: `url(${img})`,
                        }, onClick: (e) => handleClick(e) }, void 0) }), name));
            })] }), void 0));
}
export default MenuButton;
//# sourceMappingURL=index.js.map