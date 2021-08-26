//All data fetching happens here.
//Stage 1 type introduction and initialState configuration.
//Stage 2 asyncThunk function to call the APIs through Axios Interceptor. No TOKEN CHECK 🤝
//Stage 3 Reducers.
//Stage 4 asyncThunk responses handling.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInterceptor from "../../axiosInterceptor";
//Configuring the main state for this slice.
const initialState = {
    refresh: false,
    errorState: false,
    annualrain: {
        data: [],
        state: "empty",
        error: "",
    },
    slums: {
        data: [],
        state: "empty",
        error: "",
    },
    population: {
        data: [],
        state: "empty",
        error: "",
    },
    months: {
        data: [],
        state: "empty",
        error: "",
    },
};
//AsyncThunk function to read 'annualrain' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.
export const fetchAnnualrainData = createAsyncThunk(
//Name of the action to be monitored in Redux console.
"fetchData/AnnualRainData", 
//Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
(_, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInterceptor().get("annualrain");
        return response.data.annualRain;
    }
    catch (err) {
        //Rejecting the action so we can change the state on error for each asyncThunk action.
        return rejectWithValue(err);
    }
}));
//AsyncThunk function to read 'slums' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.
export const fetchSlumsData = createAsyncThunk(
//Name of the action to be monitored in Redux console.
"fetchData/SlumsData", 
//Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
(_, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInterceptor().get("slums");
        return response.data.slums;
    }
    catch (err) {
        //Rejecting the action so we can change the state on error for each asyncThunk action.
        return rejectWithValue(err);
    }
}));
//AsyncThunk function to read 'population' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.
export const fetchPopulationData = createAsyncThunk(
//Name of the action to be monitored in Redux console.
"fetchData/PopulationData", 
//Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
(_, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInterceptor().get("population");
        return response.data.population;
    }
    catch (err) {
        //Rejecting the action so we can change the state on error for each asyncThunk action.
        return rejectWithValue(err);
    }
}));
//AsyncThunk function to read 'months' data from data store.
//Benefits of using asyncThunk in this case is easy API response handeling.
export const fetchMonthData = createAsyncThunk(
//Name of the action to be monitored in Redux console.
"fetchData/MonthsData", 
//Dicunstructing 'thunkAPI' and grabing 'rejectWithValue' that we will need
//for error handeling.
(_, { rejectWithValue }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axiosInterceptor().get("months");
        return response.data.monthlyTotal;
    }
    catch (err) {
        //Rejecting the action so we can change the state on error for each asyncThunk action.
        return rejectWithValue(err);
    }
}));
const FetchSlice = createSlice({
    name: "dataFetchSlice",
    initialState,
    reducers: {
        readDataAgain: (state) => {
            state.refresh = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnnualrainData.pending, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, annualrain: Object.assign(Object.assign({}, state.annualrain), { state: "pending" }) });
        })
            .addCase(fetchAnnualrainData.fulfilled, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, annualrain: Object.assign(Object.assign({}, state.annualrain), { data: action.payload, state: "fulfilled" }) });
        })
            .addCase(fetchAnnualrainData.rejected, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, annualrain: Object.assign(Object.assign({}, state.annualrain), { state: "rejected", error: action.payload }), errorState: true });
        })
            .addCase(fetchSlumsData.pending, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, slums: Object.assign(Object.assign({}, state.slums), { state: "pending" }) });
        })
            .addCase(fetchSlumsData.fulfilled, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, slums: Object.assign(Object.assign({}, state.slums), { data: action.payload, state: "fulfilled" }) });
        })
            .addCase(fetchSlumsData.rejected, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, slums: Object.assign(Object.assign({}, state.slums), { state: "rejected", error: action.payload }), errorState: true });
        })
            .addCase(fetchPopulationData.pending, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, population: Object.assign(Object.assign({}, state.population), { state: "pending", error: action.payload }) });
        })
            .addCase(fetchPopulationData.fulfilled, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, population: Object.assign(Object.assign({}, state.population), { data: action.payload, state: "fulfilled" }) });
        })
            .addCase(fetchPopulationData.rejected, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, population: Object.assign(Object.assign({}, state.population), { state: "rejected", error: action.payload }), errorState: true });
        })
            .addCase(fetchMonthData.pending, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, months: Object.assign(Object.assign({}, state.months), { state: "pending" }) });
        })
            .addCase(fetchMonthData.fulfilled, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, months: Object.assign(Object.assign({}, state.months), { data: action.payload, state: "fulfilled" }) });
        })
            .addCase(fetchMonthData.rejected, (state, action) => {
            return Object.assign(Object.assign({}, state), { refresh: false, months: Object.assign(Object.assign({}, state.months), { state: "rejected", error: action.payload }), errorState: true });
        });
    },
});
export const { readDataAgain } = FetchSlice.actions;
export default FetchSlice.reducer;
//# sourceMappingURL=fetchSlice.js.map