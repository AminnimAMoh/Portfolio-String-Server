"use strict";
(self["webpackChunkmamp_frontend"] = self["webpackChunkmamp_frontend"] || []).push([["txsrc_views_Pages_UX_index_tsx"],{

/***/ "./txsrc/views/Pages/UX/index.tsx":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/UX/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/Grid/Grid.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/Typography/Typography.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/Link/Link.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "../node_modules/.pnpm/react-redux@7.2.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-redux/es/index.js");






const YouTubeEmbed = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => __webpack_require__.e(/*! import() */ "txsrc_views_Pages_YouTubeEmbed_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ../YouTubeEmbed */ "./txsrc/views/Pages/YouTubeEmbed/index.tsx")));
function UX() {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    screenAction: {
      gridRowToReverce,
      gridRowToColumn
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state);
  const preventDefault = event => event.preventDefault();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true
    // spacing={4}
    ,
    justify: "space-between",
    alignContent: "flex-start",
    className: classes.topic_grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topick_heading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h3"
  }, "User Experience Case Studies. Environmental Conservation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h4"
  }, "Collaboration Team:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "User Journey Map & Documentation: Mohammad Amin Mohammadi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "User Testings & Video: Brendan O'Reilly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "Synthesizing Activity Design: Elliott Magrath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "images/Pages/UX/Visual-Report.pdf",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5",
    className: classes.link_ToExternals
  }, "Link to full report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topic_pragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "Technology has played a significant role in increasing the world population dramatically. Consequently it has increased the level of the complexity of problems. However, user research methods developed around design frameworks can be a powerful tool to face these complex wicked problems. since the day I was introduced to the digital world, I have always been looking and thinking beyond the applications and platforms I have used. The temptation to find reliable solutions to build a better future for both humanity and the environment we live at.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(YouTubeEmbed, {
    embedID: "AikAa-n8vq8"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    container: true,
    direction: gridRowToReverce,
    spacing: 4,
    justify: "center",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "Currently our planet is at a critical point of animal extinction and bidovirsty loss. To aid in combatting this loss we have designed the Atmoscube. Through research conducted at the beginning of the design process we\u2019ve identified that people often feel unempowered in their ability to help the environment. To solve this problem, we have aimed to create an experience that informs and engages the user in an effort to educate and empower. Empowerment provided by interacting with the atomscube is designed to permeate throughout the users daily life, providing them with a platform to continue with environmentally positive life choices.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Knowledge As a tool to conserve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h3"
  }, "Environment and Biodiversity"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    container: true,
    direction: gridRowToColumn,
    spacing: 4,
    justify: "center",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "What is the strategy?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h3"
  }, "Design Solution")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "Our design Solution is the Atmoscube, a cube roughly 450mm in width, height and depth. Within this hologram cube we are propose a city build game. The top of the product houses a touch and distance sensitive interface that along with AI voice operated system will be the way in which the user engages with the product. Within the product will be a small AR city projected from the base, this AR city will be built and managed by the user."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "images/Pages/UX/Render.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    container: true,
    direction: gridRowToReverce,
    spacing: 4,
    justify: "center",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "The design process was guided by the aim of empowering people through education in an effort to aid against biodiversity loss and animal extinction."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "Stage one of the design process involved conducting research with finding key insights regarding the problem space in mind."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "Stage two of the process involved studying the research gathered, finding explicit and intrinsic insights into solutions for the problem space."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "Stage Three involved each design member submitting two idea and subsequent storyboards that aided the problem space and successfully met design criteria."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "body1"
  }, "Stage Four involved each design team members idea being inputted into a design matrix created to highlight the best design and what was most suited to the tasks needs.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Trial and Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h3"
  }, "Design Process"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "images/Pages/UX/Render-2.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    container: true,
    spacing: 4,
    direction: gridRowToReverce,
    justify: "center",
    alignItems: "center",
    className: classes.inner_GridContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, "To use the Atmoscube the user must connect it to its home and vehicles IoT (Internet of things), the data received from the users amenities will be the core of the users experience within atmoscube, the electricity, water and Co2 used by the user within their real daily lives will have a direct effect to their experience within the product. An example of this is smog within the user\u2019s city from high Co2 emissions or Electricity use in real life."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "images/Pages/UX/Render-3.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    container: true,
    spacing: 4,
    direction: gridRowToColumn,
    justify: "center",
    alignItems: "center",
    className: classes.inner_GridContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "images/Pages/UX/Render-4.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, "To accompany these mechanics is the systems AI, with the gathered data from the users IoT the AI will learn the user\u2019s habits, lifestyle and how they could lower their impact on the environment. These improvements will be set to the user as challenges, these challenges were designed with gamification in mind, engaging the user and investing them in the experience as a whole."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    container: true,
    spacing: 4,
    xs: 12,
    style: {
      paddingTop: "160px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h5"
  }, "Design Communicatin Tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
    variant: "h3"
  }, "User Journy Map")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    item: true,
    xs: 12,
    style: {
      paddingTop: "12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg",
    alt: "content"
  }))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(UX));

/***/ })

}]);
//# sourceMappingURL=txsrc_views_Pages_UX_index_tsx.js.map