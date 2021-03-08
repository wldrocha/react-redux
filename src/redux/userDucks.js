//const
const initialData = {
  array: [],
  user: {
     id: '',
      name: '',
      phone: '',
      company: '',
      username: '',
      email: '',
      address: {
        city: ''
      },
      website: '',
  }
}

//types
const GET_USERS = "GET_USERS";
const GET_USER = "GET_USER";
const DELETE_USER = "DELETE_USER";
const UPDATE_USER = "UPDATE_USER";

//reducers

export default function userReducer(state = initialData, {type, payload}){
  switch(type){
    case GET_USERS:
      return {...state, array: payload}
    case GET_USER:
      return   {...state,
      user: state.array.filter((user) => user.id === payload)};
    case DELETE_USER:
      // return {...state.filter((user)=> user.id !== payload)}
      return {
        ...state,
          array: state.array.filter((user) => user.id !== payload)
      };
    case UPDATE_USER:
    return {
      ...state,
      array: state.array.map((user) =>
        user.id === payload.id ? (user = payload) : user
      ),
    };
    default:
      return state
  }
}

//actions

export const getUSersAction = () => async(dispatch, getState) => {
  try {
    //  if (localStorage.getItem("users")) {

      //  dispatch({
      //    type: GET_USERS,
      //    payload: JSON.parse(localStorage.getItem("users")),
      //  });
    //  }else {
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
       const data = await response.json();
       dispatch({
         type: GET_USERS,
         payload: data
       })
      //  localStorage.setItem("users", JSON.stringify(response.data));
    //  }
  } catch (error) {
    console.error('hubo un error', error)
  }
}

export const getUSerAction = (userId) => (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER,
      payload: userId,
    });
  } catch (error) {
    console.error("hubo un error", error);
  }
};

export const deletUserAction = (userId) => async (dispatch, getState) => {
  try {
    // localStorage.setItem("usersLoad", true);
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    dispatch({
      type: DELETE_USER,
      payload: userId,
    });
  } catch (error) {
    console.error("hubo un error", error);
  }
}

export const updateUserAction = (user) => async(dispatch, getState) =>{
  try {
    // localStorage.setItem("usersLoad", true);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const userUpdate = await response.json();

    dispatch({
      type: UPDATE_USER,
      payload: userUpdate,
    });
  } catch (error) {
    console.error("hubo un error", error);
  }
}