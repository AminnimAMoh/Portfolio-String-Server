import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import buttonActionSlice from "./redux/slices/buttonActionSlice";
import ScreenSettingsSlice from "./redux/slices/ScreenSettingsSlice";
import FetchSlice from './redux/slices/fetchSlice';
const store = configureStore({
    reducer: {
        buttonAction: buttonActionSlice,
        screenAction: ScreenSettingsSlice,
        dataStore: FetchSlice
    },
});
export const useAppDispatch = () => useDispatch(); // Export a hook that can be reused to resolve types
export default store;
//# sourceMappingURL=store.js.map