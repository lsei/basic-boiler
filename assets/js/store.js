import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
const sagaMiddleware = createSagaMiddleware();

import {rootSaga} from './sagas';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

export default createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
