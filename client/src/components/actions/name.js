import * as API from "../api/index";

export const fetchName = () => async (dispatch) => {
  try {
    const { data } = await API.getName();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
