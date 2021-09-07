/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./txsrc/App.tsx":
/*!***********************!*\
  !*** ./txsrc/App.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AppStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppStyle */ "./txsrc/AppStyle.tsx");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slide */ "@material-ui/core/Slide");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_slices_ScreenSettingsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/slices/ScreenSettingsSlice */ "./txsrc/redux/slices/ScreenSettingsSlice.tsx");
/* harmony import */ var _redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./redux/slices/fetchSlice */ "./txsrc/redux/slices/fetchSlice.tsx");
/* harmony import */ var _views_DataFetchPending__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/DataFetchPending */ "./txsrc/views/DataFetchPending/index.tsx");
/* harmony import */ var _views_MenuButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/MenuButton */ "./txsrc/views/MenuButton/index.tsx");
/* harmony import */ var _views_ContentContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/ContentContainer */ "./txsrc/views/ContentContainer/index.tsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./txsrc/utils.tsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//This is the 'majula'. Dark Souls fans are familiar with this place. 😅
//Here we managing the main states.
 // import MenuButton from "./views/MenuButton";
// import ContentContainer from "./views/ContentContainer";
// import DataFetchPending from "./views/DataFetchPending";




 //Importing the redux store type.







 //An easy way to apply transitions to Material-UI components.
//Pre writen transition from Material-UI.
//I could write it my self, just to show off some gadgeta. 😉

function TransitionUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3___default()), _extends({}, props, {
    direction: "up"
  }));
}

function App() {
  // console.clear();
  const [svgSetupTrigger, setSVGSetupTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [snackState, setSnackState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
  const matches = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()('(min-width:600px)');
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
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(state => state);
  const classes = (0,_AppStyle__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log('Media query changed!!!!');
  }, [matches]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!_utils__WEBPACK_IMPORTED_MODULE_11__.isBrowser) {
      if (window.innerWidth < 1280) {
        dispatch((0,_redux_slices_ScreenSettingsSlice__WEBPACK_IMPORTED_MODULE_6__.rowGridToggleToReverce)(window.innerWidth));
      }
    }
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    annualrain.state === "fulfilled" && slums.state === "fulfilled" && population.state === "fulfilled" && months.state === "fulfilled" && setSVGSetupTrigger(true);
    (annualrain.state === "rejected" || slums.state === "rejected" || population.state === "rejected" || months.state === "rejected") && setSnackState(true);
  }, [annualrain.state, slums.state, population.state, months.state]); //This function controles click action on the snack bar.

  const snackBarRefreshAction = () => {
    //First we set the 'refresh state of the 'fetchSlice' action to trigger the fetch
    //action on the asyncThunk function with state 'rejected'.
    //In this case only the rejected API will be called, not the rest. 🤯
    //More detail at 'fetchSlice.tsx'.
    dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_7__.readDataAgain)()); //Close the snack bar.

    setSnackState(false);
  };

  console.log("App");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: rootState ? `${classes.root} open` : `${classes.root} close`
  }, !svgSetupTrigger && buttonTrigered === "D3" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.loading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_views_DataFetchPending__WEBPACK_IMPORTED_MODULE_8__.default, null), ";"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, `(min-width:600px) matches: ${matches}`), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_2___default()), {
    open: snackState,
    TransitionComponent: TransitionUp,
    message: `Failed to fetch data. Click here to try again.`,
    onClick: snackBarRefreshAction,
    classes: {
      root: classes.snackbar
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_views_MenuButton__WEBPACK_IMPORTED_MODULE_9__.default, null), ";", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_views_ContentContainer__WEBPACK_IMPORTED_MODULE_10__.default, null), ";");
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createStyles)({
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

/***/ "./txsrc/axiosInterceptor.tsx":
/*!************************************!*\
  !*** ./txsrc/axiosInterceptor.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const axiosInterception = () => {
  const baseURL = process.env.REACT_APP_BASE_DESTINATION;
  const headers = {
    "Content-Type": "application/json"
  };
  const axiosInterceptor = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL,
    timeout: 5000,
    headers
  });

  const onResponse = response => {
    return response;
  };

  const onResponseError = error => {
    return error;
  };

  axiosInterceptor.interceptors.response.use(onResponse, onResponseError);
  return axiosInterceptor;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (axiosInterception);

/***/ }),

