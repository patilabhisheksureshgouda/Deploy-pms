export const initialState = {
  user: null,
  admin: null,
  staff: null
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_ADMIN: "SET_ADMIN",
  SET_STAFF: "SET_STAFF",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case actionTypes.SET_ADMIN:
      return {
        ...state,
        admin: action.admin,
      };
      case actionTypes.SET_STAFF:
        return {
          ...state,
          staff: action.staff,
        };
    default:
      return state;
  }
};

export default reducer;
