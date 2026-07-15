import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';

const noopStorage = {
  getItem: async () => null,
  setItem: async (_key, value) => value,
  removeItem: async () => undefined,
};
const storage = typeof window === 'undefined'
  ? noopStorage
  : require('redux-persist/lib/storage').default;

const initialState = {
  username: '',
  bio: '',
  badges: {
    daynight: false,
    engineering: false,
    handshake: false,
    partycone: false,
    pencil: false,
    radar: false,
    student: false,
    studying: false,
    virus: false,
  }
};

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = (state = { initialState, input: {} }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        username: action.payload.txt,
      };
    case 'SET_BADGE':
      return {
        ...state,
        badges: {
          ...state.badges,
          [action.payload.badge]: action.payload.unlocked,
        },
      };
    case 'SET_BIO':
      return {
        ...state,
        bio: action.payload.txt,
      };
    case 'USER_LOGOUT':
      return {
        ...state,
        username: undefined,
        bio: undefined,
        badges: {
          student: false,
          teacher: false,
          creditcard: false,
          radar: false,
          daynight: false,
        }
      };
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, reducer)

const composeEnhancers = typeof window === 'undefined'
  ? compose
  : require('redux-devtools-extension').composeWithDevTools({ trace: true });

// const initializeStore = (preloadedState = initialState) => {
//   return createStore(
//     persistedReducer,
//     preloadedState,
//     composeEnhancers(applyMiddleware())
//   );
// };

const initializeStore = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware())
);

const persistor = persistStore(initializeStore);

export { initializeStore, persistor };
