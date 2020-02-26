import axios from "axios";

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
  console.log("masuk add user action");
  return {
    type: "ADD_USERS",
    payload: async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return {
        id: 1111,
        name: "Andik Setyawan",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      };
    }
  };
};
