import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getItemsIncorrectly = createAsyncThunk(async (url, thunkApi) => {
	thunkApi.dispatch(incorrectFetchitems)
});

export const getItemsCorrectly = createAsyncThunk(async (url, thunkApi) => {

});

const initialState = {
	items: []
};



export const otherItemsSlice = createSlice({
	name: 'Other Item Slice',
	initialState,
	reducers: {
		incorrectFetchOtherItems: (state, action) => {
			state.items = action.payload.data;
		}
	},
	extraReducers: {}
});

