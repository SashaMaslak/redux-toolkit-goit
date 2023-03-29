import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask](state, action) {
//     state.push(action.payload);
//   },

//   [deleteTask](state, action) {
//     return state.filter(task => task.id !== action.payload);
//   },

//   [toggleCompleted](state, action) {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed;
//         break;
//       }
//     }
//   },

//   [toggleAllCompleted](state) {
//     for (const task of state) {
//       if (!task.completed) {
//         task.completed = true;
//       }
//     }
//   },

//   [deleteAllCompleted](state) {
//     return state.filter(task => !task.completed);
//   },
// });

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = createReducer(filtersInitialState, {
//   [setStatusFilter](state, action) {
//     state.status = action.payload;
//   },
// });
