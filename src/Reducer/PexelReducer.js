const initialState = {
  data: [],
  inputs: "",
  fun: "",
};
const PexelReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  if (type === "SET_DATA") {
    return {
      ...state,
      data: payload,
    };
  } else if (type === "SET_INPUT") {
    return {
      ...state,
      inputs: payload,
    };
  } else if (type === "FUN") {
    return {
      ...state,
      fun: payload,
    };
  } else {
    return state;
  }
};
export default PexelReducer;
