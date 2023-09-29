"use strict";
exports.id = "D3-removeFunction";
exports.ids = ["D3-removeFunction"];
exports.modules = {

/***/ "./txsrc/views/Pages/D3/MapComponents/RemoveFunction.js":
/*!**************************************************************!*\
  !*** ./txsrc/views/Pages/D3/MapComponents/RemoveFunction.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const removeFunction = (d3, container, generatedGroups) => {
  const cityLables = generatedGroups.cityLables;
  const ellipseContainer = generatedGroups.ellipseContainer;
  const groupOne = generatedGroups.groupOne;
  const groupTwo = generatedGroups.groupTwo;
  const groupThree = generatedGroups.groupThree;
  const lables = generatedGroups.lables;
  const cityCircles = generatedGroups.cityCircles;

  cityLables.selectAll("text").remove();
  let ellipseG = ellipseContainer.selectAll("ellipse");
  ellipseG.transition().duration(500).attr("rx", "0").attr("ry", "0");

  let pathOne = groupOne.selectAll("path");
  pathOne
    .transition()
    .ease(d3.easePoly)
    .duration(1000)
    .attrTween("d", arcTweenClose)
    .style("opacity", 0);

  pathOne = groupTwo.selectAll("path");
  pathOne
    .transition()
    .ease(d3.easePoly)
    .duration(1000)
    .attrTween("d", arcTweenClose)
    .style("opacity", 0);

  pathOne = groupThree.selectAll("path");
  pathOne
    .transition()
    .ease(d3.easePoly)
    .duration(1000)
    .attrTween("d", arcTweenClose)
    .style("opacity", 0);

  container
    .select(".rainG")
    .transition()
    .duration(500)
    .style("opacity", 0);

  lables
    .selectAll("text")
    .transition()
    .duration(500)
    .style("opacity", 0);

  cityCircles
    .selectAll("circle")
    .classed("clicked", false);

  function arcTweenClose(d) {
    let i = d3.interpolateNumber(70, 0);
    return function (t) {
      let r = i(t),
        arc = d3
          .arc()
          .outerRadius(r - 2)
          .innerRadius(r);
      return arc(d);
    };
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removeFunction);


/***/ })

};
;
//# sourceMappingURL=D3-removeFunction.js.map