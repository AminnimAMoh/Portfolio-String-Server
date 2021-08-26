import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, Suspense, lazy } from "react";
import useStyle from "./style";
import { useSelector } from "react-redux";
const UX = lazy(() => import("../Pages/UX"));
const UI = lazy(() => import("../Pages/UI"));
const CV = lazy(() => import("../Pages/CV"));
const D3 = lazy(() => import("../Pages/D3"));
const Undeveloped = lazy(() => import("../Pages/Undeveloped"));
function RenderObject(state) {
    switch (state.state) {
        case "UX":
            return _jsx(UX, {}, void 0);
        case "UI":
            return _jsx(UI, {}, void 0);
        case "CV":
            return _jsx(CV, {}, void 0);
        case "D3":
            return _jsx(D3, {}, void 0);
        default:
            return _jsx(Undeveloped, {}, void 0);
    }
}
function ContentContainer() {
    const classes = useStyle();
    const rootDetails = useRef(null);
    const scrollToTop = useRef(null);
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
    const { buttonAction: { rootState, delayState, renderPage }, screenAction: { screenState }, } = useSelector((state) => state);
    return (_jsx("div", Object.assign({ onScroll: handleScroll, ref: rootDetails, className: rootState && screenState === "wide"
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
                        : {} }, { children: _jsxs(Suspense, Object.assign({ fallback: "Loadding...." }, { children: [_jsx("div", Object.assign({ ref: scrollToTop, className: classes.scrollToTop, onClick: handleClick }, { children: _jsx("div", {}, void 0) }), void 0), _jsx("img", { src: "images/Containers/Content_Frame/Mobile.png", alt: "content", className: classes.MobileFrame }, void 0), _jsx(RenderObject, { state: renderPage }, void 0)] }), void 0) }), void 0));
}
export default ContentContainer;
//# sourceMappingURL=index.js.map