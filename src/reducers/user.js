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
    // case "ADD_USERS":
    //   return {
    //     ...state,
    //     data: [...state.data, { id: 2, name: "Pereira" }],
    //     isLoading: false
    //   };
    default:
      return state;
  }
};
