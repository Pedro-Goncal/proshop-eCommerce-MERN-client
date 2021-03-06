//LOGIN REDUCER
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "USER_LOGOUT":
      return {};
    default:
      return state;
  }
};

//REGISTER REDUCER
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_REGISTER_REQUEST":
      return { loading: true };
    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//USER DETAILS REDUCER
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "USER_DETAILS_REQUEST":
      return { ...state, loading: true };
    case "USER_DETAILS_SUCCESS":
      return { loading: false, user: action.payload };
    case "USER_DETAILS_FAIL":
      return { loading: false, error: action.payload };
    case "USER_DETAILS_RESET":
      return {
        user: {},
      };
    default:
      return state;
  }
};

//USER UPDATE PROFILE REDUCER
export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE_PROFILE_REQUEST":
      return { loading: true };
    case "USER_UPDATE_PROFILE_SUCCESS":
      return { loading: false, success: true, userInfo: action.payload };
    case "USER_UPDATE_PROFILE_FAIL":
      return { loading: false, error: action.payload };
    case "USER_UPDATE_PROFILE_RESET":
      return {};
    default:
      return state;
  }
};

//USER LIST REDUCER
export const userListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "USER_LIST_REQUEST":
      return { loading: true };
    case "USER_LIST_SUCCESS":
      return { loading: false, users: action.payload };
    case "USER_LIST_FAIL":
      return { loading: false, error: action.payload };
    case "USER_LIST_RESET":
      return { users: [] };
    default:
      return state;
  }
};

//USER DELETE REDUCER
export const userDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_DELETE_REQUEST":
      return { loading: true };
    case "USER_DELETE_SUCCESS":
      return { loading: false, success: true };
    case "USER_DELETE_FAIL":
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

//USER UPDATE REDUCER
export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE_REQUEST":
      return { loading: true };
    case "USER_UPDATE_SUCCESS":
      return { loading: false, success: true };
    case "USER_UPDATE_FAIL":
      return { loading: false, error: action.payload };
    case "USER_UPDATE_RESET":
      return { user: {} };

    default:
      return state;
  }
};