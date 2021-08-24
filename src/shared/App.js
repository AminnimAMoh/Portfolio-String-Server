"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
//This is the 'majula'. Dark Souls fans are familiar with this place. 😅
//Here we managing the main states.
const react_1 = require("react");
// import MenuButton from "./views/MenuButton";
// import ContentContainer from "./views/ContentContainer";
// import DataFetchPending from "./views/DataFetchPending";
const AppStyle_1 = __importDefault(require("./AppStyle"));
const core_1 = require("@material-ui/core");
const react_redux_1 = require("react-redux");
const ScreenSettingsSlice_1 = require("./redux/slices/ScreenSettingsSlice");
const fetchSlice_1 = require("./redux/slices/fetchSlice");
const MenuButton = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("./views/MenuButton"))));
const ContentContainer = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("./views/ContentContainer"))));
const DataFetchPending = react_1.lazy(() => Promise.resolve().then(() => __importStar(require("./views/DataFetchPending"))));
//An easy way to apply transitions to Material-UI components.
//Pre writen transition from Material-UI.
//I could write it my self, just to show off some gadgeta. 😉
function TransitionUp(props) {
    return jsx_runtime_1.jsx(core_1.Slide, Object.assign({}, props, { direction: "up" }), void 0);
}
function App() {
    // console.clear();
    const [svgSetupTrigger, setSVGSetupTrigger] = react_1.useState(false);
    const [snackState, setSnackState] = react_1.useState(false);
    const dispatch = react_redux_1.useDispatch();
    const { buttonAction: { rootState, buttonTrigered }, dataStore: { annualrain, slums, population, months },
    //RootState is the type of Redux ToolKit for store.
    //Addresses the type for reducers, middlewares, etc.
     } = react_redux_1.useSelector((state) => state);
    const classes = AppStyle_1.default();
    //This hook listens to the size changes on the browser window.
    //The page layout will be changed on small screens.
    //More specifically this hook will toggle the flex-flow on elements listening to 'screenState'.
    //Set up at 'ScreenSettingsSlice.tsx'->
    react_1.useEffect(() => {
        if (window.innerWidth < 1280) {
            //Sending the window width size as an argument to be checked in the reducer.
            dispatch(ScreenSettingsSlice_1.rowGridToggleToReverce(window.innerWidth));
        }
    });
    react_1.useEffect(() => {
        //Chacking if all data is fetched without error from APIs.
        //If there is a problem with any of the APIs application must stop.
        //Prompt the user to trigger the fetch action for the API call with an error.
        //This condition controls the visibility of the loading component at the top of the
        //screen in Map section.
        //Untile the 'svgSetupTrigger' state is false the component will be visible.
        annualrain.state === "fulfilled" &&
            slums.state === "fulfilled" &&
            population.state === "fulfilled" &&
            months.state === "fulfilled" &&
            setSVGSetupTrigger(true);
        //In the condition of any error from any of the API calls
        //their state will be set to 'rejected' (visit fetchSlice.tsx)->
        //Show the snack bar to recall the APIs relevant to the map.
        (annualrain.state === "rejected" ||
            slums.state === "rejected" ||
            population.state === "rejected" ||
            months.state === "rejected") &&
            setSnackState(true);
    }, [annualrain.state, slums.state, population.state, months.state]);
    //This function controles click action on the snack bar.
    const snackBarRefreshAction = () => {
        //First we set the 'refresh state of the 'fetchSlice' action to trigger the fetch
        //action on the asyncThunk function with state 'rejected'.
        //In this case only the rejected API will be called, not the rest. 🤯
        //More detail at 'fetchSlice.tsx'.
        dispatch(fetchSlice_1.readDataAgain());
        //Close the snack bar.
        setSnackState(false);
    };
    return (jsx_runtime_1.jsx("div", Object.assign({ className: rootState ? `${classes.root} open` : `${classes.root} close` }, { children: jsx_runtime_1.jsxs(react_1.Suspense, Object.assign({ fallback: 'Loading...' }, { children: [!svgSetupTrigger && buttonTrigered === "D3" && (jsx_runtime_1.jsx("div", Object.assign({ className: classes.loading }, { children: jsx_runtime_1.jsx(DataFetchPending, {}, void 0) }), void 0)), jsx_runtime_1.jsx(core_1.Snackbar, { open: snackState, TransitionComponent: TransitionUp, message: `Failed to fetch data. Click here to try again.`, onClick: snackBarRefreshAction, classes: { root: classes.snackbar } }, void 0), jsx_runtime_1.jsx(MenuButton, {}, void 0), jsx_runtime_1.jsx(ContentContainer, {}, void 0)] }), void 0) }), void 0));
}
exports.default = App;