/***/ "./txsrc/redux/slices/ScreenSettingsSlice.tsx":
/*!****************************************************!*\
  !*** ./txsrc/redux/slices/ScreenSettingsSlice.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rowGridToggleToReverce": () => (/* binding */ rowGridToggleToReverce),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  gridRowToReverce: 'row',
  gridRowToColumn: 'row',
  screenState: 'wide'
};
const windowSettingsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'ScreenSettings',
  initialState,
  reducers: {
    rowGridToggleToReverce(state, action) {
      state.gridRowToReverce = 'column-reverse';

      if (action.payload < 1280) {
        state.screenState = 'limited';
        state.gridRowToColumn = 'column';
      }
    }

  }
});
const {
  rowGridToggleToReverce
} = windowSettingsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (windowSettingsSlice.reducer);

/***/ }),

/***/ "./txsrc/redux/slices/buttonActionSlice.tsx":
/*!**************************************************!*\
  !*** ./txsrc/redux/slices/buttonActionSlice.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "containerStateToggle": () => (/* binding */ containerStateToggle),
/* harmony export */   "onDelayStateChange": () => (/* binding */ onDelayStateChange),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
 // import {Positions} from '../../views/MenuButton/types'

const initialState = {
  rootState: false,
  delayState: true,
  direction: true,
  buttonTrigered: "",
  renderPage: "",
  data: [{
    name: "D3",
    img: "images/Button/Menu_List/Map.png",
    toolKit: "D3.js Project",
    info: 'My Name is Amin a React.js Front End Dev',
    width: 200
  }, {
    name: "Info",
    img: "images/Button/Menu_List/info.png",
    toolKit: "Who am I",
    info: 'Thank you for your visit.!!!',
    width: 90
  }, {
    name: "CV",
    img: "images/Button/Menu_List/CV.png",
    toolKit: "Resume",
    info: '',
    // info: 'I am a React.js Front-End Developer',
    width: 90
  }, {
    name: "UX",
    img: "images/Button/Menu_List/UX.png",
    toolKit: "UX Design Case Study",
    // info: 'Following menu helps you to findout more about me!!!',
    info: '',
    width: 150
  }, {
    name: "UI",
    img: "images/Button/Menu_List/UI.png",
    toolKit: "React.js User Interaction",
    // info: 'Thanks.',
    info: '',
    width: 90
  }, {
    name: "CP",
    img: "images/Button/Menu_List/ColorPalette.png",
    toolKit: "P5.js Image to Color palette",
    info: 'Hello!!!',
    width: 150
  }]
};
const buttonActionSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "buttonAction",
  initialState,
  reducers: {
    containerStateToggle(state, action) {
      state.rootState = action.payload === "PowerButton" ? false : true;
      state.buttonTrigered = action.payload === "PowerButton" ? " " : action.payload;
      state.renderPage = action.payload === "PowerButton" ? " " : action.payload;
      state.delayState = false;
    },

    onDelayStateChange(state) {
      state.delayState = true;
    } // addButtonsPosition(state, {payload}: PayloadAction<Positions[]>){
    //   console.log(payload);
    // }


  }
});
const {
  containerStateToggle,
  onDelayStateChange
} = buttonActionSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buttonActionSlice.reducer);

/***/ }),

/***/ "./txsrc/redux/slices/fetchSlice.tsx":
/*!*******************************************!*\
  !*** ./txsrc/redux/slices/fetchSlice.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchAnnualrainData": () => (/* binding */ fetchAnnualrainData),
/* harmony export */   "fetchSlumsData": () => (/* binding */ fetchSlumsData),
/* harmony export */   "fetchPopulationData": () => (/* binding */ fetchPopulationData),
/* harmony export */   "fetchMonthData": () => (/* binding */ fetchMonthData),
/* harmony export */   "readDataAgain": () => (/* binding */ readDataAgain),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../axiosInterceptor */ "./txsrc/axiosInterceptor.tsx");
//All data fetching happens here.
//Stage 1 type introduction and initialState configuration.
//Stage 2 asyncThunk function to call the APIs through Axios Interceptor. No TOKEN CHECK 🤝
//Stage 3 Reducers.
//Stage 4 asyncThunk responses handling.


 //Setting a type check for properties in initialState object.
//This helps to prevent mutation on properties from different components.

//Configuring the main state for this slice.
const initialState = {
  refresh: false,
  errorState: false,
  annualrain: {
    data: [],
    state: "empty",
    error: ""
  },
  slums: {
    data: [],
    state: "empty",
    error: ""
  },
  population: {
    data: [],
    state: "empty",
    error: ""
  },
  months: {
    data: [],
    state: "empty",
    error: ""
  }
}; //AsyncThunk function to read 'annualrain' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.

