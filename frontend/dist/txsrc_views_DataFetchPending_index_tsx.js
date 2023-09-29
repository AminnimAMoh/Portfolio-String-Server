"use strict";
exports.id = "txsrc_views_DataFetchPending_index_tsx";
exports.ids = ["txsrc_views_DataFetchPending_index_tsx"];
exports.modules = {

/***/ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/LinearProgress/LinearProgress.js":
/*!****************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/LinearProgress/LinearProgress.js ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   styles: () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "../node_modules/.pnpm/clsx@1.2.1/node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/utils/capitalize.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/colorManipulator */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/styles/colorManipulator.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/useTheme */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/styles/useTheme.js");









const TRANSITION_DURATION = 4; // seconds

const styles = theme => {
  const getColor = color => theme.palette.type === 'light' ? (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.lighten)(color, 0.62) : (0,_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_4__.darken)(color, 0.5);

  const backgroundPrimary = getColor(theme.palette.primary.main);
  const backgroundSecondary = getColor(theme.palette.secondary.main);
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 4,
      '@media print': {
        colorAdjust: 'exact'
      }
    },

    /* Styles applied to the root and bar2 element if `color="primary"`; bar2 if `variant="buffer"`. */
    colorPrimary: {
      backgroundColor: backgroundPrimary
    },

    /* Styles applied to the root and bar2 elements if `color="secondary"`; bar2 if `variant="buffer"`. */
    colorSecondary: {
      backgroundColor: backgroundSecondary
    },

    /* Styles applied to the root element if `variant="determinate"`. */
    determinate: {},

    /* Styles applied to the root element if `variant="indeterminate"`. */
    indeterminate: {},

    /* Styles applied to the root element if `variant="buffer"`. */
    buffer: {
      backgroundColor: 'transparent'
    },

    /* Styles applied to the root element if `variant="query"`. */
    query: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the additional bar element if `variant="buffer"`. */
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: '$buffer 3s infinite linear'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="primary"`. */
    dashedColorPrimary: {
      backgroundImage: `radial-gradient(${backgroundPrimary} 0%, ${backgroundPrimary} 16%, transparent 42%)`,
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the additional bar element if `variant="buffer"` and `color="secondary"`. */
    dashedColorSecondary: {
      backgroundImage: `radial-gradient(${backgroundSecondary} 0%, ${backgroundSecondary} 16%, transparent 42%)`,
      backgroundSize: '10px 10px',
      backgroundPosition: '0 -23px'
    },

    /* Styles applied to the layered bar1 and bar2 elements. */
    bar: {
      width: '100%',
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear',
      transformOrigin: 'left'
    },

    /* Styles applied to the bar elements if `color="primary"`; bar2 if `variant` not "buffer". */
    barColorPrimary: {
      backgroundColor: theme.palette.primary.main
    },

    /* Styles applied to the bar elements if `color="secondary"`; bar2 if `variant` not "buffer". */
    barColorSecondary: {
      backgroundColor: theme.palette.secondary.main
    },

    /* Styles applied to the bar1 element if `variant="indeterminate or query"`. */
    bar1Indeterminate: {
      width: 'auto',
      animation: '$indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },

    /* Styles applied to the bar1 element if `variant="determinate"`. */
    bar1Determinate: {
      transition: `transform .${TRANSITION_DURATION}s linear`
    },

    /* Styles applied to the bar1 element if `variant="buffer"`. */
    bar1Buffer: {
      zIndex: 1,
      transition: `transform .${TRANSITION_DURATION}s linear`
    },

    /* Styles applied to the bar2 element if `variant="indeterminate or query"`. */
    bar2Indeterminate: {
      width: 'auto',
      animation: '$indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite'
    },

    /* Styles applied to the bar2 element if `variant="buffer"`. */
    bar2Buffer: {
      transition: `transform .${TRANSITION_DURATION}s linear`
    },
    // Legends:
    // || represents the viewport
    // -  represents a light background
    // x  represents a dark background
    '@keyframes indeterminate1': {
      //  |-----|---x-||-----||-----|
      '0%': {
        left: '-35%',
        right: '100%'
      },
      //  |-----|-----||-----||xxxx-|
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes indeterminate2': {
      //  |xxxxx|xxxxx||-----||-----|
      '0%': {
        left: '-200%',
        right: '100%'
      },
      //  |-----|-----||-----||-x----|
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0 -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0 -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
};
/**
 * ## ARIA
 *
 * If the progress bar is describing the loading progress of a particular region of a page,
 * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
 * attribute to `true` on that region until it has finished loading.
 */

const LinearProgress = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.forwardRef(function LinearProgress(props, ref) {
  const {
    classes,
    className,
    color = 'primary',
    value,
    valueBuffer,
    variant = 'indeterminate'
  } = props,
        other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "value", "valueBuffer", "variant"]);

  const theme = (0,_styles_useTheme__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const rootProps = {};
  const inlineStyles = {
    bar1: {},
    bar2: {}
  };

  if (variant === 'determinate' || variant === 'buffer') {
    if (value !== undefined) {
      rootProps['aria-valuenow'] = Math.round(value);
      rootProps['aria-valuemin'] = 0;
      rootProps['aria-valuemax'] = 100;
      let transform = value - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar1.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error('Material-UI: You need to provide a value prop ' + 'when using the determinate or buffer variant of LinearProgress .');
    }
  }

  if (variant === 'buffer') {
    if (valueBuffer !== undefined) {
      let transform = (valueBuffer || 0) - 100;

      if (theme.direction === 'rtl') {
        transform = -transform;
      }

      inlineStyles.bar2.transform = `translateX(${transform}%)`;
    } else if (true) {
      console.error('Material-UI: You need to provide a valueBuffer prop ' + 'when using the buffer variant of LinearProgress.');
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.root, classes[`color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`], className, {
      'determinate': classes.determinate,
      'indeterminate': classes.indeterminate,
      'buffer': classes.buffer,
      'query': classes.query
    }[variant]),
    role: "progressbar"
  }, rootProps, {
    ref: ref
  }, other), variant === 'buffer' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.dashed, classes[`dashedColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`])
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.bar, classes[`barColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`], (variant === 'indeterminate' || variant === 'query') && classes.bar1Indeterminate, {
      'determinate': classes.bar1Determinate,
      'buffer': classes.bar1Buffer
    }[variant]),
    style: inlineStyles.bar1
  }), variant === 'determinate' ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(classes.bar, (variant === 'indeterminate' || variant === 'query') && classes.bar2Indeterminate, variant === 'buffer' ? [classes[`color${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`], classes.bar2Buffer] : classes[`barColor${(0,_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color)}`]),
    style: inlineStyles.bar2
  }));
});
 true ? LinearProgress.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object),

  /**
   * @ignore
   */
  className: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['primary', 'secondary']),

  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),

  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(['buffer', 'determinate', 'indeterminate', 'query'])
} : 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiLinearProgress'
})(LinearProgress));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/styles/makeStyles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/.pnpm/react-redux@7.2.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-redux/es/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "../node_modules/.pnpm/@material-ui+core@4.12.3_65quu5rh7x63bcgvv7sibmekvm/node_modules/@material-ui/core/es/LinearProgress/LinearProgress.js");




const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({
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
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(DataPending));

/***/ })

};
;
//# sourceMappingURL=txsrc_views_DataFetchPending_index_tsx.js.map