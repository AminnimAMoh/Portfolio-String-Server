"use strict";
exports.id = "txsrc_views_Pages_UI_index_tsx";
exports.ids = ["txsrc_views_Pages_UI_index_tsx"];
exports.modules = {

/***/ "./txsrc/views/Pages/UI/index.tsx":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/UI/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/Link/Link.js");





const YouTubeEmbed = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => __webpack_require__.e(/*! import() */ "txsrc_views_Pages_YouTubeEmbed_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../YouTubeEmbed */ "./txsrc/views/Pages/YouTubeEmbed/index.tsx")));
function UI() {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const preventDefault = event => event.preventDefault();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    container: true,
    justify: "space-between",
    alignContent: "flex-start",
    className: classes.topic_grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topick_heading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "Figting misinformation through social media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h4"
  }, "Collaboration Team:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "Developer and Video: Mohammad Amin Mohammadi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "UX/UI Designer and documentation: Jessica Owens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "https://covid-19-measures-assessment.web.app/",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5",
    className: classes.link_ToExternals
  }, "Link to our high-fidelity prototype")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "Assets/UI/A3 Final Report.pdf",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5",
    className: classes.link_ToExternals
  }, "Link to full report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topic_pragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "In our current state misinformation is frequently shared and whether this is intentional or inadvertent it can have catastrophic results on the spread of COVID-19. Maximising public access to balanced, reliable, and up to date information is a critical success factor for authorities worldwide. Management of highly trusted information will have a vital role to play in the control of COVID-19. The COVID-19 Fact Check app has been built to facilitate an effective means of sharing information going forward. The application is an informal educational tool, which encourages users to become aware of the false or misleading information that they may find themselves coming across when partaking in online activity. It\u2019s a gamified fun fact-based tool which will help the world #StopTheSpread.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(YouTubeEmbed, {
    embedID: "aQ017METpTU"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "React.js")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "Currently our planet is at a critical point of animal extinction and bidovirsty loss. To aid in combatting this loss we have designed the Atmoscube. Through research conducted at the beginning of the design process we\u2019ve identified that people often feel unempowered in their ability to help the environment. To solve this problem, we have aimed to create an experience that informs and engages the user in an effort to educate and empower. Empowerment provided by interacting with the atomscube is designed to permeate throughout the users daily life, providing them with a platform to continue with environmentally positive life choices."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "React Hooks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "useState"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "\"useState\" is a React hook function that allows us to change the state of the function components if required. React hook functions are well design to secure the function component from possible errors in the code as well as stabilizing the connection between components between classes.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "useEffect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "\"useEffect\" function is another React hook that allows us to read from our API data base only on specified circumstances. \"useEffect\" helps us to minimize the tokens on our API and reduces the load on the API server. In this application, we mainly use the \"useEffect\" hook to read and write on our API database with a minimum number of tokens for each request to maintain the API service."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "React-Router")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "useHistory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "\"useHistory\" is a hook function from React Router Core npm to trigger the Link function in a class function rather than the render function. \"useHistory\" in this application allows us to route between pages using different states of function components in conditions. In this application, this condition listens to the direction of the user's swipe.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "Switch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "\"Switch\" is unique in that it renders a route exclusively. In contrast, every \"Route\" that matches the location renders inclusively.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "Route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "\"Route\" most basic responsibility is to render some UI when its path matches the current URL passed as the path. \"Route\" also sets the props required for the routing component and on each request to the path it makes the hook between the sender and receiver component.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "\"Link\" allows us to navigate to specified path component/page in HTML format (render function) and transferring object properties as props. In this application, we have used \"Link\" on our buttons triggering routes to other pages and transferring the props to the function component."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "Google Firebase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "Firebase is Google's free cloud storage that handles many aspects of backend functionality. For this project, this service allows reservation of questions and users results in a form of API data sources as well as deploying the platform.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 4,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "Data set One"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "One firebase data document is used to reserve the questions in. This allows for easy updates of the questions.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 4,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "Data set Two"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "The second data document collects the users\u2019 final results as well as their postcode. After a user is done the result and postcode of the question will be saved on this repository in the form of an array of objects. This information instantly will be downloaded from the API to draw the graph in the next page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 4,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "Build and Publish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "Thirdly, Google Firebase helps build and deploy the application on its servers from React.js. Google fiFirebase provides this service for free in addition to all other mentioned services."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h3"
  }, "Tinder Swipe for React Library")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "This is a pre-build swipe listener library that provides a very smooth swipe animation to given elements. Using this library on questions card as clear user feedback on their swipe actions. This library also allows the application to count the correct answers as well as the total number of questions answered. Using the \u201DonSwipe\u201D listener built-in on this library we can monitor the direction the swipe user makes for each question.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "React Router"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "React router library: this library allows the application to easily move between pages. This library allows for multiple pages in the application. Separating actions and information in different pages improves the flow of the application. A benefit of this separation is the minimisation of the amount of information users have to process at a time.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "h5"
  }, "D3.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    variant: "body1"
  }, "D3.js: this JavaScript library is a very powerful tool to bring the data to life with interactive graphs as well as manipulating DOM elements. Using the data restored in Firebase cloud service shows an overview of the average score for each suburb using postcodes from user inputs. This leaderboard also graph shows the total number of participants from each suburb to explain the differences more clearly.")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(UI));

/***/ })

};
;
//# sourceMappingURL=txsrc_views_Pages_UI_index_tsx.js.map