const fetchAnnualrainData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)( //Name of the action to be monitored in Redux console.
"fetchData/AnnualRainData", //Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
async (_, {
  rejectWithValue
}) => {
  try {
    const response = await (0,_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__.default)().get("annualrain");
    return response.data.annualRain;
  } catch (err) {
    //Rejecting the action so we can change the state on error for each asyncThunk action.
    return rejectWithValue(err);
  }
}); //AsyncThunk function to read 'slums' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.

const fetchSlumsData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)( //Name of the action to be monitored in Redux console.
"fetchData/SlumsData", //Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
async (_, {
  rejectWithValue
}) => {
  try {
    const response = await (0,_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__.default)().get("slums");
    return response.data.slums;
  } catch (err) {
    //Rejecting the action so we can change the state on error for each asyncThunk action.
    return rejectWithValue(err);
  }
}); //AsyncThunk function to read 'population' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.

const fetchPopulationData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)( //Name of the action to be monitored in Redux console.
"fetchData/PopulationData", //Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
async (_, {
  rejectWithValue
}) => {
  try {
    const response = await (0,_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__.default)().get("population");
    return response.data.population;
  } catch (err) {
    //Rejecting the action so we can change the state on error for each asyncThunk action.
    return rejectWithValue(err);
  }
}); //AsyncThunk function to read 'months' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.

const fetchMonthData = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)( //Name of the action to be monitored in Redux console.
"fetchData/MonthsData", //Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
async (_, {
  rejectWithValue
}) => {
  try {
    const response = await (0,_axiosInterceptor__WEBPACK_IMPORTED_MODULE_1__.default)().get("months");
    return response.data.monthlyTotal;
  } catch (err) {
    //Rejecting the action so we can change the state on error for each asyncThunk action.
    return rejectWithValue(err);
  }
});
const FetchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "dataFetchSlice",
  initialState,
  reducers: {
    readDataAgain: state => {
      state.refresh = true;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAnnualrainData.pending, (state, action) => {
      return { ...state,
        refresh: false,
        annualrain: { ...state.annualrain,
          state: "pending"
        }
      };
    }).addCase(fetchAnnualrainData.fulfilled, (state, action) => {
      return { ...state,
        refresh: false,
        annualrain: { ...state.annualrain,
          data: action.payload,
          state: "fulfilled"
        }
      };
    }).addCase(fetchAnnualrainData.rejected, (state, action) => {
      return { ...state,
        refresh: false,
        annualrain: { ...state.annualrain,
          state: "rejected",
          error: action.payload
        },
        errorState: true
      };
    }).addCase(fetchSlumsData.pending, (state, action) => {
      return { ...state,
        refresh: false,
        slums: { ...state.slums,
          state: "pending"
        }
      };
    }).addCase(fetchSlumsData.fulfilled, (state, action) => {
      return { ...state,
        refresh: false,
        slums: { ...state.slums,
          data: action.payload,
          state: "fulfilled"
        }
      };
    }).addCase(fetchSlumsData.rejected, (state, action) => {
      return { ...state,
        refresh: false,
        slums: { ...state.slums,
          state: "rejected",
          error: action.payload
        },
        errorState: true
      };
    }).addCase(fetchPopulationData.pending, (state, action) => {
      return { ...state,
        refresh: false,
        population: { ...state.population,
          state: "pending",
          error: action.payload
        }
      };
    }).addCase(fetchPopulationData.fulfilled, (state, action) => {
      return { ...state,
        refresh: false,
        population: { ...state.population,
          data: action.payload,
          state: "fulfilled"
        }
      };
    }).addCase(fetchPopulationData.rejected, (state, action) => {
      return { ...state,
        refresh: false,
        population: { ...state.population,
          state: "rejected",
          error: action.payload
        },
        errorState: true
      };
    }).addCase(fetchMonthData.pending, (state, action) => {
      return { ...state,
        refresh: false,
        months: { ...state.months,
          state: "pending"
        }
      };
    }).addCase(fetchMonthData.fulfilled, (state, action) => {
      return { ...state,
        refresh: false,
        months: { ...state.months,
          data: action.payload,
          state: "fulfilled"
        }
      };
    }).addCase(fetchMonthData.rejected, (state, action) => {
      return { ...state,
        refresh: false,
        months: { ...state.months,
          state: "rejected",
          error: action.payload
        },
        errorState: true
      };
    });
  }
});
const {
  readDataAgain
} = FetchSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchSlice.reducer);

