const initialState = {
  data: [],
  
};
const PexelReducer = (state = initialState, action) => {
  const { type, payload } = action;
  console.log(action);
  if (type === "SET_DATA") {
    return {
      ...state,
      data: payload,
    };
  } else {
    return state;
  }
};
export default PexelReducer;
