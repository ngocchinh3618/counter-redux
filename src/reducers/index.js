import * as calculation from "../actions/index";

const initialState = {
  counter:0
}

const reducerCalculation = (state = initialState, actions)=>{
    switch (actions.type) {
      case calculation.ADD:
        console.log(actions);
        return {
          ...state, counter: actions.value + state.counter
        }
      default:
        return state;
    }
};
export default reducerCalculation;