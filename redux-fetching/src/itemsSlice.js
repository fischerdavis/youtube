import { createSlice } from "@reduxjs/toolkit";

export const itemsSlice = createSlice({
	name: 'Item Slice',
	initialState,
	reducers: {
		incorrectFetchItems: (state, action) => {
			state.items = action.payload.data;
		}
	},
	extraReducers: {}
});


export const itemsActions = itemsSlice.actions;
export default itemsSlice.reducer;