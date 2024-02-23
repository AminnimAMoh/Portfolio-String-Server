import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReviewContentView } from "@pages/ReviewContentJourney/ReviewContentJourney.constants";
// import {Positions} from '../../views/MenuButton/types'

interface initialType {
  rootState: boolean;
  delayState: boolean;
  direction: boolean;
  buttonTriggered: string;
  renderPage: string;
  // data: MenuData[];
}

interface MenuData {
  name: string;
  img: string;
  toolKit: string;
  info: string;
  width: number;
}

const initialState: initialType = {
  rootState: false,
  delayState: true,
  direction: true,
  buttonTriggered: "",
  renderPage: "",
};

const buttonActionSlice = createSlice({
  name: "buttonAction",
  initialState,
  reducers: {
    containerStateToggle(state: any, action: PayloadAction<string>) {
      state.rootState = action.payload === "PowerButton" ? false : true;
      state.buttonTriggered =
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

export const { containerStateToggle, onDelayStateChange } =
  buttonActionSlice.actions;

export default buttonActionSlice.reducer;