/***/ }),

/***/ "./txsrc/store.tsx":
/*!*************************!*\
  !*** ./txsrc/store.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAppDispatch": () => (/* binding */ useAppDispatch),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redux/slices/buttonActionSlice */ "./txsrc/redux/slices/buttonActionSlice.tsx");
/* harmony import */ var _redux_slices_ScreenSettingsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/slices/ScreenSettingsSlice */ "./txsrc/redux/slices/ScreenSettingsSlice.tsx");
/* harmony import */ var _redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/slices/fetchSlice */ "./txsrc/redux/slices/fetchSlice.tsx");





const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    buttonAction: _redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_2__.default,
    screenAction: _redux_slices_ScreenSettingsSlice__WEBPACK_IMPORTED_MODULE_3__.default,
    dataStore: _redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_4__.default
  }
});
const useAppDispatch = () => (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(); // Export a hook that can be reused to resolve types

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);

/***/ }),

/***/ "./txsrc/utils.tsx":
/*!*************************!*\
  !*** ./txsrc/utils.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser)
/* harmony export */ });
const isBrowser = () => typeof window !== "undefined";

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./txsrc/views/ContentContainer/style.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pages_UX__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/UX */ "./txsrc/views/Pages/UX/index.tsx");
/* harmony import */ var _Pages_UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Pages/UI */ "./txsrc/views/Pages/UI/index.tsx");
/* harmony import */ var _Pages_CV__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Pages/CV */ "./txsrc/views/Pages/CV/index.tsx");
/* harmony import */ var _Pages_Undeveloped__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Pages/Undeveloped */ "./txsrc/views/Pages/Undeveloped/index.tsx");





 // import D3 from "../Pages/D3";



