/* === import Actions Types === */
import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT,
  COUNTER_INCREMENT_BY_AMOUNT,
  SET_COUNTER_INCREMENT_AMOUNT,
} from 'src/actions/counter';

const initialState = {
  value: 0,
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return {
        ...state,
        value: state.value + 1,
      };
    }

    case COUNTER_DECREMENT: {
      return {
        ...state,
        value: state.value - 1,
      };
    }

    case COUNTER_INCREMENT_BY_AMOUNT: {
      return {
        ...state,
        value: ((Number(parseInt(state.counterIncrementValue, 10)) || 0) + state.value),
      };
    }

    case SET_COUNTER_INCREMENT_AMOUNT: {
      return {
        ...state,
        counterIncrementValue: action.value,
      };
    }

    default:
      return state;
  }
};

export default counter;
