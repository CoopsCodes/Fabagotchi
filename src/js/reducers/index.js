// A reducer takes two parameters: the current state and an action

const initialState = {
  hunger: 100
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "HUNGER":
      return {
        hunger: state.hunger - 10
      };
    default:
      return state;
  }
}
export default reducer;