function RenderObject(state) {
  switch (state.state) {
    case "UX":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_UX__WEBPACK_IMPORTED_MODULE_3__.default, null);

    case "UI":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_UI__WEBPACK_IMPORTED_MODULE_4__.default, null);

    case "CV":
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_CV__WEBPACK_IMPORTED_MODULE_5__.default, null);
    // case "D3":
    // return <D3 />;

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Pages_Undeveloped__WEBPACK_IMPORTED_MODULE_6__.default, null);
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    ref: scrollToTop,
    className: classes.scrollToTop,
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "images/Containers/Content_Frame/Mobile.png",
    alt: "content",
    className: classes.MobileFrame
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RenderObject, {
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const mytheme = {
  radius: 80
};
const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
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

/***/ "./txsrc/views/DataFetchPending/index.tsx":
/*!************************************************!*\
  !*** ./txsrc/views/DataFetchPending/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__);




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)({
  root: {
    width: "100%"
  },
  barRoot: {
    backgroundColor: '#061621'
  },
  bar: {
    backgroundColor: '#12393d'
  },
  barError: {
    backgroundColor: '#9c3c41'
  }
});

function DataPending() {
  const classes = useStyles();
  const {
    dataStore: {
      errorState
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "indeterminate",
    classes: !errorState ? {
      query: classes.barRoot,
      bar: classes.bar
    } : {
      query: classes.barRoot,
      bar: classes.barError
    }
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataPending);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./txsrc/views/MenuButton/style.tsx");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-measure */ "react-use-measure");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_measure__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/slices/buttonActionSlice */ "./txsrc/redux/slices/buttonActionSlice.tsx");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5__);







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
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  const windowState = {
    rootState: _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()("(min-width:1280px)"),
    phase: _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_5___default()("(max-width:560px)")
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
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state);
  const [buttonMesures, {
    width
  }] = react_use_measure__WEBPACK_IMPORTED_MODULE_2___default()();
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

    console.log("Hello");
    const parentChilrdernLength = (_parentElement$curren = parentElement.current) === null || _parentElement$curren === void 0 ? void 0 : _parentElement$curren.childElementCount;
    const prentArray = (_parentElement$curren2 = parentElement.current) === null || _parentElement$curren2 === void 0 ? void 0 : _parentElement$curren2.children;

    if (parentChilrdernLength && prentArray) {
      for (let i = 1; i < parentChilrdernLength; i++) {
        prentArray[i].children[0].classList.remove("focused");
      }
    }

    if (rootState) {
      dispatch((0,_redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_4__.containerStateToggle)("PowerButton"));
      setTimeout(() => {
        dispatch((0,_redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_4__.onDelayStateChange)());
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

    dispatch((0,_redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_4__.containerStateToggle)(payload));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root,
    ref: parentElement,
    style: screenState === "wide" && !rootState && !delayState ? {
      paddingRight: 0
    } : screenState === "limited" && !rootState ? {
      paddingTop: 0
    } : {}
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: powerState ? `${classes.powerButton} open` : `${classes.powerButton} close`,
    onClick: handlePowerClick // onMouseOver={() => setShowInfo(true)}
    // onMouseOut={() => setShowInfo(false)}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: name,
      className: classes.buttonContainers,
      style: {
        transform: `translate(${x}px, ${y}px)`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
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

/***/ "./txsrc/views/Pages/CV/index.tsx":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/CV/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/slices/buttonActionSlice */ "./txsrc/redux/slices/buttonActionSlice.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);








const reesbyResponsibilities = ["Leading the Front-End team.", "Developed Axios Interceptor and API calls.", "Developed Redux state management.", "Developed main project login and register page.", "Developed main project landing page (React Web Application) individually. ", "UX/UI Design for the new platform. "];
const freeLanceResponsibilities = ["Communicating with clients.", "Iterative progress.", "Data visualization.", "Web format Portfolio development HTML/CSS/JS.", "User Interaction Design.", "React.js development."];
const mentoringResponsibilities = ["Organizing teaching material.", "Explaining material in simple and small projects.", "Designing small projects for homework practices. "];

function CV() {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__.default)();
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();

  const handleLinkClick = (e, linkName) => {
    e.preventDefault();
    dispatch((0,_redux_slices_buttonActionSlice__WEBPACK_IMPORTED_MODULE_6__.containerStateToggle)(linkName));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    container: true,
    justify: "space-between",
    alignContent: "flex-start",
    className: classes.topic_grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topick_heading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h3"
  }, "Mohammad Amin Mohammadi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "React.js Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "Front-End Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "Top Skills:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "React.js, React-Redux, Redux ToolKit, React Hooks, React Functions,TypeScript, Axios, D3.js, JavaScript Vanilla, JSX, HTML, CSS, Material-UI.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topic_pragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "I am graduated from the University of Sydney Bachelor of Design Computing that empowers me with knowledge and experience in User Experience Design and User Interaction Design alongside my speciality in React.js Front-End Development. After mastering skills in CSS, HTML, JavaScript, D3.js, P5.js, P3 Processing Java I fell in love with React.js and have developed several projects in React.js and TypeScripts. After puting my skills in to a real-world test I have mastered React Hooks, React-Redux, Redux ToolKir, TypeScript, Axios Interceptors, Restful API, and Authentication.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h3"
  }, "Education")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "Bachelor of Design Computing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "University of Sydney"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Jul 2017 \u2014 Dec 2020")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Certified skills in User Experience Design, User Interaction Design, and Front-End Development. Mastering programming skills in React.js, React-Redux, Redux ToolKit, Axios, Material-UI, D3.js, JavaScript Vanilla, JSX, HTML & CSS.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "Achivements")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "University of Sydney hackathon Coding Fest 2020 Disaster Prevention Project Award."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "",
    onClick: e => handleLinkClick(e, "D3")
  }, "Bangladesh Rainfall Visualization.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Fighting misinformation through social media around the Covid-19 news."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "",
    onClick: e => handleLinkClick(e, "UI")
  }, "Covid Fact Check App-Developed in React.js.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h3"
  }, "Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4",
    style: {
      color: "#9C3C41"
    }
  }, "React Developer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Reesby"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Mar 2021 \u2014 Present")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "React Front-End Developer in Reesby. Leader of Front-End development team. Developed Reesby main project landing page using React, React-Redux, React-Spring and Material-UI.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "Responsibilities")), reesbyResponsibilities.map(data => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
      item: true,
      xs: 12,
      sm: 4,
      key: data
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
      variant: "body1"
    }, data));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "Achivements")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Three times nominated as the team member of the CRM team for dedication and hard work resulted in great outcomes."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
    variant: "middle",
    className: classes.divider
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4",
    style: {
      color: "#9C3C41"
    }
  }, "Freelance Front End Development"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Freelance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "2019 \u2014 Present")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Working from home on projects involve JavaScript programming and UI design.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "Responsibilities")), freeLanceResponsibilities.map(data => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
      item: true,
      xs: 12,
      sm: 4,
      key: data
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
      variant: "body1"
    }, data));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_5___default()), {
    variant: "middle",
    className: classes.divider
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4",
    style: {
      color: "#9C3C41"
    }
  }, "Mentoring Class Mates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "University of Sydney"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Feb 2019 \u2014 Dec 2019")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "body1"
  }, "Mentoring classmates to learn HTML/CSS/JavaScripts and P5.js.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
    variant: "h4"
  }, "Responsibilities")), mentoringResponsibilities.map(data => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
      item: true,
      xs: 12,
      sm: 4,
      key: data
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_4___default()), {
      variant: "body1"
    }, data));
  })))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CV);

