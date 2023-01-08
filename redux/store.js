import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.slice';

import storage from 'redux-persist-indexeddb-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage: storage("3D-DB"),
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

const reducer = {
  cart: cartReducer,
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)