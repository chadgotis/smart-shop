export const incrementOrder = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};

export const decrementOrder = (id) => {
  return {
    type: "DECREMENT",
    payload: id,
  };
};
