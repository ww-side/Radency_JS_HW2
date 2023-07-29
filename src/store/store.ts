import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tableReducer from './reducers/tableSlice.ts';

const rootReducer = combineReducers({
  table: tableReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
