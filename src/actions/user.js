import axios from "axios";
export const getUsersPending = () => {
  return {
    type: "GET_USERS_PENDING",
    payload: {}
  };
};

export const getUsers = () => {
  console.log("getusers");
  return {
    type: "GET_USERS",
    payload: async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("ressss", res.data);
      return res.data;
    }
  };
  //   return dispatch => {
  //     setTimeout(() => {
  //       dispatch({
  //         type: "GET_USERS",
  //         payload: {}
  //       });
  //     }, 3000);
  //   };

  //   return {
  //     type: "GET_USERS",
  //     payload: {}
  //   };
};

export const addUsers = () => {
  return {
    type: "ADD_USERS",
    payload: {}
  };
};
