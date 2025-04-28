import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from '../auth/api/AuthApi';
import { authSlice } from '../auth/AuthSlice';

const persistConfig = {
    key: 'root',
    storage
};

const rootReducer = combineReducers({
    authentication: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false
        })
            .concat(
                authApi.middleware,
            )
});

export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const getCurrentUserEmail = (state: AppState) => state.authentication.userEmail;
export const getCurrentUserRole = (state: AppState) => state.authentication.role;
