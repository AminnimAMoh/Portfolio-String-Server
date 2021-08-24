"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const d3_selection_1 = require("d3-selection");
const draw_1 = require("./draw");
const react_redux_1 = require("react-redux");
const fetchSlice_1 = require("../../../redux/slices/fetchSlice");
function D3() {
    const { 
    //Distructing the 'dataStore' slice from the store for a easier and more clear use
    //in the code.
    dataStore: { annualrain, slums, population, months, refresh }, } = react_redux_1.useSelector((state) => state);
    const dispatch = react_redux_1.useDispatch();
    const svgRef = react_1.useRef(null);
    const [svgSetupTrigger, setSVGSetupTrigger] = react_1.useState(false);
    //Constructing a state variable to reserve the SVG canvas.
    const [svg, setSvg] = react_1.useState(null);
    //This useEffect calls for the asyncThunk functions to call the relevant API.
    //To fetch needed data required for the Bangladesh Map section.
    //In this visualization we have used Bangladesh Annual Rain Total for all stations,
    //Total Slums population in three years.
    //Total population of each station (city).
    //Total rain for each month for each station for the selected year.
    react_1.useEffect(() => {
        if (annualrain.state === "empty" || annualrain.state === "rejected")
            dispatch(fetchSlice_1.fetchAnnualrainData());
        if (slums.state === "empty" || slums.state === "rejected")
            dispatch(fetchSlice_1.fetchSlumsData());
        if (population.state === "empty" || population.state === "rejected")
            dispatch(fetchSlice_1.fetchPopulationData());
        if (months.state === "empty" || months.state === "rejected")
            dispatch(fetchSlice_1.fetchMonthData());
        //No Dependencies
        //Only runs once
    }, [refresh, annualrain.state, slums.state, population.state, months.state, dispatch]);
    //This useEffect Hook listens to changes on the states of all four relevant APIs.
    //These states are set using asyncThunk functions. (visit fetchSlice.tsx)->
    //Any change in the state of each API call relevant to the Bangladesh data will trigger this hook.
    //Mainly prevents the application to exceed empty datasets.
    react_1.useEffect(() => {
        //If all APIs relevant to map responded with 200 code
        //and state has set to 'fulfilled' by the fetch slice (visit fetchSlice.tsx)->
        //We go-ahead to set up the map SVG.
        //This condition prevents the duplications of our map SVG.
        annualrain.state === "fulfilled" &&
            slums.state === "fulfilled" &&
            population.state === "fulfilled" &&
            months.state === "fulfilled" &&
            setSVGSetupTrigger(true);
        //Dependencies
        //Conditions to retriggre this hook.
    }, [annualrain.state, slums.state, population.state, months.state]);
    //This useEffect hook creates the SVG container for the map
    //when the conditions are right.
    //The conditions involved in this process are:
    //If the SVG variable reserving the SVG component is empty.
    //If all data set are successfully filled from our APIs.
    react_1.useEffect(() => {
        //Using useRef hook helps to directly access the HTML element
        //to inject the SVG canvas in to.
        !svg && svgSetupTrigger && setSvg(d3_selection_1.select(svgRef.current));
        annualrain.data.length > 0 &&
            svg &&
            draw_1.draw(svg, svgRef, annualrain, slums, population, months);
        //Dependencies
        //Conditions to retriggre this hook.
    }, [svg, svgSetupTrigger, annualrain, slums, population, months]);
    return (jsx_runtime_1.jsx("div", Object.assign({ style: { width: "100%", height: "100%" } }, { children: jsx_runtime_1.jsx("svg", { style: { width: "100%", height: "100%" }, ref: svgRef }, void 0) }), void 0));
}
exports.default = D3;
