"use strict";
exports.id = "D3-stationsClick";
exports.ids = ["D3-stationsClick"];
exports.modules = {

/***/ "./txsrc/views/Pages/D3/ExternalResource/RadarChart.js":
/*!*************************************************************!*\
  !*** ./txsrc/views/Pages/D3/ExternalResource/RadarChart.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3 */ "../node_modules/.pnpm/d3@7.8.5/node_modules/d3/src/index.js");
/////////////////////////////////////////////////////////
/////////////// The Radar Chart Function ////////////////
/// mthh - 2017 /////////////////////////////////////////
// Inspired by the code of alangrafu and Nadieh Bremer //
// (VisualCinnamon.com) and modified for d3 v4 //////////
/////////////////////////////////////////////////////////


const max = Math.max;
const sin = Math.sin;
const cos = Math.cos;
const HALF_PI = Math.PI / 2;

const RadarChart = function RadarChart(parent_selector, data, options) {
  //Wraps SVG text - Taken from http://bl.ocks.org/mbostock/7555321
  const wrap = (text, width) => {
    text.each(function () {
      var text = d3__WEBPACK_IMPORTED_MODULE_0__.select(this),
        words = text.text().split(/\s+/).reverse(),
        word,
        line = [],
        lineNumber = 0,
        lineHeight = 1.4, // ems
        y = text.attr("y"),
        x = text.attr("x"),
        dy = parseFloat(text.attr("dy")),
        tspan = text
          .text(null)
          .append("tspan")
          .attr("x", x)
          .attr("y", y)
          .attr("dy", dy + "em");

      while ((word = words.pop())) {
        line.push(word);
        tspan.text(line.join(" "));
        if (tspan.node().getComputedTextLength() > width) {
          line.pop();
          tspan.text(line.join(" "));
          line = [word];
          tspan = text
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", ++lineNumber * lineHeight + dy + "em")
            .text(word);
        }
      }
    });
  }; //wrap

  const cfg = {
    w: 600, //Width of the circle
    h: 600, //Height of the circle
    margin: {
      top: 20,
      right: 20,
      bottom: 20,
      left: 20,
    }, //The margins of the SVG
    levels: 3, //How many levels or inner circles should there be drawn
    maxValue: 0, //What is the value that the biggest circle will represent
    labelFactor: 1.55, //How much farther than the radius of the outer circle should the labels be placed
    wrapWidth: 60, //The number of pixels after which a label needs to be given a new line
    opacityArea: 0.8, //The opacity of the area of the blob
    dotRadius: 2, //The size of the colored circles of each blog
    opacityCircles: 1, //The opacity of the circles of each blob
    strokeWidth: 0.8, //The width of the stroke around each blob
    roundStrokes: false, //If true the area and stroke will follow a round path (cardinal-closed)
    color: d3__WEBPACK_IMPORTED_MODULE_0__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_0__.schemeCategory10), //Color function,
    format: ".2%",
    unit: "mm",
    legend: false,
  };

  //Put all of the options into a variable called cfg
  if ("undefined" !== typeof options) {
    for (var i in options) {
      if ("undefined" !== typeof options[i]) {
        cfg[i] = options[i];
      }
    } //for i
  } //if

  //If the supplied maxValue is smaller than the actual one, replace by the max in the data
  // var maxValue = max(cfg.maxValue, d3.max(data, function(i){return d3.max(i.map(function(o){return o.value;}))}));
  let maxValue = 0;
  //   for (let j = 0; j < data.length; j++) {
  for (let i = 0; i < data.axes.length; i++) {
    data.axes[i]["id"] = data.name;
    if (data.axes[i]["value"] > maxValue) {
      maxValue = data.axes[i]["value"];
    }
    // }
  }
  maxValue = max(cfg.maxValue, maxValue);

  const allAxis = data.axes.map((i, j) => i.axis), //Names of each axis
    total = allAxis.length, //The number of different axes
    radius = Math.min(cfg.w / 2, cfg.h / 2), //Radius of the outermost circle
    Format = d3__WEBPACK_IMPORTED_MODULE_0__.format(cfg.format), //Formatting
    angleSlice = (Math.PI * 2) / total; //The width in radians of each "slice"

  //Scale for the radius
  const rScale = d3__WEBPACK_IMPORTED_MODULE_0__.scaleLinear().range([0, radius]).domain([0, maxValue]);

  /////////////////////////////////////////////////////////
  //////////// Create the container SVG and g /////////////
  /////////////////////////////////////////////////////////
  const parent = d3__WEBPACK_IMPORTED_MODULE_0__.select(parent_selector);

  //Remove whatever chart with the same id/class was present before
  parent.select("svg").remove();

  //Initiate the radar chart SVG
  let svg = parent
    .append("svg")
    .attr("width", cfg.w + cfg.margin.left + cfg.margin.right)
    .attr("height", cfg.h + cfg.margin.top + cfg.margin.bottom)
    .attr("class", "radar");

  //Append a g element
  let g = svg
    .append("g")
    .attr(
      "transform",
      "translate(" +
        (cfg.w / 2 + cfg.margin.left) +
        "," +
        (cfg.h / 2 + cfg.margin.top) +
        ")"
    );

  /////////////////////////////////////////////////////////
  ////////// Glow filter for some extra pizzazz ///////////
  /////////////////////////////////////////////////////////

  //Filter for the outside glow
  let filter = g.append("defs").append("filter").attr("id", "glow");
  filter.append("feGaussianBlur")
      .attr("stdDeviation", "2.5")
      .attr("result", "coloredBlur");
  let feMerge = filter.append("feMerge");
  feMerge.append("feMergeNode").attr("in", "coloredBlur");
  feMerge.append("feMergeNode").attr("in", "SourceGraphic");

  /////////////////////////////////////////////////////////
  /////////////// Draw the Circular grid //////////////////
  /////////////////////////////////////////////////////////

  //Wrapper for the grid & axes
  let axisGrid = g.append("g").attr("class", "axisWrapper");

  //Draw the background circles
  axisGrid
    .selectAll(".levels")
    .data(d3__WEBPACK_IMPORTED_MODULE_0__.range(1, cfg.levels + 1).reverse())
    .enter()
    .append("circle")
    .attr("class", "gridCircle")
    .attr("r", (d) => (radius / cfg.levels) * d)
    .style("fill", "#CDCDCD")
    .style("stroke", "#CDCDCD")
    .style("fill-opacity", cfg.opacityCircles)
    .style("filter", "url(#glow)");

  //Text indicating at what % each level is
  axisGrid
    .selectAll(".axisLabel")
    .data(d3__WEBPACK_IMPORTED_MODULE_0__.range(1, cfg.levels + 1).reverse())
    .enter()
    .append("text")
    .attr("class", "axisLabel")
    .attr("x", 4)
    .attr("y", (d) => (-d * radius) / cfg.levels)
    .attr("dy", "0.4em")
    .style("font-size", "10px")
    .attr("fill", "#737373")
    .text((d) => Format((maxValue * d) / cfg.levels) + cfg.unit);

  /////////////////////////////////////////////////////////
  //////////////////// Draw the axes //////////////////////
  /////////////////////////////////////////////////////////

  //Create the straight lines radiating outward from the center
  var axis = axisGrid
    .selectAll(".axis")
    .data(allAxis)
    .enter()
    .append("g")
    .attr("class", "axis");
  //Append the lines
  axis
    .append("line")
    .attr("x1", 0)
    .attr("y1", 0)
    .attr(
      "x2",
      (d, i) => rScale(maxValue * 1.1) * cos(angleSlice * i - HALF_PI)
    )
    .attr(
      "y2",
      (d, i) => rScale(maxValue * 1.1) * sin(angleSlice * i - HALF_PI)
    )
    .attr("class", "line")
    .style("stroke", "white")
    .style("stroke-width", "2px");

  //Append the labels at each axis
  axis
    .append("text")
    .attr("class", "legend")
    .style("font-size", "8px")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em")
    .attr(
      "x",
      (d, i) =>
        rScale(maxValue * cfg.labelFactor) * cos(angleSlice * i - HALF_PI)
    )
    .attr(
      "y",
      (d, i) =>
        rScale(maxValue * cfg.labelFactor) * sin(angleSlice * i - HALF_PI)
    )
    .text((d) => d)
    .call(wrap, cfg.wrapWidth);

  //The radial line function
  var radarLine = d3__WEBPACK_IMPORTED_MODULE_0__.radialLine()
    .curve(d3__WEBPACK_IMPORTED_MODULE_0__.curveLinearClosed)
    .radius((d) => rScale(d.value))
    .angle((d, i) => {return i * angleSlice});

  if (cfg.roundStrokes) {
    radarLine.curve(d3__WEBPACK_IMPORTED_MODULE_0__.curveCardinalClosed);
  }

  //Create a wrapper for the blobs
  var blobWrapper = g
    .selectAll(".radarWrapper")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "radarWrapper");

  //Append the backgrounds
  blobWrapper
    .append("path")
    .attr("class", "radarArea")
    .attr("d", (d) => radarLine(d.axes))
    .style("fill", (d, i) => cfg.color(i))
    .style("fill-opacity", cfg.opacityArea)
    .on("mouseover", function (d, i) {
      //Dim all blobs
      parent
        .selectAll(".radarArea")
        .transition()
        .duration(200)
        .style("fill-opacity", 0.1);
      //Bring back the hovered over blob
      d3__WEBPACK_IMPORTED_MODULE_0__.select(this).transition().duration(200).style("fill-opacity", 0.7);
    })
    .on("mouseout", () => {
      //Bring back all blobs
      parent
        .selectAll(".radarArea")
        .transition()
        .duration(200)
        .style("fill-opacity", cfg.opacityArea);
    });

  //Create the outlines
  blobWrapper
    .append("path")
    .attr("class", "radarStroke")
    .attr("d", function (d, i) {
      return radarLine(d.axes);
    })
    .style("stroke-width", cfg.strokeWidth + "px")
    .style("stroke", (d, i) => cfg.color(i))
    .style("fill", "none")
    .style("filter", "url(#glow)");

  //Append the circles
  blobWrapper
    .selectAll(".radarCircle")
    .data((d) => d.axes)
    .enter()
    .append("circle")
    .attr("class", "radarCircle")
    .attr("r", cfg.dotRadius)
    .attr("cx", (d, i) => {
      return rScale(d.value) * cos(angleSlice * i - HALF_PI);
    })
    .attr("cy", (d, i) => {
      return rScale(d.value) * sin(angleSlice * i - HALF_PI);
    })
    .style("fill", (d) => cfg.color(d.id))
    .style("fill-opacity", 0.8);

  /////////////////////////////////////////////////////////
  //////// Append invisible circles for tooltip ///////////
  /////////////////////////////////////////////////////////

  //Wrapper for the invisible circles on top
  var blobCircleWrapper = g
    .selectAll(".radarCircleWrapper")
    .data(data)
    .enter()
    .append("g")
    .attr("class", "radarCircleWrapper");

  //Append a set of invisible circles on top for the mouseover pop-up
  blobCircleWrapper
    .selectAll(".radarInvisibleCircle")
    .data((d) => d.axes)
    .enter()
    .append("circle")
    .attr("class", "radarInvisibleCircle")
    .attr("r", cfg.dotRadius * 1.5)
    .attr("cx", (d, i) => rScale(d.value) * cos(angleSlice * i - HALF_PI))
    .attr("cy", (d, i) => rScale(d.value) * sin(angleSlice * i - HALF_PI))
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mouseover", function (d, i) {
      tooltip
        .attr("x", this.cx.baseVal.value - 10)
        .attr("y", this.cy.baseVal.value - 10)
        .transition()
        .style("display", "block")
        .text(Format(d.value) + cfg.unit);
    })
    .on("mouseout", function () {
      tooltip.transition().style("display", "none").text("");
    });

  const tooltip = g
    .append("text")
    .attr("class", "tooltip")
    .attr("x", 0)
    .attr("y", 0)
    .style("font-size", "12px")
    .style("display", "none")
    .attr("text-anchor", "middle")
    .attr("dy", "0.35em");

  if (cfg.legend !== false && typeof cfg.legend === "object") {
    let legendZone = svg.append("g");
    let names = data.map((el) => el.name);
    if (cfg.legend.title) {
      legendZone
        .append("text")
        .attr("class", "title")
        .attr(
          "transform",
          `translate(${cfg.legend.translateX},${cfg.legend.translateY})`
        )
        .attr("x", cfg.w - 70)
        .attr("y", 10)
        .attr("font-size", "12px")
        .attr("fill", "#404040")
        .text(cfg.legend.title);
    }
    let legend = legendZone
      .append("g")
      .attr("class", "legend")
      .attr("height", 100)
      .attr("width", 200)
      .attr(
        "transform",
        `translate(${cfg.legend.translateX},${cfg.legend.translateY + 20})`
      );
    // Create rectangles markers
    legend
      .selectAll("rect")
      .data(names)
      .enter()
      .append("rect")
      .attr("x", cfg.w - 65)
      .attr("y", (d, i) => i * 20)
      .attr("width", 10)
      .attr("height", 10)
      .style("fill", (d, i) => cfg.color(i));
    // Create labels
    legend
      .selectAll("text")
      .data(names)
      .enter()
      .append("text")
      .attr("x", cfg.w - 52)
      .attr("y", (d, i) => i * 20 + 9)
      .attr("font-size", "11px")
      .attr("fill", "#737373")
      .text((d) => d);
  }
  return svg;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadarChart);


