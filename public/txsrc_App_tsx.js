"use strict";
(self["webpackChunkandramedian_design"] = self["webpackChunkandramedian_design"] || []).push([["txsrc_App_tsx"],{

/***/ "./txsrc/App.tsx":
/*!***********************!*\
  !*** ./txsrc/App.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AppStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppStyle */ "./txsrc/AppStyle.tsx");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/es/Snackbar/Snackbar.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/es/Slide/Slide.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_slices_ScreenSettingsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/slices/ScreenSettingsSlice */ "./txsrc/redux/slices/ScreenSettingsSlice.tsx");
/* harmony import */ var _redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/slices/fetchSlice */ "./txsrc/redux/slices/fetchSlice.tsx");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/es/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _views_MenuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/MenuButton */ "./txsrc/views/MenuButton/index.tsx");
/* harmony import */ var _views_ContentContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/ContentContainer */ "./txsrc/views/ContentContainer/index.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//This is the 'majula'. Dark Souls fans are familiar with this place. 😅
//Here we managing the main states.



 //Importing the redux store type.







const DataFetchPending = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => __webpack_require__.e(/*! import() */ "txsrc_views_DataFetchPending_index_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./views/DataFetchPending */ "./txsrc/views/DataFetchPending/index.tsx"))); //An easy way to apply transitions to Material-UI components.
//Pre writen transition from Material-UI.
//I could write it my self, just to show off some gadgeta. 😉

function TransitionUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_7__.default, _extends({}, props, {
    direction: "up"
  }));
}

function App() {
  // console.clear();
  const [svgSetupTrigger, setSVGSetupTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [snackState, setSnackState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const windowState = (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__.default)("(max-width:1280px)");
  const {
    buttonAction: {
      rootState,
      buttonTrigered
    },
    dataStore: {
      annualrain,
      slums,
      population,
      months
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state);
  const classes = (0,_AppStyle__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (windowState) {
      dispatch((0,_redux_slices_ScreenSettingsSlice__WEBPACK_IMPORTED_MODULE_3__.rowGridToggleToReverce)(window.innerWidth));
    }
  }, [windowState]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    annualrain.state === "fulfilled" && slums.state === "fulfilled" && population.state === "fulfilled" && months.state === "fulfilled" && setSVGSetupTrigger(true);
    (annualrain.state === "rejected" || slums.state === "rejected" || population.state === "rejected" || months.state === "rejected") && setSnackState(true);
  }, [annualrain.state, slums.state, population.state, months.state]); //This function controles click action on the snack bar.

  const snackBarRefreshAction = () => {
    //First we set the 'refresh state of the 'fetchSlice' action to trigger the fetch
    //action on the asyncThunk function with state 'rejected'.
    //In this case only the rejected API will be called, not the rest. 🤯
    //More detail at 'fetchSlice.tsx'.
    dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_4__.readDataAgain)()); //Close the snack bar.

    setSnackState(false);
  };

  console.log("development");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: rootState ? `${classes.root} open` : `${classes.root} close`
  }, !svgSetupTrigger && buttonTrigered === "D3" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DataFetchPending, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_9__.default, {
    open: snackState,
    TransitionComponent: TransitionUp,
    message: `Failed to fetch data. Click here to try again.`,
    onClick: snackBarRefreshAction,
    classes: {
      root: classes.snackbar
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_views_MenuButton__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_views_ContentContainer__WEBPACK_IMPORTED_MODULE_6__.default, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./txsrc/AppStyle.tsx":
/*!****************************!*\
  !*** ./txsrc/AppStyle.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/es/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/es/styles/createStyles.js");

const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.default)(theme => (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.default)({
  root: {
    height: "100vh",
    display: "flex",
    flexFlow: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexFlow: "column"
    },
    "&.open": {
      paddingRight: theme.spacing(20),
      [theme.breakpoints.down("md")]: {
        paddingRight: theme.spacing(0)
      }
    },
    "&.close": {
      paddingRight: 0
    }
  },
  landinginfo: {
    position: "absolute"
  },
  Splash: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: theme.spacing(6),
    color: "white"
  },
  loading: {
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 1
  },
  snackbar: {
    cursor: 'pointer',
    // background: 'red',
    '& >*': {
      background: '#9c3c41'
    }
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyle);

/***/ }),