/***/ }),

/***/ "./txsrc/views/Pages/UI/index.tsx":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/UI/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _YouTubeEmbed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../YouTubeEmbed */ "./txsrc/views/Pages/YouTubeEmbed/index.tsx");







function UI() {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__.default)();

  const preventDefault = event => event.preventDefault();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    container: true,
    justify: "space-between",
    alignContent: "flex-start",
    className: classes.topic_grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topick_heading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "Figting misinformation through social media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h4"
  }, "Collaboration Team:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "Developer and Video: Mohammad Amin Mohammadi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "UX/UI Designer and documentation: Jessica Owens"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
    href: "https://covid-19-measures-assessment.web.app/",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5",
    className: classes.link_ToExternals
  }, "Link to our high-fidelity prototype")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
    href: "Assets/UI/A3 Final Report.pdf",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5",
    className: classes.link_ToExternals
  }, "Link to full report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topic_pragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "In our current state misinformation is frequently shared and whether this is intentional or inadvertent it can have catastrophic results on the spread of COVID-19. Maximising public access to balanced, reliable, and up to date information is a critical success factor for authorities worldwide. Management of highly trusted information will have a vital role to play in the control of COVID-19. The COVID-19 Fact Check app has been built to facilitate an effective means of sharing information going forward. The application is an informal educational tool, which encourages users to become aware of the false or misleading information that they may find themselves coming across when partaking in online activity. It\u2019s a gamified fun fact-based tool which will help the world #StopTheSpread.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_YouTubeEmbed__WEBPACK_IMPORTED_MODULE_5__.default, {
    embedID: "aQ017METpTU"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "React.js")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Currently our planet is at a critical point of animal extinction and bidovirsty loss. To aid in combatting this loss we have designed the Atmoscube. Through research conducted at the beginning of the design process we\u2019ve identified that people often feel unempowered in their ability to help the environment. To solve this problem, we have aimed to create an experience that informs and engages the user in an effort to educate and empower. Empowerment provided by interacting with the atomscube is designed to permeate throughout the users daily life, providing them with a platform to continue with environmentally positive life choices."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "React Hooks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "useState"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "\"useState\" is a React hook function that allows us to change the state of the function components if required. React hook functions are well design to secure the function component from possible errors in the code as well as stabilizing the connection between components between classes.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "useEffect"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "\"useEffect\" function is another React hook that allows us to read from our API data base only on specified circumstances. \"useEffect\" helps us to minimize the tokens on our API and reduces the load on the API server. In this application, we mainly use the \"useEffect\" hook to read and write on our API database with a minimum number of tokens for each request to maintain the API service."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "React-Router")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "useHistory"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "\"useHistory\" is a hook function from React Router Core npm to trigger the Link function in a class function rather than the render function. \"useHistory\" in this application allows us to route between pages using different states of function components in conditions. In this application, this condition listens to the direction of the user's swipe.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Switch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "\"Switch\" is unique in that it renders a route exclusively. In contrast, every \"Route\" that matches the location renders inclusively.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Route"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "\"Route\" most basic responsibility is to render some UI when its path matches the current URL passed as the path. \"Route\" also sets the props required for the routing component and on each request to the path it makes the hook between the sender and receiver component.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Link"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "\"Link\" allows us to navigate to specified path component/page in HTML format (render function) and transferring object properties as props. In this application, we have used \"Link\" on our buttons triggering routes to other pages and transferring the props to the function component."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "Google Firebase")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Firebase is Google's free cloud storage that handles many aspects of backend functionality. For this project, this service allows reservation of questions and users results in a form of API data sources as well as deploying the platform.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 4,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Data set One"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "One firebase data document is used to reserve the questions in. This allows for easy updates of the questions.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 4,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Data set Two"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "The second data document collects the users\u2019 final results as well as their postcode. After a user is done the result and postcode of the question will be saved on this repository in the form of an array of objects. This information instantly will be downloaded from the API to draw the graph in the next page.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 4,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Build and Publish"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Thirdly, Google Firebase helps build and deploy the application on its servers from React.js. Google fiFirebase provides this service for free in addition to all other mentioned services."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    xs: 12,
    spacing: 4,
    justify: "space-between",
    alignContent: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "Tinder Swipe for React Library")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "This is a pre-build swipe listener library that provides a very smooth swipe animation to given elements. Using this library on questions card as clear user feedback on their swipe actions. This library also allows the application to count the correct answers as well as the total number of questions answered. Using the \u201DonSwipe\u201D listener built-in on this library we can monitor the direction the swipe user makes for each question.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "React Router"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "React router library: this library allows the application to easily move between pages. This library allows for multiple pages in the application. Separating actions and information in different pages improves the flow of the application. A benefit of this separation is the minimisation of the amount of information users have to process at a time.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "D3.js"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "D3.js: this JavaScript library is a very powerful tool to bring the data to life with interactive graphs as well as manipulating DOM elements. Using the data restored in Firebase cloud service shows an overview of the average score for each suburb using postcodes from user inputs. This leaderboard also graph shows the total number of participants from each suburb to explain the differences more clearly.")))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./txsrc/views/Pages/UX/index.tsx":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/UX/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _YouTubeEmbed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../YouTubeEmbed */ "./txsrc/views/Pages/YouTubeEmbed/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);








