import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import todos from "./features/todosSlice";
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
    todos
})

const persistConfig = {
    key: 'myRoute',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({reducer: persistedReducer});
const persistor = persistStore(store);

export { store, persistor }