"use strict";
exports.id = "D3-Draw";
exports.ids = ["D3-Draw"];
exports.modules = {

/***/ "./txsrc/views/Pages/D3/Draw.js":
/*!**************************************!*\
  !*** ./txsrc/views/Pages/D3/Draw.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/.pnpm/d3@7.8.5/node_modules/d3/src/index.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./txsrc/views/Pages/D3/style.css");
/* harmony import */ var _DrawFunction_generateAllGroups__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawFunction/generateAllGroups */ "./txsrc/views/Pages/D3/DrawFunction/generateAllGroups.js");
/* harmony import */ var _data_staticVariables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/staticVariables */ "./txsrc/views/Pages/D3/data/staticVariables.js");
/* harmony import */ var _styleFunctions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styleFunctions */ "./txsrc/views/Pages/D3/styleFunctions.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utilities */ "./txsrc/views/Pages/D3/utilities.js");










const Draw = (
  container,
  svgRef,
  annualrain,
  slums,
  population,
  months,
  mapData
) => {
  let containerElement = svgRef.current;
  let containerX = 0;
  let containerY = 0;
  if (containerElement) {
    containerX = containerElement.clientWidth;
    containerY = containerElement.clientHeight;
  }
  let yearLableInc = 80;
  let mapXOffSet = -100;
  let w = containerX;
  let h = containerY;
  let yearSelected = "2013";
  let generatedGroups = (0,_DrawFunction_generateAllGroups__WEBPACK_IMPORTED_MODULE_2__.generateAllGroups)(d3__WEBPACK_IMPORTED_MODULE_0__, container);
  while (!generatedGroups) {
    generatedGroups = (0,_DrawFunction_generateAllGroups__WEBPACK_IMPORTED_MODULE_2__.generateAllGroups)(d3__WEBPACK_IMPORTED_MODULE_0__, container);
  }
  /*--------------------------------------------------------------*/
  /*--------------------------------------------------------------*/
  ///////////////////////////Circles Drop Shadow////////////////////
  /*--------------------------------------------------------------*/
  /*--------------------------------------------------------------*/

  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.generatGradient)(container);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.generateBlur)(container);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.shadowGenerator)(container, "drop-shadow", "330%", "330%", 3, 10, 10, 0.3);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.shadowGenerator)(container, "graph-drop-shadow", "130%", "130%", 6, 0, 0, 1);
  (0,_styleFunctions__WEBPACK_IMPORTED_MODULE_4__.shadowGenerator)(
    container,
    "legend-drop-shadow",
    "330%",
    "330%",
    1,
    10,
    5,
    0.2
  );

  let names = [];
  if (mapData) {
    for (let i = 0; i < mapData.features.length; i++) {
      names.push(mapData.features[i].properties.NAME_4);
    }
    generatedGroups.mapContainer
      .selectAll("path")
      .data(mapData.features)
      .enter()
      .append("path")
      .attr("d", (d) => (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.geoLocations)(d));
  }

  function reDrawCan() {
    const annualRainData = annualrain.data;

    const datatransfer = annualRainData.map((properties) => {
      return properties["Sum2013"];
    });

    let firstMin = d3__WEBPACK_IMPORTED_MODULE_0__.min(datatransfer);
    let firstMax = d3__WEBPACK_IMPORTED_MODULE_0__.max(datatransfer);

    let radScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().domain([firstMin, firstMax]).range([6, 24]);

    container.attr("width", w).attr("height", h);

    // container
    //   .selectAll("g")
    //   .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

    generatedGroups.mapContainer.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );
    generatedGroups.legendGraph.attr(
      "transform",
      "translate(" + (265 + mapXOffSet) + " ," + h + ")"
    );

    generatedGroups.ellipseContainer
      .selectAll("ellipse")
      .data(_data_staticVariables__WEBPACK_IMPORTED_MODULE_3__.staticState.ellipsesLength)
      .enter()
      .append("ellipse")
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("rx", 0)
      .attr("ry", 0);

    generatedGroups.cityCircles.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );
    generatedGroups.cityLables.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );
    generatedGroups.ellipseContainer.attr(
      "transform",
      "translate(" + mapXOffSet + ",0)"
    );

    let managedArray = [];
    const legendData = annualrain.data.map((data) => {
      return data.Sum2013;
    });
    const sortedData = legendData.sort(d3__WEBPACK_IMPORTED_MODULE_0__.descending);
    managedArray.push(sortedData[0]);
    managedArray.push(sortedData[sortedData.length / 2]);
    managedArray.push(sortedData[sortedData.length - 1]);

    generatedGroups.legendGraph
      .selectAll("circle")
      .data(managedArray)
      .enter()
      .append("circle")
      .attr("class", "cities-circles")
      .attr("transform", (d, i) => {
        return "translate(0," + -radScale(d) + ")";
      })
      .attr("r", (d) => {
        return radScale(d);
      });

    generatedGroups.legendGraph
      .selectAll("line")
      .data(managedArray)
      .enter()
      .append("line")
      .attr("transform", function (d, i) {
        return "translate(0," + -radScale(d) * 2 + ")";
      })
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x1", function (d, i) {
        return i * 50 + 50;
      })
      .attr("y1", 1)
      .style("stroke", "white");

    generatedGroups.legendGraph
      .selectAll("text")
      .data(managedArray)
      .enter()
      .append("text")
      .attr("transform", function (d, i) {
        return (
          "translate(" + (i * 50 + 52) + "," + (-radScale(d) * 2 - 3) + ")"
        );
      })
      .text(function (d) {
        return d + "mm";
      })
      .style("font-size", "6pt")
      .style("fill", "white");

    generatedGroups.cityCircles
      .selectAll("circle")
      .data(annualrain.data)
      .enter()
      .append("circle")
      .attr("id", (d) => {
        return d.Station;
      })
      .attr("class", "cities-circles")
      .attr("transform", (d) => {
        const pos = (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.citiesProjection)([+d.longitude, +d.latitude]);
        return `translate(${pos[0]},${pos[1]})`;
      })
      .attr("r", (d) => {
        return radScale(d.Sum2013);
      })
      .on("mouseover", function (d) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", true);
      })
      .on("mouseout", function (d) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", false);
      })

      .on("click", function () {
        __webpack_require__.e(/*! import() | D3-stationsClick */ "D3-stationsClick").then(__webpack_require__.bind(__webpack_require__, /*! ./MapMouseControles/StationsClick */ "./txsrc/views/Pages/D3/MapMouseControles/StationsClick.js")).then(({ default: stationsClick }) => {
          stationsClick(
            population,
            months,
            yearSelected,
            generatedGroups,
            d3__WEBPACK_IMPORTED_MODULE_0__,
            mapXOffSet,
            this
          );
        });
      });

    __webpack_require__.e(/*! import() | D3-slumsComponent */ "D3-slumsComponent").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/SlumsComponent */ "./txsrc/views/Pages/D3/MapComponents/SlumsComponent.js")).then(({ default: slumsComponent }) => {
      slumsComponent(slums, generatedGroups, yearLableInc);
    });

    generatedGroups.yearsContainer.attr("transform", "translate(150,20)");
    generatedGroups.yearsContainer
      .selectAll("text")
      .data(_data_staticVariables__WEBPACK_IMPORTED_MODULE_3__.staticState.yearSelector)
      .enter()
      .append("text")
      .attr("x", function (d, i) {
        return i * yearLableInc;
      })
      .attr("y", 0)
      .text(function (d) {
        return d.name;
      })
      .attr("id", function (d) {
        return d.name;
      })
      .attr("text-anchor", "middle")
      .attr("font-size", 12)

      .on("mouseover", function (d) {
        let year = this.id;
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", true);

        generatedGroups.yearsSlums
          .selectAll("rect")
          .transition()
          .duration(500)
          .attr("height", function (d, i) {
            return (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.slumScale)(+d.value, slums);
          });
        generatedGroups.yearsSlums
          .selectAll("text")
          .transition()
          .delay(500)
          .duration(100)
          .style("opacity", function (d) {
            if (d.year === year) {
              return 1;
            } else {
              return 0;
            }
          });
      })
      .on("mouseout", function (d) {
        d3__WEBPACK_IMPORTED_MODULE_0__.select(this).classed("active", false);
        generatedGroups.yearsSlums
          .selectAll("rect")
          .transition()
          .duration(500)
          .attr("height", 0);
        generatedGroups.yearsSlums
          .selectAll("text")
          .transition()
          .delay(500)
          .duration(100)
          .style("opacity", 0);
      })
      .on("click", function (d) {
        __webpack_require__.e(/*! import() | D3-removeFunction */ "D3-removeFunction").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/RemoveFunction */ "./txsrc/views/Pages/D3/MapComponents/RemoveFunction.js")).then(({ default: removeFunction }) => {
          removeFunction(d3__WEBPACK_IMPORTED_MODULE_0__, container, generatedGroups);
        });
        (0,_utilities__WEBPACK_IMPORTED_MODULE_5__.onClickTextFunction)(this, generatedGroups.yearsContainer);
        const yearListSelected = this.id;
        __webpack_require__.e(/*! import() | D3-DrawAll */ "D3-DrawAll").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/DrawAllComponents */ "./txsrc/views/Pages/D3/MapComponents/DrawAllComponents.js")).then(({ default: DrawAll }) => {
          DrawAll(
            d3__WEBPACK_IMPORTED_MODULE_0__,
            annualrain,
            yearListSelected,
            yearSelected,
            firstMin,
            firstMax,
            generatedGroups
          );
        });
      });

    __webpack_require__.e(/*! import() | D3-removeEllipses */ "D3-removeEllipses").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/RemoveEllipses */ "./txsrc/views/Pages/D3/MapComponents/RemoveEllipses.js")).then(({ default: removeEllipses }) => {
      removeEllipses(d3__WEBPACK_IMPORTED_MODULE_0__, container, generatedGroups);
    });

    __webpack_require__.e(/*! import() | D3-DrawAll */ "D3-DrawAll").then(__webpack_require__.bind(__webpack_require__, /*! ./MapComponents/DrawAllComponents */ "./txsrc/views/Pages/D3/MapComponents/DrawAllComponents.js")).then(({ default: DrawAll }) => {
      DrawAll(
        d3__WEBPACK_IMPORTED_MODULE_0__,
        annualrain,
        2013,
        yearSelected,
        firstMin,
        firstMax,
        generatedGroups
      );
    });

    d3__WEBPACK_IMPORTED_MODULE_0__.selectAll("g").raise();

    // window.addEventListener("click", function (event) {
    //   if (
    //     (event.srcElement.className === "content-page open" &&
    //       event.srcElement.id === "D3") ||
    //     event.srcElement.id === "control-canvas" ||
    //     event.srcElement.id === "map-canvas"
    //   ) {
    //     generatedGroups.yearsContainer
    //       .selectAll("text")
    //       .attr("font-size", 12)
    //       .style("fill", "white")
    //       .style("font-family", "imported-Azo");

    //     removeEllipses();
    //   }
    // });
  }

  // window.addEventListener("click", function (event) {
  //   let thisCanvasContainer = document.getElementsByClassName("content-page");

  //   for (let i = 0; i < thisCanvasContainer.length; i++) {
  //     if (
  //       event.srcElement.className !== "content-page open" &&
  //       event.srcElement.id === "D3" &&
  //       thisCanvasContainer[i].id === "D3" &&
  //       thisCanvasContainer[i].classList.contains("open")
  //     ) {
  //       let thisContainer = document.getElementById("Script-Container");
  //       reDrawCan();
  //     }
  //   }
  // });
  containerElement && reDrawCan();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draw);


