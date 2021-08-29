import React from "react";
import useStyle from "../styles";
import { Grid, Typography, Link } from "@material-ui/core";
import YouTubeEmbed from "../YouTubeEmbed";
import { useSelector } from "react-redux";
function UX() {
    const classes = useStyle();
    const { screenAction: { gridRowToReverce, gridRowToColumn }, } = useSelector((state) => state);
    const preventDefault = (event) => event.preventDefault();
    return (React.createElement("div", { className: classes.root },
        React.createElement(Grid, { container: true, 
            // spacing={4}
            justify: "space-between", alignContent: "flex-start", className: classes.topic_grid },
            React.createElement(Grid, { item: true, lg: 6, md: 12, className: classes.topick_heading },
                React.createElement(Typography, { variant: "h3" }, "User Experience Case Studies. Environmental Conservation."),
                React.createElement(Typography, { variant: "h4" }, "Collaboration Team:"),
                React.createElement(Typography, { variant: "body2", style: { fontSize: "12px", color: "#426164" } }, "User Journey Map & Documentation: Mohammad Amin Mohammadi"),
                React.createElement(Typography, { variant: "body2", style: { fontSize: "12px", color: "#426164" } }, "User Testings & Video: Brendan O'Reilly"),
                React.createElement(Typography, { variant: "body2", style: { fontSize: "12px", color: "#426164" } }, "Synthesizing Activity Design: Elliott Magrath"),
                React.createElement(Link, { href: "images/Pages/UX/Visual-Report.pdf", className: classes.onlineLink, style: { bottom: "0px" }, onClick: (e) => preventDefault },
                    React.createElement(Typography, { variant: "h5", className: classes.link_ToExternals }, "Link to full report"))),
            React.createElement(Grid, { item: true, lg: 6, md: 12, className: classes.topic_pragraph },
                React.createElement(Typography, { variant: "body1" }, "Technology has played a significant role in increasing the world population dramatically. Consequently it has increased the level of the complexity of problems. However, user research methods developed around design frameworks can be a powerful tool to face these complex wicked problems. since the day I was introduced to the digital world, I have always been looking and thinking beyond the applications and platforms I have used. The temptation to find reliable solutions to build a better future for both humanity and the environment we live at.")),
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement(YouTubeEmbed, { embedID: "AikAa-n8vq8" })),
            React.createElement(Grid, { item: true, container: true, direction: gridRowToReverce, spacing: 4, justify: "center", alignItems: "flex-start" },
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement(Typography, { variant: "body1" }, "Currently our planet is at a critical point of animal extinction and bidovirsty loss. To aid in combatting this loss we have designed the Atmoscube. Through research conducted at the beginning of the design process we\u2019ve identified that people often feel unempowered in their ability to help the environment. To solve this problem, we have aimed to create an experience that informs and engages the user in an effort to educate and empower. Empowerment provided by interacting with the atomscube is designed to permeate throughout the users daily life, providing them with a platform to continue with environmentally positive life choices.")),
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement(Typography, { variant: "h5" }, "Knowledge As a tool to conserve"),
                    React.createElement(Typography, { variant: "h3" }, "Environment and Biodiversity"))),
            React.createElement(Grid, { item: true, container: true, direction: gridRowToColumn, spacing: 4, justify: "center", alignItems: "flex-start" },
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement(Typography, { variant: "h5" }, "What is the strategy?"),
                    React.createElement(Typography, { variant: "h3" }, "Design Solution")),
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement(Typography, { variant: "body1" }, "Our design Solution is the Atmoscube, a cube roughly 450mm in width, height and depth. Within this hologram cube we are propose a city build game. The top of the product houses a touch and distance sensitive interface that along with AI voice operated system will be the way in which the user engages with the product. Within the product will be a small AR city projected from the base, this AR city will be built and managed by the user."))),
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement("img", { src: "images/Pages/UX/Render.png", alt: "content" })),
            React.createElement(Grid, { item: true, container: true, direction: gridRowToReverce, spacing: 4, justify: "center", alignItems: "flex-start" },
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement(Typography, { variant: "body1" }, "The design process was guided by the aim of empowering people through education in an effort to aid against biodiversity loss and animal extinction."),
                    React.createElement("br", null),
                    React.createElement(Typography, { variant: "body1" }, "Stage one of the design process involved conducting research with finding key insights regarding the problem space in mind."),
                    React.createElement("br", null),
                    React.createElement(Typography, { variant: "body1" }, "Stage two of the process involved studying the research gathered, finding explicit and intrinsic insights into solutions for the problem space."),
                    React.createElement("br", null),
                    React.createElement(Typography, { variant: "body1" }, "Stage Three involved each design member submitting two idea and subsequent storyboards that aided the problem space and successfully met design criteria."),
                    React.createElement("br", null),
                    React.createElement(Typography, { variant: "body1" }, "Stage Four involved each design team members idea being inputted into a design matrix created to highlight the best design and what was most suited to the tasks needs.")),
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement(Typography, { variant: "h5" }, "Trial and Error"),
                    React.createElement(Typography, { variant: "h3" }, "Design Process"))),
            React.createElement(Grid, { item: true, xs: 12 },
                React.createElement("img", { src: "images/Pages/UX/Render-2.png", alt: "content" })),
            React.createElement(Grid, { item: true, container: true, spacing: 4, direction: gridRowToReverce, justify: "center", alignItems: "center", className: classes.inner_GridContainer },
                React.createElement(Grid, { item: true, lg: 6, md: 12 }, "To use the Atmoscube the user must connect it to its home and vehicles IoT (Internet of things), the data received from the users amenities will be the core of the users experience within atmoscube, the electricity, water and Co2 used by the user within their real daily lives will have a direct effect to their experience within the product. An example of this is smog within the user\u2019s city from high Co2 emissions or Electricity use in real life."),
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement("img", { src: "images/Pages/UX/Render-3.png", alt: "content" })),
                React.createElement(Grid, { item: true, container: true, spacing: 4, direction: gridRowToColumn, justify: "center", alignItems: "center", className: classes.inner_GridContainer },
                    React.createElement(Grid, { item: true, lg: 6, md: 12 },
                        React.createElement("img", { src: "images/Pages/UX/Render-4.png", alt: "content" })),
                    React.createElement(Grid, { item: true, lg: 6, md: 12 }, "To accompany these mechanics is the systems AI, with the gathered data from the users IoT the AI will learn the user\u2019s habits, lifestyle and how they could lower their impact on the environment. These improvements will be set to the user as challenges, these challenges were designed with gamification in mind, engaging the user and investing them in the experience as a whole."))),
            React.createElement(Grid, { item: true, container: true, spacing: 4, xs: 12, style: { paddingTop: "160px" } },
                React.createElement(Grid, { item: true, lg: 6, md: 12 },
                    React.createElement(Typography, { variant: "h5" }, "Design Communicatin Tool"),
                    React.createElement(Typography, { variant: "h3" }, "User Journy Map")),
                React.createElement(Grid, { item: true, xs: 12, style: { paddingTop: "12px" } },
                    React.createElement(Link, { href: "images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg", className: classes.onlineLink, style: { bottom: "0px" }, onClick: (e) => preventDefault },
                        React.createElement("img", { src: "images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg", alt: "content" })))))));
}
export default UX;
//# sourceMappingURL=index.js.map