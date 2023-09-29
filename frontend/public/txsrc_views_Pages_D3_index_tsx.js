"use strict";
(self["webpackChunkmamp_frontend"] = self["webpackChunkmamp_frontend"] || []).push([["txsrc_views_Pages_D3_index_tsx"],{

/***/ "./txsrc/views/Pages/D3/index.tsx":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/D3/index.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/.pnpm/react@17.0.2/node_modules/react/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-selection */ "../node_modules/.pnpm/d3-selection@3.0.0/node_modules/d3-selection/src/select.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/.pnpm/react-redux@7.2.9_sfoxds7t5ydpegc3knd667wn6m/node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../redux/slices/fetchSlice */ "./txsrc/redux/slices/fetchSlice.tsx");




function D3() {
  const {
    dataStore: {
      annualrain,
      slums,
      population,
      months,
      mapJSON,
      refresh
    }
  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(state => state);
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  const svgRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [svgSetupTrigger, setSVGSetupTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [svg, setSvg] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (annualrain.state === "empty") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchAnnualrainData)());
    if (slums.state === "empty") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchSlumsData)());
    if (population.state === "empty") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchPopulationData)());
    if (months.state === "empty") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchMonthData)());
    if (mapJSON.state === "empty") dispatch((0,_redux_slices_fetchSlice__WEBPACK_IMPORTED_MODULE_2__.fetchMap)());
  }, [refresh, JSON.stringify(annualrain.state), JSON.stringify(slums.state), JSON.stringify(population.state), JSON.stringify(months.state), JSON.stringify(mapJSON.state), dispatch]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    annualrain.state === "fulfilled" && slums.state === "fulfilled" && population.state === "fulfilled" && months.state === "fulfilled" && mapJSON.state === "fulfilled" && setSVGSetupTrigger(true);
  }, [JSON.stringify(annualrain.state), JSON.stringify(slums.state), JSON.stringify(population.state), JSON.stringify(months.state), JSON.stringify(mapJSON.state)]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    !svg && svgSetupTrigger && setSvg((0,d3_selection__WEBPACK_IMPORTED_MODULE_3__["default"])(svgRef.current));
    if (annualrain.data.length > 0 && svg) {
      Promise.all(/*! import() | D3-Draw */[__webpack_require__.e("vendors-node_modules_pnpm_d3_7_8_5_node_modules_d3_src_index_js"), __webpack_require__.e("D3-Draw")]).then(__webpack_require__.bind(__webpack_require__, /*! ./Draw */ "./txsrc/views/Pages/D3/Draw.js")).then(_ref => {
        let {
          default: Draw
        } = _ref;
        Draw(svg, svgRef, annualrain, slums, population, months, mapJSON.data);
      });
    }
  }, [svg, svgSetupTrigger, annualrain, slums, population, months]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    style: {
      width: "100%",
      height: "100%"
    },
    ref: svgRef
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(D3));

/***/ })

}]);
//# sourceMappingURL=txsrc_views_Pages_D3_index_tsx.js.map