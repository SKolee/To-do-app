const authReducer = (state = [{isLoggedIn: false}], action) => {
  switch (action.type) {
    case 'LOGIN':
      console.log('Logged In called', action.payload.uname);
      return {...state, isLoggedIn: true};

    case 'LOGOUT':
      console.log('Logged Out called');
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
};

export default authReducer;