/***/ }),

/***/ "./txsrc/views/Pages/D3/DrawFunction/generateAllGroups.js":
/*!****************************************************************!*\
  !*** ./txsrc/views/Pages/D3/DrawFunction/generateAllGroups.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateAllGroups: () => (/* binding */ generateAllGroups)
/* harmony export */ });
const generateAllGroups=(d3,container)=>{
    return {
     mapContainer : container.append("g").attr("id", "map-container-group"),
     yearsContainer : container.append("g").attr("class", "year-container"),
     yearsSlums : container.append("g").attr("class", "year-slumes"),
     lableSlums : container.append("g").attr("class", "lable-slumes"),
     cityCircles : container.append("g").attr("id", "city-indicators"),
     legendGraph : container.append("g").attr("id", "graph-legend-group"),
     ellipseContainer : container.append("g").attr("id", "ellipse-group"),
     cityLables : container.append("g").attr("id", "city-Lable"),
     groupOne : container.append("g").attr("id", "population-groupOne"),
     groupTwo : container.append("g").attr("id", "population-groupTwo"),
     groupThree : container.append("g").attr("id", "population-groupThree"),
     lables : container.append("g").attr("id", "graph-lables"),
     rainGroup : container.append("g").attr("class", "rainG"),
    }
}

/***/ }),

