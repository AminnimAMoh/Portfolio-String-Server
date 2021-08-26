import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    gridRowToReverce: 'row',
    gridRowToColumn: 'row',
    screenState: 'wide'
};
const windowSettingsSlice = createSlice({
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
export const { rowGridToggleToReverce } = windowSettingsSlice.actions;
export default windowSettingsSlice.reducer;
//# sourceMappingURL=ScreenSettingsSlice.js.map