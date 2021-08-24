"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const react_redux_1 = require("react-redux");
const buttonActionSlice_1 = __importDefault(require("./redux/slices/buttonActionSlice"));
const ScreenSettingsSlice_1 = __importDefault(require("./redux/slices/ScreenSettingsSlice"));
const fetchSlice_1 = __importDefault(require("./redux/slices/fetchSlice"));
const store = toolkit_1.configureStore({
    reducer: {
        buttonAction: buttonActionSlice_1.default,
        screenAction: ScreenSettingsSlice_1.default,
        dataStore: fetchSlice_1.default
    },
});
const useAppDispatch = () => react_redux_1.useDispatch(); // Export a hook that can be reused to resolve types
exports.useAppDispatch = useAppDispatch;
exports.default = store;