/***/ "./txsrc/views/Pages/D3/data/staticVariables.js":
/*!******************************************************!*\
  !*** ./txsrc/views/Pages/D3/data/staticVariables.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   staticState: () => (/* binding */ staticState)
/* harmony export */ });
const staticState = {
  ellipsesLength: [
    {
      size: 70,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 70,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 70,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 82,
      f: "#E4E5E7",
      s: "none",
    },
    {
      size: 60,
      f: "none",
      s: "black",
    },
    {
      size: 60,
      f: "none",
      s: "black",
    },
    {
      size: 60,
      f: "none",
      s: "black",
    },
    {
      size: 80,
      f: "none",
      s: "none",
    },
  ],
  rectsLength: [
    {
      x: 183,
      y: 0,
      text: "Cities Population 1991",
    },
    {
      x: 63,
      y: 120,
      text: "Cities Population 2001",
    },
    {
      x: -57,
      y: 0,
      text: "Cities Population 2011",
    },
  ],
  rainMonthsName: [
    {
      name: "Jan",
    },
    {
      name: "Feb",
    },
    {
      name: "Mar",
    },
    {
      name: "Apr",
    },
    {
      name: "May",
    },
    {
      name: "Jun",
    },
    {
      name: "Ju",
    },
    {
      name: "Aug",
    },
    {
      name: "Sep",
    },
    {
      name: "Oct",
    },
    {
      name: "Nov",
    },
    {
      name: "Dec",
    },
  ],
  yearSelector: [
    {
      name: 1990,
    },
    {
      name: 1995,
    },
    {
      name: 2000,
    },
    {
      name: 2005,
    },
    {
      name: 2010,
    },
    {
      name: 2013,
    },
  ],
};


