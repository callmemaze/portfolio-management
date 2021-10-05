export default (order = [], action) => {
  switch (action.type) {
    case "CREATE":
      return [...order, action.payload];
    default:
      return order;
  }
};
