export default (order = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...order, action.payload];
    case "GET_ALL":
      return action.payload;
    default:
      return order;
  }
};