/***/ }),

/***/ "./txsrc/views/Pages/D3/styleFunctions.js":
/*!************************************************!*\
  !*** ./txsrc/views/Pages/D3/styleFunctions.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatGradient: () => (/* binding */ generatGradient),
/* harmony export */   generateBlur: () => (/* binding */ generateBlur),
/* harmony export */   shadowGenerator: () => (/* binding */ shadowGenerator)
/* harmony export */ });
const generateBlur = (container) => {
  container
    .append("defs")
    .append("filter")
    .attr("id", "blurFilter")
    .append("feGaussianBlur")
    .attr("stdDeviation", 20);
};

const generatGradient = (container) => {
  var gradient = container
    .append("defs")
    .append("linearGradient")
    .attr("id", "Gradient")
    .attr("gradientTransform", "rotate(180)");
  gradient.append("stop").attr("class", "stop-left").attr("offset", "0");
  gradient.append("stop").attr("class", "stop-right").attr("offset", "1");
};

const shadowGenerator = (
  container,
  id,
  width,
  height,
  stdDeviation,
  dx,
  dy,
  slope
) => {
  let defsShadow = container.append("defs");

  let filterShadow = defsShadow
    .append("filter")
    .attr("id", id)
    .attr("height", width)
    .attr("width", height);

  filterShadow
    .append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", stdDeviation);

  filterShadow
    .append("feOffset")
    .attr("dx", dx)
    .attr("dy", dy)
    .attr("result", "offsetBlur");

  let feTransferShadow = filterShadow.append("feComponentTransfer");

  feTransferShadow
    .append("feFuncA")
    .attr("type", "linear")
    .attr("slope", slope);

  let feMergeShadow = filterShadow.append("feMerge");

  feMergeShadow.append("feMergeNode");
  feMergeShadow.append("feMergeNode").attr("in", "SourceGraphic");
};


