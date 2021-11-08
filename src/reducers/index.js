import * as calculation from "../actions/index";

const initialState = {
  counter:0
}

const reducerCalculation = (state = initialState, actions)=>{
    switch (actions.type) {
      case calculation.ADD:
        console.log(`actions`, actions)
        return {
          ...state, counter: state.counter + actions.value
        }
        case calculation.SUB:
        console.log(`actions`, actions)
        return {
          ...state, counter: state.counter - actions.value
        }
        case calculation.MUL:
        console.log(`actions`, actions)
        return {
          ...state, counter: state.counter * actions.value
        }
      default:
        return state;
    }
};
export default reducerCalculation;