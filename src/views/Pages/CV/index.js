import React from "react";
import useStyle from "../styles";
import { Grid, Link, Typography, Divider } from "@material-ui/core";
import { containerStateToggle } from "../../../redux/slices/buttonActionSlice";
import { useDispatch } from "react-redux";
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
    const classes = useStyle();
    const dispatch = useDispatch();
    const handleLinkClick = (e, linkName) => {
        e.preventDefault();
        dispatch(containerStateToggle(linkName));
    };
    return (React.createElement("div", { className: classes.root },
        React.createElement(Grid, { container: true, justify: "space-between", alignContent: "flex-start", className: classes.topic_grid },
            React.createElement(Grid, { item: true, lg: 6, md: 12, className: classes.topick_heading },
                React.createElement(Typography, { variant: "h3" }, "Mohammad Amin Mohammadi"),
                React.createElement(Typography, { variant: "h4" }, "React.js Developer"),
                React.createElement(Typography, { variant: "h4" }, "Front-End Developer"),
                React.createElement(Typography, { variant: "body2", style: { fontSize: "12px", color: "#426164" } }, "Top Skills:"),
                React.createElement(Typography, { variant: "body2", style: { fontSize: "12px", color: "#426164" } }, "React.js, React-Redux, Redux ToolKit, React Hooks, React Functions,TypeScript, Axios, D3.js, JavaScript Vanilla, JSX, HTML, CSS, Material-UI.")),
            React.createElement(Grid, { item: true, lg: 6, md: 12, className: classes.topic_pragraph },
                React.createElement(Typography, { variant: "body1" }, "I am graduated from the University of Sydney Bachelor of Design Computing that empowers me with knowledge and experience in User Experience Design and User Interaction Design alongside my speciality in React.js Front-End Development. After mastering skills in CSS, HTML, JavaScript, D3.js, P5.js, P3 Processing Java I fell in love with React.js and have developed several projects in React.js and TypeScripts. After puting my skills in to a real-world test I have mastered React Hooks, React-Redux, Redux ToolKir, TypeScript, Axios Interceptors, Restful API, and Authentication.")),
            React.createElement(Grid, { item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Typography, { variant: "h3" }, "Education")),
                React.createElement(Grid, { item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" },
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "h4" }, "Bachelor of Design Computing"),
                        React.createElement(Typography, { variant: "body1" }, "University of Sydney"),
                        React.createElement(Typography, { variant: "body1" }, "Jul 2017 \u2014 Dec 2020")),
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "body1" }, "Certified skills in User Experience Design, User Interaction Design, and Front-End Development. Mastering programming skills in React.js, React-Redux, Redux ToolKit, Axios, Material-UI, D3.js, JavaScript Vanilla, JSX, HTML & CSS.")),
                    React.createElement(Grid, { item: true, xs: 12 },
                        React.createElement(Typography, { variant: "h4" }, "Achivements")),
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "body1" }, "University of Sydney hackathon Coding Fest 2020 Disaster Prevention Project Award."),
                        React.createElement(Link, { href: "", onClick: (e) => handleLinkClick(e, "D3") }, "Bangladesh Rainfall Visualization.")),
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "body1" }, "Fighting misinformation through social media around the Covid-19 news."),
                        React.createElement(Link, { href: "", onClick: (e) => handleLinkClick(e, "UI") }, "Covid Fact Check App-Developed in React.js.")))),
            React.createElement(Grid, { item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Typography, { variant: "h3" }, "Experience")),
                React.createElement(Grid, { item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" },
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "h4", style: { color: "#9C3C41" } }, "React Developer"),
                        React.createElement(Typography, { variant: "body1" }, "Reesby"),
                        React.createElement(Typography, { variant: "body1" }, "Mar 2021 \u2014 Present")),
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "body1" }, "React Front-End Developer in Reesby. Leader of Front-End development team. Developed Reesby main project landing page using React, React-Redux, React-Spring and Material-UI.")),
                    React.createElement(Grid, { item: true, xs: 12 },
                        React.createElement(Typography, { variant: "h4" }, "Responsibilities")),
                    reesbyResponsibilities.map((data) => {
                        return (React.createElement(Grid, { item: true, xs: 12, sm: 4, key: data },
                            React.createElement(Typography, { variant: "body1" }, data)));
                    }),
                    React.createElement(Grid, { item: true, xs: 12 },
                        React.createElement(Typography, { variant: "h4" }, "Achivements")),
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "body1" }, "Three times nominated as the team member of the CRM team for dedication and hard work resulted in great outcomes."))),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Divider, { variant: "middle", className: classes.divider })),
                React.createElement(Grid, { item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" },
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "h4", style: { color: "#9C3C41" } }, "Freelance Front End Development"),
                        React.createElement(Typography, { variant: "body1" }, "Freelance"),
                        React.createElement(Typography, { variant: "body1" }, "2019 \u2014 Present")),
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "body1" }, "Working from home on projects involve JavaScript programming and UI design.")),
                    React.createElement(Grid, { item: true, xs: 12 },
                        React.createElement(Typography, { variant: "h4" }, "Responsibilities")),
                    freeLanceResponsibilities.map((data) => {
                        return (React.createElement(Grid, { item: true, xs: 12, sm: 4, key: data },
                            React.createElement(Typography, { variant: "body1" }, data)));
                    })),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Divider, { variant: "middle", className: classes.divider })),
                React.createElement(Grid, { item: true, container: true, xs: 12, spacing: 4, justify: "space-between", alignContent: "flex-start" },
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "h4", style: { color: "#9C3C41" } }, "Mentoring Class Mates"),
                        React.createElement(Typography, { variant: "body1" }, "University of Sydney"),
                        React.createElement(Typography, { variant: "body1" }, "Feb 2019 \u2014 Dec 2019")),
                    React.createElement(Grid, { item: true, xs: 12, sm: 6 },
                        React.createElement(Typography, { variant: "body1" }, "Mentoring classmates to learn HTML/CSS/JavaScripts and P5.js.")),
                    React.createElement(Grid, { item: true, xs: 12 },
                        React.createElement(Typography, { variant: "h4" }, "Responsibilities")),
                    mentoringResponsibilities.map((data) => {
                        return (React.createElement(Grid, { item: true, xs: 12, sm: 4, key: data },
                            React.createElement(Typography, { variant: "body1" }, data)));
                    }))))));
}
export default CV;
//# sourceMappingURL=index.js.map