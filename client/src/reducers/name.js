export default (order = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...order, action.payload];
    default:
      return order;
  }
};
