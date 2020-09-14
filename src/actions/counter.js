// ACTIONS TYPES
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_INCREMENT_BY_AMOUNT = 'COUNTER_INCREMENT_BY_AMOUNT';

export const SET_COUNTER_INCREMENT_AMOUNT = 'SET_COUNTER_INCREMENT_AMOUNT';

export const counterIncrement = () => ({
  type: COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: COUNTER_DECREMENT,
});

export const counterIncrementByAmount = () => ({
  type: COUNTER_INCREMENT_BY_AMOUNT,
});

export const setCounterIncrementAmount = (value) => ({
  type: SET_COUNTER_INCREMENT_AMOUNT,
  value,
});
