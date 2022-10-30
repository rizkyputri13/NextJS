import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from '../Reducer'
import rootSaga from '../Middleware'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from "redux-devtools-extension";

const makeStore = context => {
    const logger = createLogger()

    const saga = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        undefined,
        composeWithDevTools(applyMiddleware(saga, logger))
    )
    store.sagaTask = saga.run(rootSaga)

    return store
}
const wrapper = createWrapper(makeStore)

export default wrapper