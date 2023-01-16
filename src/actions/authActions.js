export const logIn = uname => {
  return {
    type: 'LOGIN',
    payload: {
      uname,
    },
  };
};
export const logOut = () => {
  return {
    type: 'LOGOUT',
  };
};
