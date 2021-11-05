import * as api from "../api/index";

export const getAllShare = () => async (dispatch) => {
  try {
    const { data } = await api.getShare();
    dispatch({ type: "FETCH", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createShare = (newShare) => async (dispatch) => {
  try {
    const { data } = await api.createShare(newShare);
    dispatch({ type: "CREATE_SHARE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