function UX() {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__.default)();
  const {
    screenAction: {
      gridRowToReverce,
      gridRowToColumn
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(state => state);

  const preventDefault = event => event.preventDefault();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    container: true // spacing={4}
    ,
    justify: "space-between",
    alignContent: "flex-start",
    className: classes.topic_grid
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topick_heading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "User Experience Case Studies. Environmental Conservation."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h4"
  }, "Collaboration Team:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "User Journey Map & Documentation: Mohammad Amin Mohammadi"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "User Testings & Video: Brendan O'Reilly"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body2",
    style: {
      fontSize: "12px",
      color: "#426164"
    }
  }, "Synthesizing Activity Design: Elliott Magrath"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
    href: "images/Pages/UX/Visual-Report.pdf",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5",
    className: classes.link_ToExternals
  }, "Link to full report"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12,
    className: classes.topic_pragraph
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Technology has played a significant role in increasing the world population dramatically. Consequently it has increased the level of the complexity of problems. However, user research methods developed around design frameworks can be a powerful tool to face these complex wicked problems. since the day I was introduced to the digital world, I have always been looking and thinking beyond the applications and platforms I have used. The temptation to find reliable solutions to build a better future for both humanity and the environment we live at.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_YouTubeEmbed__WEBPACK_IMPORTED_MODULE_5__.default, {
    embedID: "AikAa-n8vq8"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    direction: gridRowToReverce,
    spacing: 4,
    justify: "center",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Currently our planet is at a critical point of animal extinction and bidovirsty loss. To aid in combatting this loss we have designed the Atmoscube. Through research conducted at the beginning of the design process we\u2019ve identified that people often feel unempowered in their ability to help the environment. To solve this problem, we have aimed to create an experience that informs and engages the user in an effort to educate and empower. Empowerment provided by interacting with the atomscube is designed to permeate throughout the users daily life, providing them with a platform to continue with environmentally positive life choices.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Knowledge As a tool to conserve"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "Environment and Biodiversity"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    direction: gridRowToColumn,
    spacing: 4,
    justify: "center",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "What is the strategy?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "Design Solution")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Our design Solution is the Atmoscube, a cube roughly 450mm in width, height and depth. Within this hologram cube we are propose a city build game. The top of the product houses a touch and distance sensitive interface that along with AI voice operated system will be the way in which the user engages with the product. Within the product will be a small AR city projected from the base, this AR city will be built and managed by the user."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "images/Pages/UX/Render.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    direction: gridRowToReverce,
    spacing: 4,
    justify: "center",
    alignItems: "flex-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "The design process was guided by the aim of empowering people through education in an effort to aid against biodiversity loss and animal extinction."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Stage one of the design process involved conducting research with finding key insights regarding the problem space in mind."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Stage two of the process involved studying the research gathered, finding explicit and intrinsic insights into solutions for the problem space."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Stage Three involved each design member submitting two idea and subsequent storyboards that aided the problem space and successfully met design criteria."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "body1"
  }, "Stage Four involved each design team members idea being inputted into a design matrix created to highlight the best design and what was most suited to the tasks needs.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Trial and Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "Design Process"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "images/Pages/UX/Render-2.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    spacing: 4,
    direction: gridRowToReverce,
    justify: "center",
    alignItems: "center",
    className: classes.inner_GridContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, "To use the Atmoscube the user must connect it to its home and vehicles IoT (Internet of things), the data received from the users amenities will be the core of the users experience within atmoscube, the electricity, water and Co2 used by the user within their real daily lives will have a direct effect to their experience within the product. An example of this is smog within the user\u2019s city from high Co2 emissions or Electricity use in real life."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "images/Pages/UX/Render-3.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    spacing: 4,
    direction: gridRowToColumn,
    justify: "center",
    alignItems: "center",
    className: classes.inner_GridContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "images/Pages/UX/Render-4.png",
    alt: "content"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, "To accompany these mechanics is the systems AI, with the gathered data from the users IoT the AI will learn the user\u2019s habits, lifestyle and how they could lower their impact on the environment. These improvements will be set to the user as challenges, these challenges were designed with gamification in mind, engaging the user and investing them in the experience as a whole."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    container: true,
    spacing: 4,
    xs: 12,
    style: {
      paddingTop: "160px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    lg: 6,
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h5"
  }, "Design Communicatin Tool"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "h3"
  }, "User Journy Map")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
    item: true,
    xs: 12,
    style: {
      paddingTop: "12px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_4___default()), {
    href: "images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg",
    className: classes.onlineLink,
    style: {
      bottom: "0px"
    },
    onClick: e => preventDefault
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "images/Pages/UX/(Icon-Discription-Headings)Jourenny-Map(Custom-Size-Cancas).jpg",
    alt: "content"
  }))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UX);

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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");