/***/ }),

/***/ "./txsrc/views/Pages/D3/utilities.js":
/*!*******************************************!*\
  !*** ./txsrc/views/Pages/D3/utilities.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   angleScale: () => (/* binding */ angleScale),
/* harmony export */   citiesProjection: () => (/* binding */ citiesProjection),
/* harmony export */   findMinMax: () => (/* binding */ findMinMax),
/* harmony export */   geoLocations: () => (/* binding */ geoLocations),
/* harmony export */   onClickTextFunction: () => (/* binding */ onClickTextFunction),
/* harmony export */   slumScale: () => (/* binding */ slumScale)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/.pnpm/d3@7.8.5/node_modules/d3/src/index.js");


const findMinMax = (data) => {
  const firstMin = d3__WEBPACK_IMPORTED_MODULE_0__.min(data);
  const firstMax = d3__WEBPACK_IMPORTED_MODULE_0__.max(data);
  return [firstMin, firstMax];
};

const onClickTextFunction = (d, yearsContainer) => {
  yearsContainer
    .selectAll("text")
    .attr("font-size", 12)
    .style("fill", "white")

  d3__WEBPACK_IMPORTED_MODULE_0__.select(d)
    .attr("font-size", 24)
    .style("fill", "#9C3C41")
};

const slumScale = (data,slums) => {
  const scale=d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
    .domain([slums.data[0].min, slums.data[0].max])
    .range([20, 100]);
  return scale(data)
};

const geoLocations=(data)=>{
  const projection = d3__WEBPACK_IMPORTED_MODULE_0__.geoMercator().scale(5200).translate([-7720, 2600]);

  const geoGenerator = d3__WEBPACK_IMPORTED_MODULE_0__.geoPath().projection(projection);

  return geoGenerator(data)
}

const citiesProjection=(data)=>{
  const projectionTest = d3__WEBPACK_IMPORTED_MODULE_0__.geoEquirectangular()
    .scale(5100)
    .translate([-7565, 2478]);
    return projectionTest(data)
}

const angleScale=(data)=>{
  const angleScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear()
  .domain([0, 4])
  .range([0, Math.PI * 2]);
  return angleScale(data)
}

/***/ }),

/***/ "../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./txsrc/views/Pages/D3/style.css":
/*!**********************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./txsrc/views/Pages/D3/style.css ***!
  \**********************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js */ "../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.stop-left {
    stop-color: #426164;
}

.stop-right {
    stop-color: #061621;
}
#Script-Container {
    /* box-sizing: border-box; */
    position: relative;
    /* left: -120px; */
    top: 55px;
    width: 100%;
    height: 920px;
    /* padding: 25px; */
}

text {
    /* font-family: "imported-Azo-Medium"; */
    color: #E4E5E7;
}

path {
    fill: #E4E5E7;
    stroke: none;
    stroke-width: .5px;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);
}

