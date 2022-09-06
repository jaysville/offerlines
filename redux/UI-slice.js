import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui-slice",
  initialState: { showSalesModal: false },
  reducers: {
    toggleModalVisibility(state, action) {
      state.showSalesModal = !state.showSalesModal;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
