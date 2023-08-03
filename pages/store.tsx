import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { mySaga } from "../Redux/Sagas/saga";
import rootReducer from "../Redux/Reducers/combineReducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(mySaga);

export type RootState = ReturnType<typeof store.getState>

export default store;