
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputText: '',
  outputText: '',
  conversionType: 'base64',
};

const textUtilsSlice = createSlice({
  name: 'textUtils',
  initialState,
  reducers: {
    setInputText(state, action) {
      state.inputText = action.payload;
    },
    setOutputText(state, action) {
      state.outputText = action.payload;
    },
    setConversionType(state, action) {
      state.conversionType = action.payload;
    },
  },
});

export const { setInputText, setOutputText, setConversionType } = textUtilsSlice.actions;
export default textUtilsSlice.reducer;
