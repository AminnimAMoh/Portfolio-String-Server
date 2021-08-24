"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_1 = __importDefault(require("../styles"));
const core_1 = require("@material-ui/core");
const buttonActionSlice_1 = require("../../../redux/slices/buttonActionSlice");
const react_redux_1 = require("react-redux");
const reesbyResponsibilities = [
    "Leading the Front-End team.",
    "Developed Axios Interceptor and API calls.",
    "Developed Redux state management.",
    "Developed main project login and register page.",
    "Developed main project landing page (React Web Application) individually. ",
    "UX/UI Design for the new platform. ",
];
const freeLanceResponsibilities = [
    "Communicating with clients.",
    "Iterative progress.",
    "Data visualization.",
    "Web format Portfolio development HTML/CSS/JS.",
    "User Interaction Design.",
    "React.js development.",
];
const mentoringResponsibilities = [
    "Organizing teaching material.",
    "Explaining material in simple and small projects.",
    "Designing small projects for homework practices. ",
];
function CV() {
    const classes = styles_1.default();
    const dispatch = react_redux_1.useDispatch();
    const handleLinkClick = (e, linkName) => {
        e.preventDefault();
        dispatch(buttonActionSlice_1.containerStateToggle(linkName));
    };
    return (jsx_runtime_1.jsx("div", Object.assign({ className: classes.root }, { children: jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ container: true, justify: "space-between", alignContent: "flex-start", className: classes.topic_grid }, { children: [jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, lg: 6, md: 12, className: classes.topick_heading }, { children: [jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h3" }, { children: "Mohammad Amin Mohammadi" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "React.js Developer" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "Front-End Developer" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body2", style: { fontSize: "12px", color: "#426164" } }, { children: "Top Skills:" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body2", style: { fontSize: "12px", color: "#426164" } }, { children: "React.js, React-Redux, Redux ToolKit, React Hooks, React Functions,TypeScript, Axios, D3.js, JavaScript Vanilla, JSX, HTML, CSS, Material-UI." }), void 0)] }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, lg: 6, md: 12, className: classes.topic_pragraph }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "I am graduated from the University of Sydney Bachelor of Design Computing that empowers me with knowledge and experience in User Experience Design and User Interaction Design alongside my speciality in React.js Front-End Development. After mastering skills in CSS, HTML, JavaScript, D3.js, P5.js, P3 Processing Java I fell in love with React.js and have developed several projects in React.js and TypeScripts. After puting my skills in to a real-world test I have mastered React Hooks, React-Redux, Redux ToolKir, TypeScript, Axios Interceptors, Restful API, and Authentication." }), void 0) }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" }, { children: [jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h3" }, { children: "Education" }), void 0) }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" }, { children: [jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: [jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "Bachelor of Design Computing" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "University of Sydney" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Jul 2017 \u2014 Dec 2020" }), void 0)] }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Certified skills in User Experience Design, User Interaction Design, and Front-End Development. Mastering programming skills in React.js, React-Redux, Redux ToolKit, Axios, Material-UI, D3.js, JavaScript Vanilla, JSX, HTML & CSS." }), void 0) }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "Achivements" }), void 0) }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: [jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "University of Sydney hackathon Coding Fest 2020 Disaster Prevention Project Award." }), void 0), jsx_runtime_1.jsx(core_1.Link, Object.assign({ href: "", onClick: (e) => handleLinkClick(e, "D3") }, { children: "Bangladesh Rainfall Visualization." }), void 0)] }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: [jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Fighting misinformation through social media around the Covid-19 news." }), void 0), jsx_runtime_1.jsx(core_1.Link, Object.assign({ href: "", onClick: (e) => handleLinkClick(e, "UI") }, { children: "Covid Fact Check App-Developed in React.js." }), void 0)] }), void 0)] }), void 0)] }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" }, { children: [jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h3" }, { children: "Experience" }), void 0) }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" }, { children: [jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: [jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4", style: { color: "#9C3C41" } }, { children: "React Developer" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Reesby" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Mar 2021 \u2014 Present" }), void 0)] }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "React Front-End Developer in Reesby. Leader of Front-End development team. Developed Reesby main project landing page using React, React-Redux, React-Spring and Material-UI." }), void 0) }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "Responsibilities" }), void 0) }), void 0), reesbyResponsibilities.map((data) => {
                                    return (jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 4 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: data }), void 0) }), data));
                                }), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "Achivements" }), void 0) }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Three times nominated as the team member of the CRM team for dedication and hard work resulted in great outcomes." }), void 0) }), void 0)] }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Divider, { variant: "middle", className: classes.divider }, void 0) }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" }, { children: [jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: [jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4", style: { color: "#9C3C41" } }, { children: "Freelance Front End Development" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Freelance" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "2019 \u2014 Present" }), void 0)] }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Working from home on projects involve JavaScript programming and UI design." }), void 0) }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "Responsibilities" }), void 0) }), void 0), freeLanceResponsibilities.map((data) => {
                                    return (jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 4 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: data }), void 0) }), data));
                                })] }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Divider, { variant: "middle", className: classes.divider }, void 0) }), void 0), jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" }, { children: [jsx_runtime_1.jsxs(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: [jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4", style: { color: "#9C3C41" } }, { children: "Mentoring Class Mates" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "University of Sydney" }), void 0), jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Feb 2019 \u2014 Dec 2019" }), void 0)] }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 6 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: "Mentoring classmates to learn HTML/CSS/JavaScripts and P5.js." }), void 0) }), void 0), jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "h4" }, { children: "Responsibilities" }), void 0) }), void 0), mentoringResponsibilities.map((data) => {
                                    return (jsx_runtime_1.jsx(core_1.Grid, Object.assign({ item: true, xs: 12, sm: 4 }, { children: jsx_runtime_1.jsx(core_1.Typography, Object.assign({ variant: "body1" }, { children: data }), void 0) }), data));
                                })] }), void 0)] }), void 0)] }), void 0) }), void 0));
}
exports.default = CV;
