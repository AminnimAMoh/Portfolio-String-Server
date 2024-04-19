import React, { memo } from "react";
import { containerStateToggle } from "@hooks/useRootInfo/redux/slices/buttonActionSlice";
import { useDispatch } from "react-redux";
import TitleLayout from "@components/IntroductionLayout/IntroductionLayout";

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
function CV(): React.ReactElement {
  const dispatch = useDispatch();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    linkName: string
  ) => {
    e.preventDefault();
    dispatch(containerStateToggle(linkName));
  };
  return (
    <div>
      <div
        justifyContent="space-between"
        alignContent="flex-start"
      >
        <TitleLayout
          rootTitle={{
            title: "Mohammad Amin Mohammadi",
            blurbs: ["React.js Developer", "Front-End Developer"],
            subtitle: {
              title: "Top Skills:",
              description:
                ["React.js, React-Redux, Redux ToolKit, React Hooks, React Functions,TypeScript, Axios, D3.js, JavaScript Vanilla, JSX, HTML,CSS, Material-UI."],
            },
          }}
          description={
            "I am graduated from the University of Sydney Bachelor of Design Computing that empowers me with knowledge and experience in User Experience Design and User Interaction Design alongside my speciality in React.js Front-End Development. After mastering skills in CSS, HTML, JavaScript, D3.js, P5.js, P3 Processing Java I fell in love with React.js and have developed several projects in React.js and TypeScripts. After puting my skills in to a real-world test I have mastered React Hooks, React-Redux, Redux ToolKir, TypeScript, Axios Interceptors, Restful API, and Authentication."
          }
        />
        <div
          xs={12}
          spacing={4}
          justifyContent="space-between"
          alignContent="flex-start"
        >
          <div item xs={12}>
            <Typography variant="h3">Education</Typography>
          </div>
          <div
            xs={12}
            spacing={4}
            justifyContent="space-between"
            alignContent="flex-start"
          >
            <div item xs={12} sm={6}>
              <Typography variant="h4">Bachelor of Design Computing</Typography>
              <Typography variant="body1">University of Sydney</Typography>
              <Typography variant="body1">Jul 2017 — Dec 2020</Typography>
            </div>
            <div item xs={12} sm={6}>
              <Typography variant="body1">
                Certified skills in User Experience Design, User Interaction
                Design, and Front-End Development. Mastering programming skills
                in React.js, React-Redux, Redux ToolKit, Axios, Material-UI,
                D3.js, JavaScript Vanilla, JSX, HTML & CSS.
              </Typography>
            </div>
            <div item xs={12}>
              <Typography variant="h4">Achivements</Typography>
            </div>
            <div item xs={12} sm={6}>
              <Typography variant="body1">
                University of Sydney hackathon Coding Fest 2020 Disaster
                Prevention Project Award.
              </Typography>
              <Link href="" onClick={(e) => handleLinkClick(e, "D3")}>
                Bangladesh Rainfall Visualization.
              </Link>
            </div>
            <div item xs={12} sm={6}>
              <Typography variant="body1">
                Fighting misinformation through social media around the Covid-19
                news.
              </Typography>
              <Link href="" onClick={(e) => handleLinkClick(e, "UI")}>
                Covid Fact Check App-Developed in React.js.
              </Link>
            </div>
          </div>
        </div>

        <div
          item
          container
          xs={12}
          spacing={4}
          justifyContent="space-between"
          alignContent="flex-start"
        >
          <div item xs={12}>
            <Typography variant="h3">Experience</Typography>
          </div>
          <div
            item
            container
            xs={12}
            spacing={4}
            justifyContent="space-between"
            alignContent="flex-start"
          >
            <div item xs={12} sm={6}>
              <Typography variant="h4" style={{ color: "#9C3C41" }}>
                Growth Developer
              </Typography>
              <Typography variant="body1">Deferit</Typography>
              <Typography variant="body1">Nov 2021 — Current</Typography>
            </div>

            <div item xs={12}>
              <Typography variant="h4">Achivements</Typography>
            </div>
            <div item xs={12} sm={6}>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Fine-tuned predictive model by applying cross-validation.
                Achieved high level of accuracy in predicting dates with highest
                probability of customer re-engagement.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Developed 3 CMS web templates that cut development time for
                creating user-facing product pages by more than 50%.
              </Typography>
              Designed and developed more than 10 Python scripts to create
              carefully selected focused groups for new features for web and
              mobile applications.
              <Typography style={{marginTop: "12px"}} variant="body1">
                Developed more than 20 Python scripts reporting on financial
                improvements resulting in cost reduction by optimizing payment
                collection attempts.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Developed more than 10 experimental front-end features for web
                applications and mobile applications.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Designed and developed reporting data structure for experimental
                features using Postgresql and Python scripts. Contributed ideas
                and suggestions in team meetings and delivered updates on
                deadlines, designs and enhancements.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Developed and send marketing emails to customers, resulting in
                bad-dept reduction and customers' re-engagement with services.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Reviewed code, debugged problems and corrected issues. Managed
                development milestones from initial steps through final
                delivery.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Developed unit test cases for testing and automation.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Participated in requirements gathering to solidify prerequisites
                and determine best technical solution to meet business needs.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Delivered performance-driven and user-centric websites that met
                all business requirements.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Analyzed existing software implementations to identify areas
                requiring improvement.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Adjusted design parameters to incorporate new features. Used
                Python, Pandas and SQL/No-SQL to develop and manage databases.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Used statistical methods to analyze data and generate useful
                business reports.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Participated in requirements meetings to understand business
                needs.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Tested data prediction algorithms based on historical data.
              </Typography>
              <Typography style={{marginTop: "12px"}} variant="body1">
                Identified, analyzed and interpreted trends or patterns in
                complex data sets.
              </Typography>
            </div>
          </div>
          <div
            item
            container
            xs={12}
            spacing={4}
            justifyContent="space-between"
            alignContent="flex-start"
          >
            <div item xs={12} sm={6}>
              <Typography variant="h4" style={{ color: "#9C3C41" }}>
                React Developer
              </Typography>
              <Typography variant="body1">Reesby</Typography>
              <Typography variant="body1">Mar 2021 — Sep 2021</Typography>
            </div>
            <div item xs={12} sm={6}>
              <Typography variant="body1">
                React Front-End Developer in Reesby. Leader of Front-End
                development team. Developed Reesby main project landing page
                using React, React-Redux, React-Spring and Material-UI.
              </Typography>
            </div>
            <div item xs={12}>
              <Typography variant="h4">Responsibilities</Typography>
            </div>
            {reesbyResponsibilities.map((data) => {
              return (
                <div item xs={12} sm={4} key={data}>
                  <Typography variant="body1">{data}</Typography>
                </div>
              );
            })}

            <div item xs={12}>
              <Typography variant="h4">Achivements</Typography>
            </div>
            <div item xs={12} sm={6}>
              <Typography variant="body1">
                Three times nominated as the team member of the CRM team for
                dedication and hard work resulted in great outcomes.
              </Typography>
            </div>
          </div>
          <div item xs={12}>
            <Divider variant="middle" className={classes.divider} />
          </div>

          <div
            item
            container
            xs={12}
            spacing={4}
            justifyContent="space-between"
            alignContent="flex-start"
          >
            <div item xs={12} sm={6}>
              <Typography variant="h4" style={{ color: "#9C3C41" }}>
                Freelance Front End Development
              </Typography>
              <Typography variant="body1">Freelance</Typography>
              <Typography variant="body1">2019 — Present</Typography>
            </div>
            <div item xs={12} sm={6}>
              <Typography variant="body1">
                Working from home on projects involve JavaScript programming and
                UI design.
              </Typography>
            </div>
            <div item xs={12}>
              <Typography variant="h4">Responsibilities</Typography>
            </div>
            {freeLanceResponsibilities.map((data) => {
              return (
                <div item xs={12} sm={4} key={data}>
                  <Typography variant="body1">{data}</Typography>
                </div>
              );
            })}
          </div>
          <div item xs={12}>
            <Divider variant="middle" className={classes.divider} />
          </div>
          <div
            item
            container
            xs={12}
            spacing={4}
            justifyContent="space-between"
            alignContent="flex-start"
          >
            <div item xs={12} sm={6}>
              <Typography variant="h4" style={{ color: "#9C3C41" }}>
                Mentoring Class Mates
              </Typography>
              <Typography variant="body1">University of Sydney</Typography>
              <Typography variant="body1">Feb 2019 — Dec 2019</Typography>
            </div>
            <div item xs={12} sm={6}>
              <Typography variant="body1">
                Mentoring classmates to learn HTML/CSS/JavaScripts and P5.js.
              </Typography>
            </div>
            <div item xs={12}>
              <Typography variant="h4">Responsibilities</Typography>
            </div>
            {mentoringResponsibilities.map((data) => {
              return (
                <div item xs={12} sm={4} key={data}>
                  <Typography variant="body1">{data}</Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CV);
