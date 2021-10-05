import * as api from "../api/index";

export const createOrder = (order) => async (dispatch) => {
  try {
    const { data } = await api.createPost(order);
    console.log(order);
    console.log(data);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
