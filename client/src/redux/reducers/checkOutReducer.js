const checkOutReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE":
      return (state = !state);
    default:
      return state;
  }
};

export default checkOutReducer;