/***/ }),

/***/ "./txsrc/views/Pages/D3/MapComponents/PopulationCircles.js":
/*!*****************************************************************!*\
  !*** ./txsrc/views/Pages/D3/MapComponents/PopulationCircles.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const PopulationCircles = (
  population,
  groupOne,
  groupTwo,
  groupThree,
  mapXOffSet,
  coords,
  graphRad,
  lables,
  d3,
  nameOfCity,
  angleScale,
  rectsLength
) => {
  const arcGenerator = d3
    .arc()
    .innerRadius(60)
    .outerRadius(function (d) {
      return outer(d.data);
    });

  const outer = d3
    .scaleLinear()
    .domain([+population.data[0].Min2011, +population.data[0].Max2011])
    .range([62, 70]);

  const pieColorScale = d3
    .scaleSequential()
    .domain([+population.data[0].Min1991, +population.data[0].Max1991])
    .interpolator(d3.interpolateBuPu);

  const popCityName = population.data.map((data) => {
    return data.City;
  });

  let populations = {
    popOne: 0,
    popTwo: 0,
    popThree: 0,
  };
  for (let i = 0; i < 3; i++) {
    let data;
    let groupContainer;

    if (i === 0) {
      data = population.data.map((data) => {
        return +data.Population1991;
      });
      groupContainer = groupOne;
    } else if (i === 1) {
      data = population.data.map((data) => {
        return +data.Population2001;
      });
      groupContainer = groupTwo;
    } else if (i === 2) {
      data = population.data.map((data) => {
        return +data.Population2011;
      });
      groupContainer = groupThree;
    }
    data.splice(0, 2);
    const popScale = d3.pie()(data);
    const populationOne = population.data.map((data) => {
      return +data.Population1991;
    });
    const cOne = groupContainer.selectAll("path").data(populationOne);
    cOne.exit().remove();

    cOne
      .select("path")
      .data(popScale)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .style("fill", function (d, i) {
        if (nameOfCity === popCityName[i]) {
          populations.popOne = population.data[i].Population1991;
          populations.popTwo = population.data[i].Population2001;
          populations.popThree = population.data[i].Population2011;
          return "#9C3C41";
        } else {
          return pieColorScale(data[i]);
        }
      })
      .style("stroke-width", "none")
      .transition()
      .ease(d3.easePoly)
      .duration(1000)
      .attrTween("d", arcTween);

    const groupTx = mapXOffSet + coords[0] + graphRad * Math.cos(angleScale(i));
    const groupTy = coords[1] + graphRad * Math.sin(angleScale(i));

    groupContainer.attr(
      "transform",
      "translate(" + groupTx + "," + groupTy + ")"
    );
    function arcTween(d) {
      const i = d3.interpolateNumber(70, 60);
      return function (t) {
        const r = i(t),
          arc = d3
            .arc()
            .outerRadius(function (d) {
              return outer(d.data);
            })
            .innerRadius(r);
        return arc(d);
      };
    }

    lables.attr(
      "transform",
      "translate(" + (groupTx + 110) + "," + groupTy + ")"
    );

    let textContainer = lables.selectAll("text").data(rectsLength);
    let formatComma = d3.format(",");
    textContainer.exit().remove();

    textContainer
      .select("text")
      .data(rectsLength)
      .enter()
      .append("text")
      .attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y + 5;
      })
      .text(function (d) {
        return d.text;
      })
      .attr("width", 20)
      .attr("fill", "#B0B2B8")
      .attr("font-size", 11)
      .style("opacity", 1);

    textContainer
      .select("text")
      .data(rectsLength)
      .enter()
      .append("text")
      .attr("x", function (d) {
        if (
          formatComma(populations.popOne) === "NaN" ||
          formatComma(populations.popTwo) === "NaN" ||
          formatComma(populations.popThree) === "NaN"
        ) {
          return d.x - 20;
        } else {
          return d.x - 28;
        }
      })
      .attr("y", function (d) {
        return d.y + 25;
      })
      .text(function (d, i) {
        switch (i) {
          case 0:
            if (formatComma(populations.popOne) === "NaN") {
              return "Data Missing";
            }
            return formatComma(populations.popOne);
          case 1:
            if (formatComma(populations.popTwo) === "NaN") {
              return "Data Missing";
            }
            return formatComma(populations.popTwo);
          case 2:
            if (formatComma(populations.popThree) === "NaN") {
              return "Data Missing";
            }
            return formatComma(populations.popThree);
          default:
            return formatComma(0);
        }
      })
      .attr("width", 20)
      .style("fill", "#E4E5E7")
      .style("font-size", 11);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopulationCircles);


/***/ }),