function Undeveloped() {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_2__.default)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_0___default()), {
    variant: "h3",
    className: classes.topick_heading
  }, "This page is temporary unavailable."));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Undeveloped);

/***/ }),

/***/ "./txsrc/views/Pages/YouTubeEmbed/index.tsx":
/*!**************************************************!*\
  !*** ./txsrc/views/Pages/YouTubeEmbed/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./txsrc/views/Pages/styles.tsx");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-use-measure */ "react-use-measure");
/* harmony import */ var react_use_measure__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_use_measure__WEBPACK_IMPORTED_MODULE_2__);




function YouTubeEmbed({
  embedID
}) {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_1__.default)();
  const [videoContainer, {
    width
  }] = react_use_measure__WEBPACK_IMPORTED_MODULE_2___default()();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.video_container,
    ref: videoContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.video_root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.video_responsive
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    width: "100%",
    height: width / 2,
    src: `https://www.youtube.com/embed/${embedID}`,
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true,
    title: "Embedded youtube"
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YouTubeEmbed);

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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
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

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/Slide":
/*!******************************************!*\
  !*** external "@material-ui/core/Slide" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-use-measure":
/*!************************************!*\
  !*** external "react-use-measure" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react-use-measure");

/***/ }),

/***/ "reload":
/*!*************************!*\
  !*** external "reload" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("reload");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./txsrc/server.tsx ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reload */ "reload");
/* harmony import */ var reload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./App */ "./txsrc/App.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./store */ "./txsrc/store.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);








const app = express__WEBPACK_IMPORTED_MODULE_0___default()();
const port = 3000;
const dev = "development" === "development";
app.use(express__WEBPACK_IMPORTED_MODULE_0___default().static("public"));
if (dev) reload__WEBPACK_IMPORTED_MODULE_3___default()(app);
app.use((rec, res) => {
  const styleSheetsRegistry = new _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.ServerStyleSheets();
  const generateClassName = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.createGenerateClassName)({
    productionPrefix: "c"
  });
  const html = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_2__.renderToString)(styleSheetsRegistry.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__.StylesProvider, {
    generateClassName: generateClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_5__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_4__.default, null)))));
  const css = styleSheetsRegistry.toString();
  const preloadedState = _store__WEBPACK_IMPORTED_MODULE_5__.default.getState();
  res.send(`
    <!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <link rel='icon' href='./favicon.ico' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <title>Andramedian Design-Mohammad Amin Mohammadi</title>
    <style id='jss-style'>${css}</style>
  </head>
  <body>
    <div id='root'>${html}</div>
    <script async>
    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, "\\u003c")}
  </script>
    <script src='main.js' async></script>
    ${dev ? `<script src='/reload/reload.js async></script>` : ""}
  </body>
</html>
    `);
});
app.listen(port, () => console.log(`http://localhost:${port}`));
})();

/******/ })()
;
//# sourceMappingURL=main.js.map