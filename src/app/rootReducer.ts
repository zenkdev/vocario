import { combineReducers } from 'redux';

import dictionariesReducer from '../features/dictionaries/dictionariesSlice';
import visibilityFilterReducer from '../features/filters/filtersSlice';
import todosReducer from '../features/todos/todosSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
  dictionaries: dictionariesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
