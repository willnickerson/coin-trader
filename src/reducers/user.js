const userReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_USER':
      debugger;
      return {
        user: action.user
      };
    default: 
      return state;
  }
}

export default userReducer;