.cities-circles {
    fill: url(#Gradient);
    stroke: url(#Gradient);
    stroke-width: 1.5px;
    fill-opacity: .7;
    z-index: -1;
    transition: .5s;
    filter: url(#legend-drop-shadow);
}

.cities-circles.clicked {
    fill: #9C3C41;
    fill-opacity: 1;
    r: 10;
}

.cities-circles.active {
    fill: #5C3B42;
    r: 10;
}

path.active {
    fill: pink;
}

.ellipseCan {
    width: 100px;
    height: 100px;
    stroke-width: .3;
    opacity: .9;
}

.year-container text {
    cursor: pointer;
    fill: #E4E5E7;
}

.year-container text.active {
    fill: #5C3B42;
}

.legend-circles {
    fill: url(#Gradient);
    opacity: .5;
    stroke: url(#Gradient);
    stroke-width: 1.5px;
    filter: url(#legend-drop-shadow);
}

.legend tspan {
    fill: #E4E5E7;
}

.node text {
    display: none;
    font: 10px sans-serif;
}

.node:hover text {
    display: inline;
}`, "",{"version":3,"sources":["webpack://./txsrc/views/Pages/D3/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;AACA;IACI,4BAA4B;IAC5B,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,wCAAwC;IACxC,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,0CAA0C;AAC9C;;AAEA;IACI,oBAAoB;IACpB,sBAAsB;IACtB,mBAAmB;IACnB,gBAAgB;IAChB,WAAW;IACX,eAAe;IACf,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,eAAe;IACf,KAAK;AACT;;AAEA;IACI,aAAa;IACb,KAAK;AACT;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,WAAW;IACX,sBAAsB;IACtB,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA;IACI,eAAe;AACnB","sourcesContent":[".stop-left {\r\n    stop-color: #426164;\r\n}\r\n\r\n.stop-right {\r\n    stop-color: #061621;\r\n}\r\n#Script-Container {\r\n    /* box-sizing: border-box; */\r\n    position: relative;\r\n    /* left: -120px; */\r\n    top: 55px;\r\n    width: 100%;\r\n    height: 920px;\r\n    /* padding: 25px; */\r\n}\r\n\r\ntext {\r\n    /* font-family: \"imported-Azo-Medium\"; */\r\n    color: #E4E5E7;\r\n}\r\n\r\npath {\r\n    fill: #E4E5E7;\r\n    stroke: none;\r\n    stroke-width: .5px;\r\n    box-shadow: 2px 2px 15px rgba(0, 0, 0, .5);\r\n}\r\n\r\n.cities-circles {\r\n    fill: url(#Gradient);\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    fill-opacity: .7;\r\n    z-index: -1;\r\n    transition: .5s;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.cities-circles.clicked {\r\n    fill: #9C3C41;\r\n    fill-opacity: 1;\r\n    r: 10;\r\n}\r\n\r\n.cities-circles.active {\r\n    fill: #5C3B42;\r\n    r: 10;\r\n}\r\n\r\npath.active {\r\n    fill: pink;\r\n}\r\n\r\n.ellipseCan {\r\n    width: 100px;\r\n    height: 100px;\r\n    stroke-width: .3;\r\n    opacity: .9;\r\n}\r\n\r\n.year-container text {\r\n    cursor: pointer;\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.year-container text.active {\r\n    fill: #5C3B42;\r\n}\r\n\r\n.legend-circles {\r\n    fill: url(#Gradient);\r\n    opacity: .5;\r\n    stroke: url(#Gradient);\r\n    stroke-width: 1.5px;\r\n    filter: url(#legend-drop-shadow);\r\n}\r\n\r\n.legend tspan {\r\n    fill: #E4E5E7;\r\n}\r\n\r\n.node text {\r\n    display: none;\r\n    font: 10px sans-serif;\r\n}\r\n\r\n.node:hover text {\r\n    display: inline;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./txsrc/views/Pages/D3/style.css":
/*!****************************************!*\
  !*** ./txsrc/views/Pages/D3/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "../node_modules/.pnpm/style-loader@3.3.3_webpack@5.88.2/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./style.css */ "../node_modules/.pnpm/css-loader@6.8.1_webpack@5.88.2/node_modules/css-loader/dist/cjs.js!./txsrc/views/Pages/D3/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_pnpm_style_loader_3_3_3_webpack_5_88_2_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_pnpm_css_loader_6_8_1_webpack_5_88_2_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

};
;
//# sourceMappingURL=D3-Draw.js.map