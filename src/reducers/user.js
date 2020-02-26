const initState = {
  data: [],
  isLoading: false,
  isError: false
};

export const user = (state = initState, action) => {
  switch (action.type) {
    case "GET_USERS_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_USERS_FULFILLED":
      console.log("payload", action.payload);
      return {
        ...state,
        // data: [...state.data, ...action.payload],
        data: action.payload,
        isLoading: false
      };
    case "GET_USERS_REJECTED":
      console.log("payload", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case "ADD_USERS_PENDING":
      console.log("masuk ad ");

      return {
        ...state,
        isLoading: true
      };
    case "ADD_USERS_FULFILLED":
      console.log("masuk ad 2");
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false
      };
    case "ADD_USERS_REJECTED":
      console.log("masuk ad 3");

      //  console.log("payload", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return state;
  }
};
