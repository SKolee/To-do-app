import {combineReducers} from 'redux';
import authReducer from './authReducer';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const {id, data, completed} = action.payload;
      return data ? [...state, {id, data, completed}] : state;

    case 'DELETE_TODO':
      const newList = state.filter(elem => elem.id !== action.id);
      return newList;

    case 'EDIT_TODO':
      const editedList = state.map(todo =>
        todo.id === action.payload.id
          ? {...todo, data: action.payload.updatedData}
          : todo,
      );

      return editedList;

    case 'TOGGLE_TODO':
      const toggleText = state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );

      console.log(toggleText);

      return toggleText;

    default:
      return state;
  }
};

const rootReducers = combineReducers({
  todoReducer,
  authReducer,
});

export default rootReducers;
