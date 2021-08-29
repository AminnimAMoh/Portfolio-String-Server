import React, { useRef } from "react";
import useStyle from "./style";
import { useSelector } from "react-redux";
import UX from "../Pages/UX";
import UI from "../Pages/UI";
import CV from "../Pages/CV";
// import D3 from "../Pages/D3";
import Undeveloped from "../Pages/Undeveloped";
function RenderObject(state) {
    switch (state.state) {
        case "UX":
            return React.createElement(UX, null);
        case "UI":
            return React.createElement(UI, null);
        case "CV":
            return React.createElement(CV, null);
        // case "D3":
        // return <D3 />;
        default:
            return React.createElement(Undeveloped, null);
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
    return (React.createElement("div", { onScroll: handleScroll, ref: rootDetails, className: rootState && screenState === "wide"
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
                        : {} },
        React.createElement("div", { ref: scrollToTop, className: classes.scrollToTop, onClick: handleClick },
            React.createElement("div", null)),
        React.createElement("img", { src: "images/Containers/Content_Frame/Mobile.png", alt: "content", className: classes.MobileFrame }),
        React.createElement(RenderObject, { state: renderPage })));
}
export default ContentContainer;
//# sourceMappingURL=index.js.map