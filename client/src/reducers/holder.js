export default (share = [], action) => {
  switch (action.type) {
    case "FETCH":
      return action.payload;
    case "CREATE_SHARE":
      return [...share, action.payload];
    default:
      return share;
  }
};