/***/ "./txsrc/views/ContentContainer/index.tsx":
/*!************************************************!*\
  !*** ./txsrc/views/ContentContainer/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./txsrc/views/ContentContainer/style.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Pages_Undeveloped__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/Undeveloped */ "./txsrc/views/Pages/Undeveloped/index.tsx");



// import UX from "../Pages/UX";
// import UI from "../Pages/UI";
// import CV from "../Pages/CV";
const UX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_es_Grid_Grid_js-node_modules_material-ui_core_es_Link_Link_js"), __webpack_require__.e("txsrc_views_Pages_UX_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/UX */ "./txsrc/views/Pages/UX/index.tsx")));
const UI = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_es_Grid_Grid_js-node_modules_material-ui_core_es_Link_Link_js"), __webpack_require__.e("txsrc_views_Pages_UI_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/UI */ "./txsrc/views/Pages/UI/index.tsx")));
const CV = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_material-ui_core_es_Grid_Grid_js-node_modules_material-ui_core_es_Link_Link_js"), __webpack_require__.e("txsrc_views_Pages_CV_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/CV */ "./txsrc/views/Pages/CV/index.tsx")));
const D3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.lazy(() => Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_d3_src_index_js"), __webpack_require__.e("txsrc_views_Pages_D3_index_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../Pages/D3 */ "./txsrc/views/Pages/D3/index.tsx"))); // import D3 from "../Pages/D3";



function RenderObject(state) {
  switch (state.state) {
    case "UX":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UX, null);

    case "UI":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(UI, null);

    case "CV":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CV, null);

    case "D3":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(D3, null);

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Pages_Undeveloped__WEBPACK_IMPORTED_MODULE_3__.default, null);
  }
}

