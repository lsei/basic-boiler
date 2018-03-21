import {all, fork, takeEvery} from 'redux-saga/effects';
import {
    MY_ACTION
} from '../actions/mainActions';

function basicSaga() {
    console.log('My Action!');
}

export function* rootSaga() {
    yield all([
        takeEvery(MY_ACTION, basicSaga),
    ]);
}