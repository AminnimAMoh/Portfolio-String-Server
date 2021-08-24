"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowGridToggleToReverce = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    gridRowToReverce: 'row',
    gridRowToColumn: 'row',
    screenState: 'wide'
};
const windowSettingsSlice = toolkit_1.createSlice({
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
exports.rowGridToggleToReverce = windowSettingsSlice.actions.rowGridToggleToReverce;
exports.default = windowSettingsSlice.reducer;