function ContentContainer() {
  const classes = (0,_style__WEBPACK_IMPORTED_MODULE_1__.default)();
  const rootDetails = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const scrollToTop = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const handleScroll = () => {
    rootDetails.current && scrollToTop.current && rootDetails.current.scrollTop > 800 ? scrollToTop.current.style.transform = window.innerWidth > 1280 ? "translateY(-15px) scale(1)" : "translateY(-75px) scale(1)" : scrollToTop.current && (scrollToTop.current.style.transform = window.innerWidth > 1280 ? "translateY(-15px) scale(0)" : "translateY(-75px) scale(1)");
  };

  const handleClick = () => {
    var _rootDetails$current;

    (_rootDetails$current = rootDetails.current) === null || _rootDetails$current === void 0 ? void 0 : _rootDetails$current.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const {
    buttonAction: {
      rootState,
      delayState,
      renderPage
    },
    screenAction: {
      screenState
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    onScroll: handleScroll,
    ref: rootDetails,
    className: rootState && screenState === "wide" ? `${classes.root} open` : rootState && screenState === "limited" ? `${classes.root} open_vertically` : !rootState && delayState && screenState === "wide" ? `${classes.root} close` : !rootState && delayState && screenState === "limited" ? `${classes.root} close_vertically` : screenState === "limited" ? `${classes.root} close_vertically` : classes.root,
    style: rootState && !delayState && screenState === "wide" ? {
      width: "100%"
    } : !rootState && delayState && screenState === "wide" ? {
      width: "0%"
    } : rootState && !delayState && screenState === "limited" ? {
      height: "100%"
    } : !rootState && delayState && screenState === "limited" ? {
      height: "0%"
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    ref: scrollToTop,
    className: classes.scrollToTop,
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "images/Containers/Content_Frame/Mobile.png",
    alt: "content",
    className: classes.MobileFrame
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(RenderObject, {
    state: renderPage
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentContainer);

/***/ }),

/***/ "./txsrc/views/ContentContainer/style.tsx":
/*!************************************************!*\
  !*** ./txsrc/views/ContentContainer/style.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/es/styles/makeStyles.js");

const mytheme = {
  radius: 80
};
const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.default)(theme => ({
  root: {
    width: "100%",
    height: "100%",
    opacity: 1,
    transform: "translateX(-150%)",
    transition: "transform 1s ease-in-out .5s, width .5s ease, height .5s ease, padding .5s ease, opacity .5s ease .5s",
    overflowX: "hidden",
    overflowY: "auto",
    direction: "rtl",
    backgroundImage: "url(images/Containers/Content_Frame/Page-Frame-Light-Wave.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "right",
    padding: theme.spacing(12, 41, 12, 6),
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(12, 40, 0, 6)
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: "none",
      padding: theme.spacing(0, 6, 12)
    },
    "&.open": {
      transform: "translateX(0%)"
    },
    "&.open_vertically": {
      transform: "translateY(0%)"
    },
    "&.close_vertically": {
      transform: "translate(0%, 100%)",
      padding: 0,
      opacity: 0
    },
    "&.close": {
      padding: 0,
      opacity: 0
    }
  },
  MobileFrame: {
    display: "none",
    position: "sticky",
    height: "auto",
    top: "-5px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  },
  scrollToTop: {
    position: "sticky",
    top: "100%",
    right: "0%",
    transform: "translateY(-15px) scale(0)",
    width: mytheme.radius,
    height: mytheme.radius,
    borderRadius: "50%",
    cursor: "pointer",
    transition: "transform .5s ease-in-out",
    [theme.breakpoints.down('md')]: {
      transform: "translateY(-35px) scale(0)"
    },
    "& >div": {
      width: '100%',
      height: '100%',
      backgroundImage: "url(images/Button/ScrollToTop/Top.png)",
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      zIndex: 1,
      "&::before": {
        content: '""',
        display: "block",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#12393D",
        opacity: .8,
        borderRadius: "50%",
        width: mytheme.radius,
        height: mytheme.radius,
        filter: 'blur(15px)',
        zIndex: -2,
        transition: 'transform .5s ease-in-out, background-color 1s ease-in'
      },
      '&::after': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: '-1%',
        bottom: 0,
        left: 0,
        right: '-1%',
        width: '102%',
        height: '102%',
        background: 'linear-gradient(163deg, rgba(156,60,65,1) 0%, rgba(18,57,61,1) 100%)',
        borderRadius: '50%',
        zIndex: -1,
        transition: 'transform .5s ease-in-out .5s',
        '-webkit-transition': '-webkit-filter 500ms linear, -webkit-transform .5s ease-in-out .5s'
      }
    },
    '&:hover, &:focus': {
      '&>div::before': {
        transform: 'scale(1.5)',
        backgroundColor: "#9C3C41"
      },
      '&>div::after': {
        transform: 'scale(1.1)',
        filter: 'blur(1.5px)'
      }
    }
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyle);

/***/ }),

/***/ "./txsrc/views/MenuButton/index.tsx":
/*!******************************************!*\
  !*** ./txsrc/views/MenuButton/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./txsrc/views/MenuButton/style.tsx");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use-measure */ "./node_modules/react-use-measure/dist/web.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/buttonActionSlice */ "./txsrc/redux/slices/buttonActionSlice.tsx");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/es/useMediaQuery/useMediaQuery.js");







// import { Positions } from "./types";
// import { Typography } from "@material-ui/core";
const calPos = (index, length, size, state, windowState) => {
  if (windowState.rootState) {
    const inc = state ? 1.5 : 3;
    const rad = size / inc;
    const angle = 2 * Math.PI / length * index;
    const x = rad * Math.cos(angle);
    const y = rad * Math.sin(angle);
    return {
      x,
      y
    };
  } else {
    const phase = windowState.phase ? 8 : 20;
    const inc = state ? 3 : 30;
    const angle = (Math.PI * 2 / length + 2) * index;
    const rad = size / inc;
    const x = rad * 5 * Math.cos(angle) + 5 * (rad * Math.sin(angle)) - phase;
    const y = 0;
    return {
      x,
      y
    };
  }
};

function MenuButton() {
  const classes = (0,_style__WEBPACK_IMPORTED_MODULE_1__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  const windowState = {
    rootState: (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default)("(min-width:1280px)"),
    phase: (0,_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__.default)("(max-width:560px)")
  }; // const [showInfo, setShowInfo] = useState<boolean>(false);
  // const [buttonPositions, setButtonsPosition] = useState<Positions[]>([
  //   { x: 0, y: 0 },
  // ]);

  const parentElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    buttonAction: {
      rootState,
      delayState,
      data
    },
    screenAction: {
      screenState
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state);
  const [buttonMesures, {
    width
  }] = (0,react_use_measure__WEBPACK_IMPORTED_MODULE_5__.default)();
  const [powerState, setPowerState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const buttonSizing = width; // useEffect(() => {
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
    var _parentElement$curren, _parentElement$curren2;

    const parentChilrdernLength = (_parentElement$curren = parentElement.current) === null || _parentElement$curren === void 0 ? void 0 : _parentElement$curren.childElementCount;
    const prentArray = (_parentElement$curren2 = parentElement.current) === null || _parentElement$curren2 === void 0 ? void 0 : _parentElement$curren2.children;

    if (parentChilrdernLength && prentArray) {
      for (let i = 1; i < parentChilrdernLength; i++) {
        prentArray[i].children[0].classList.remove("focused");
      }
    }

    if (rootState) {
      dispatch((0,_redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_3__.containerStateToggle)("PowerButton"));
      setTimeout(() => {
        dispatch((0,_redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_3__.onDelayStateChange)());
      }, 500);
    } else {
      setPowerState(() => !powerState);
    }
  };

  const handleClick = e => {
    var _parentElement$curren3, _parentElement$curren4;

    const payload = e.currentTarget.id;
    const parentChilrdernLength = (_parentElement$curren3 = parentElement.current) === null || _parentElement$curren3 === void 0 ? void 0 : _parentElement$curren3.childElementCount;
    const prentArray = (_parentElement$curren4 = parentElement.current) === null || _parentElement$curren4 === void 0 ? void 0 : _parentElement$curren4.children;

    if (parentChilrdernLength && prentArray) {
      for (let i = 1; i < parentChilrdernLength; i++) {
        prentArray[i].children[0].id === payload ? prentArray[i].children[0].classList.add("focused") : prentArray[i].children[0].classList.remove("focused");
      }
    }

    dispatch((0,_redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_3__.containerStateToggle)(payload));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root,
    ref: parentElement,
    style: screenState === "wide" && !rootState && !delayState ? {
      paddingRight: 0
    } : screenState === "limited" && !rootState ? {
      paddingTop: 0
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: powerState ? `${classes.powerButton} open` : `${classes.powerButton} close`,
    onClick: handlePowerClick // onMouseOver={() => setShowInfo(true)}
    // onMouseOut={() => setShowInfo(false)}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    ref: buttonMesures,
    src: "images/Button/Menu_Trigger/Power_Button-Stoke.png",
    alt: "content-asset"
  })), data.map(({
    name,
    img,
    toolKit,
    info
  }, index) => {
    const {
      x,
      y
    } = calPos(index, data.length, buttonSizing, powerState, windowState);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: name,
      className: classes.buttonContainers,
      style: {
        transform: `translate(${x}px, ${y}px)`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      id: name,
      className: classes.iconButtons,
      style: {
        width: buttonSizing / 4,
        height: buttonSizing / 4,
        backgroundImage: `url(${img})`
      },
      onClick: e => handleClick(e)
    }));
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuButton);

/***/ }),

