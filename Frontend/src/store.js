import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  username: '',
};

const reducer = (state = { initialState, input: {} }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        username: action.payload.txt,
      };
    default:
      return state;
  }
};

const composeEnhancers = composeWithDevTools({
  trace: true,
});
export const initializeStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware()),
  );
};
