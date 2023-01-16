//action creators
export const addTodo = data => {
  return {
    type: 'ADD_TODO',
    payload: {
      id: new Date().getTime().toString(),
      data,
      completed: false,
    },
  };
};
export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id,
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  };
};
export const editTodo = (id, updatedData) => {
  return {
    type: 'EDIT_TODO',
    payload: {
      id,
      updatedData,
    },
  };
};