/***/ "./txsrc/views/MenuButton/style.tsx":
/*!******************************************!*\
  !*** ./txsrc/views/MenuButton/style.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/es/styles/makeStyles.js");

const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.default)(theme => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "20%",
    zIndex: 1,
    transition: "transform 1s ease-in",
    [theme.breakpoints.down("md")]: {
      width: "100%",
      height: "20%",
      paddingTop: theme.spacing(15)
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: theme.spacing(7)
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(1)
    }
  },
  powerButton: {
    cursor: "pointer",
    zIndex: 2,
    position: "relative",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "18%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "25%"
    },
    "&>img": {
      width: "100%" // minWidth: "30%",

    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      zIndex: -1,
      top: "10%",
      bottom: 0,
      left: "10%",
      right: 0,
      width: "80%",
      height: "80%",
      borderRadius: "50%",
      opacity: 1,
      filter: "blur(10px)",
      transition: "background-color 1s cubic-bezier(0, 1.51, 0.12, -0.29), -webkit-filter 2000ms cubic-bezier(0, 1.51, 0.12, -0.29)"
    },
    "&.open": {
      "&::before": {
        filter: "blur(15px)",
        transform: "scale(1.05)",
        backgroundColor: "#12393D"
      }
    },
    "&.close": {
      "&::before": {
        filter: "blur(5px)",
        backgroundColor: "#E4E5E7"
      }
    }
  },
  menuButtons: {
    position: "absolute"
  },
  buttonContainers: {
    position: "absolute",
    transition: "transform 1s ease-in-out"
  },
  iconButtons: {
    position: "relative",
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
    cursor: "pointer",
    "&:hover, &:focus": {
      "&::after": {
        transform: "rotate(180deg) scale(1.1)",
        filter: "blur(3px)"
      },
      "&::before": {
        transform: "scale(1.2)",
        background: "rgba(18,57,61,.2)"
      }
    },
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "0",
      right: 0,
      bottom: 0,
      left: "0",
      zIndex: -1,
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      transform: "scale(1.05)",
      background: "linear-gradient(155deg, rgba(122,145,147,1) 0%, rgba(6,22,33,1) 100%)",
      transition: "transform .5s ease-in, filter 500ms linear",
      "-webkit-transition": "-webkit-filter 500ms linear, -webkit-transform .5s ease-in"
    },
    "&::before": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "-1px",
      right: 0,
      bottom: 0,
      left: "-1px",
      zIndex: -2,
      borderRadius: "inherit",
      background: "rgba(0,0,0,.5)",
      filter: "blur(12px)",
      transition: "transform .2s ease-in-out"
    },
    "&.focused": {
      "&::before": {
        transform: "scale(1.2)",
        filter: "blur(12px)",
        background: "rgba(18,57,61,1)"
      }
    }
  },
  textOnPath: {
    position: "absolute",
    "&>path": {
      transform: "translate(-693.7247px, -269.9313px)" // fill: 'transparent',

    },
    "&>text": {
      fill: "white"
    }
  },
  introTexts_container: {
    position: "absolute",
    width: "max-content",
    transform: "translate(0, -50%)",
    top: "50%",
    left: "100%",
    paddingLeft: theme.spacing(2),
    zIndex: -3
  },
  introTexts_text: {
    position: "relative",
    zIndex: 0,
    display: 'block',
    color: '#e4e5e7',
    padding: theme.spacing(1, 1, 1, 2),
    "&::before": {
      content: '""',
      display: "block",
      // backgroundColor: "#e4e5e7",
      position: "absolute",
      top: 0,
      bottom: 0,
      left: "-40%",
      right: 0,
      zIndex: -3,
      borderRadius: '6px'
    },
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: "#061621",
      position: "absolute",
      transform: "scale(1.1)",
      top: 0,
      bottom: 0,
      left: "-30%",
      right: 0,
      zIndex: 1,
      transition: 'width 1s ease-in-out 1.1s, transform 1s ease-in-out'
    },
    "&.open": {
      "&::after": {
        width: 0,
        transform: 'translateX(100%) scale(1.1)'
      }
    },
    "&.close": {
      "&::after": {
        width: '130%',
        transform: 'translateX(0) scale(1.1)'
      }
    }
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyle);

/***/ }),

