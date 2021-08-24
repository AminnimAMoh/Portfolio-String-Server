"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDelayStateChange = exports.containerStateToggle = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    rootState: false,
    delayState: true,
    direction: true,
    buttonTrigered: "",
    renderPage: "",
    data: [
        {
            name: "D3",
            img: "images/Button/Menu_List/Map.png",
            toolKit: "D3.js Project",
            info: 'My Name is Amin a React.js Front End Dev',
            width: 200,
        },
        {
            name: "Info",
            img: "images/Button/Menu_List/info.png",
            toolKit: "Who am I",
            info: 'Thank you for your visit.!!!',
            width: 90,
        },
        {
            name: "CV",
            img: "images/Button/Menu_List/CV.png",
            toolKit: "Resume",
            info: '',
            // info: 'I am a React.js Front-End Developer',
            width: 90,
        },
        {
            name: "UX",
            img: "images/Button/Menu_List/UX.png",
            toolKit: "UX Design Case Study",
            // info: 'Following menu helps you to findout more about me!!!',
            info: '',
            width: 150,
        },
        {
            name: "UI",
            img: "images/Button/Menu_List/UI.png",
            toolKit: "React.js User Interaction",
            // info: 'Thanks.',
            info: '',
            width: 90,
        },
        {
            name: "CP",
            img: "images/Button/Menu_List/ColorPalette.png",
            toolKit: "P5.js Image to Color palette",
            info: 'Hello!!!',
            width: 150,
        },
    ],
};
const buttonActionSlice = toolkit_1.createSlice({
    name: "buttonAction",
    initialState,
    reducers: {
        containerStateToggle(state, action) {
            state.rootState = action.payload === "PowerButton" ? false : true;
            state.buttonTrigered =
                action.payload === "PowerButton" ? " " : action.payload;
            state.renderPage =
                action.payload === "PowerButton" ? " " : action.payload;
            state.delayState = false;
        },
        onDelayStateChange(state) {
            state.delayState = true;
        },
        // addButtonsPosition(state, {payload}: PayloadAction<Positions[]>){
        //   console.log(payload);
        // }
    },
});
_a = buttonActionSlice.actions, exports.containerStateToggle = _a.containerStateToggle, exports.onDelayStateChange = _a.onDelayStateChange;
exports.default = buttonActionSlice.reducer;
