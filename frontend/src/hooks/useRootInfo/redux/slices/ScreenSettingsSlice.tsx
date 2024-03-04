import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState={
    gridRowToReverce: 'row',
    gridRowToColumn: 'row',
    screenState: 'wide'
}

const windowSettingsSlice=createSlice({
    name: 'ScreenSettings',
    initialState,
    reducers:{
        rowGridToggleToReverse(state: any, action: PayloadAction<number>){
            state.gridRowToReverce='column-reverse';
            if(action.payload<1280){
              state.screenState='limited';
              state.gridRowToColumn='column';  
            } 
        }
    }
})

export const {rowGridToggleToReverse}=windowSettingsSlice.actions;

export default windowSettingsSlice.reducer