/***/ "./txsrc/views/Pages/Undeveloped/index.tsx":
/*!*************************************************!*\
  !*** ./txsrc/views/Pages/Undeveloped/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/es/Typography/Typography.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");




function Undeveloped() {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__.default, {
    variant: "h3",
    className: classes.topick_heading
  }, "This page is temporary unavailable."));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Undeveloped);

/***/ }),

/***/ "./txsrc/views/Pages/styles.tsx":
/*!**************************************!*\
  !*** ./txsrc/views/Pages/styles.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/es/styles/makeStyles.js");

const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.default)(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexFlow: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 1s ease-in",
    marginLeft: 0,
    marginRight: "auto",
    direction: "ltr"
  },
  topic_grid: {
    color: "white",
    '& > .MuiGrid-item img': {
      width: '100%'
    },
    '&>*': {
      padding: theme.spacing(4)
    },
    '&>*:nth-child(n+4)': {
      paddingTop: theme.spacing(20)
    }
  },
  topick_heading: {
    color: "white",
    "& >*:not(:first-child)": {
      paddingTop: "8px"
    }
  },
  onlineLink: {},
  link_ToExternals: {
    color: "#5C3B42"
  },
  inner_GridContainer: {
    '& > *': {
      paddingTop: theme.spacing(10)
    }
  },
  topic_pragraph: {},
  video_container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    zIndex: -1
  },
  video_root: {
    width: '100%',
    position: 'relative'
  },
  video_responsive: {
    overflow: 'hidden',

    /* 16:9*/
    position: 'relative',
    width: '100%'
  },
  divider: {
    backgroundColor: 'white !important'
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyle);

/***/ })

}]);
//# sourceMappingURL=txsrc_App_tsx.js.map