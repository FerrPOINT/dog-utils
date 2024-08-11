
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [],
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    removeEvent(state, action) {
      state.events = state.events.filter(event => event.id !== action.payload);
    },
    editEvent(state, action) {
      const index = state.events.findIndex(event => event.id === action.payload.id);
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
  },
});

export const { addEvent, removeEvent, editEvent } = eventsSlice.actions;
export default eventsSlice.reducer;
