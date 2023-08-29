import { configureStore } from '@reduxjs/toolkit'
import { itemsSlice, otherItemsSlice } from "./slices.js";

export const store = configureStore({
	reducer: {
		otherItems: otherItemsSlice,
		items: itemsSlice
	},
});