/***/ "./txsrc/views/Pages/D3/MapMouseControles/StationsClick.js":
/*!*****************************************************************!*\
  !*** ./txsrc/views/Pages/D3/MapMouseControles/StationsClick.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_staticVariables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/staticVariables */ "./txsrc/views/Pages/D3/data/staticVariables.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ "./txsrc/views/Pages/D3/utilities.js");
/* harmony import */ var _MapComponents_PopulationCircles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MapComponents/PopulationCircles */ "./txsrc/views/Pages/D3/MapComponents/PopulationCircles.js");
/* harmony import */ var _ExternalResource_RadarChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ExternalResource/RadarChart */ "./txsrc/views/Pages/D3/ExternalResource/RadarChart.js");





const stationsClick = (
  population,
  months,
  yearSelected,
  generatedGroups,
  d3,
  mapXOffSet,
  selected
) => {
  const cityLables = generatedGroups.cityLables;
  const ellipseContainer = generatedGroups.ellipseContainer;
  const groupOne = generatedGroups.groupOne;
  const groupTwo = generatedGroups.groupTwo;
  const groupThree = generatedGroups.groupThree;
  const lables = generatedGroups.lables;
  const rainGroup = generatedGroups.rainGroup;

  const graphRad = 120;
  const coords = [
    selected.transform.animVal[0].matrix.e,
    selected.transform.animVal[0].matrix.f,
  ];
  let nameOfCity = selected.id;

  cityLables.selectAll("text").remove();

  d3.selectAll("circle").classed("clicked", false);
  d3.select(selected).classed("clicked", true);

  let circleTransition = d3.transition().ease(d3.easePoly).duration(1000);

  d3.transition().ease(d3.easePoly).duration(1000);

  let ellipses = ellipseContainer
    .selectAll("ellipse")
    .data(_data_staticVariables__WEBPACK_IMPORTED_MODULE_0__.staticState.ellipsesLength);
  ellipses.exit().remove();

  ellipses
    .select("ellipse")
    .data(_data_staticVariables__WEBPACK_IMPORTED_MODULE_0__.staticState.ellipsesLength)
    .enter()
    .append("ellipse")
    .attr("class", "ellipseCan")
    .attr("cx", function (d, i) {
      return coords[0] + graphRad * Math.cos((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.angleScale)(i));
    })
    .attr("cy", function (d, i) {
      return coords[1] + graphRad * Math.sin((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.angleScale)(i));
    })
    .transition(circleTransition)
    .attr("rx", function (d) {
      return d.size;
    })
    .attr("ry", function (d) {
      return d.size;
    })
    .attr("fill", "#061621")
    .style("stroke", function (d) {
      if (d.f === "none") {
        return d.s;
      } else {
        return "url(#Gradient)";
      }
    })
    .style("stroke-width", "1.5px")
    .style("filter", "url(#graph-drop-shadow)");

  cityLables
    .selectAll("text")
    .data(_data_staticVariables__WEBPACK_IMPORTED_MODULE_0__.staticState.ellipsesLength)
    .enter()
    .append("text")
    .attr("x", function (d, i) {
      return coords[0] + graphRad * Math.cos((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.angleScale)(i));
    })
    .attr("y", function (d, i) {
      return coords[1] + graphRad * Math.sin((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.angleScale)(i)) - 20;
    })
    .text(function (d, i) {
      if (i <= 2) {
        return nameOfCity;
      }
    })
    .attr("text-anchor", "middle")
    .style("fill", "#9c3c41")
    .style("font-size", "8pt");

  d3.scaleLinear().domain([0, 63]).range([70, 0]);

  (0,_MapComponents_PopulationCircles__WEBPACK_IMPORTED_MODULE_2__["default"])(
    population,
    groupOne,
    groupTwo,
    groupThree,
    mapXOffSet,
    coords,
    graphRad,
    lables,
    d3,
    nameOfCity,
    _utilities__WEBPACK_IMPORTED_MODULE_1__.angleScale,
    _data_staticVariables__WEBPACK_IMPORTED_MODULE_0__.staticState.rectsLength
  );

  let rainGroupTx =
    mapXOffSet + coords[0] + graphRad * Math.cos((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.angleScale)(3)) - 125;
  let rainGroupTy = coords[1] + graphRad * Math.sin((0,_utilities__WEBPACK_IMPORTED_MODULE_1__.angleScale)(3)) - 125;

  rainGroup
    .attr("transform", "translate(" + rainGroupTx + "," + rainGroupTy + ")")
    .style("opacity", 1);

  let margin = {
      top: 50,
      right: 80,
      bottom: 50,
      left: 80,
    };
    // width = Math.min(700, window.innerWidth / 4) - margin.left - margin.right;
    // height = Math.min(width, window.innerHeight - margin.top - margin.bottom);

  let thisCityRain = {
    color: "#cd1d27",
    name: nameOfCity,
    axes: [{}],
  };
  months.data.map((d, i) => {
    d.Station === nameOfCity &&
      thisCityRain.axes.push({
        value: +d[`MonthlyTotal${yearSelected}`],
        axis: _data_staticVariables__WEBPACK_IMPORTED_MODULE_0__.staticState.rainMonthsName[i % 12].name,
      });
      return null;
  });
  thisCityRain.axes.splice(0, 1);
  const radarChartOptions = {
    w: 90,
    h: 150,
    margin: margin,
    levels: 2,
    roundStrokes: false,
    color: d3.scaleOrdinal().range(["#9C3C41", "#12393D", "#9C3C41"]),
    format: '.1f'
  };
  (0,_ExternalResource_RadarChart__WEBPACK_IMPORTED_MODULE_3__["default"])(".rainG", thisCityRain, radarChartOptions);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stationsClick);


/***/ })

};
;
//# sourceMappingURL=D3-stationsClick.js.map