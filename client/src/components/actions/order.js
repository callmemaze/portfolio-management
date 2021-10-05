import * as api from "../api/index";

export const createOrder = (order) => async (dispatch) => {
  try {
    const { data } = await api.createPost(order);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
