import axios, { AxiosResponse } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { addUserSuccess } from '../Actions';

const userFetch = async () => {
    return await fetch("https://ulventech-react-exam.netlify.app/api/form").then(res => res.json());
}

function* getUser() {
    const users: ReturnType<typeof userFetch> = yield call(userFetch);
    yield put({ type: "GET_SUCCESS", users })
}

function* addUsers(action: any) {
    try {
        const response: AxiosResponse<any> = yield call(axios.post, "https://ulventech-react-exam.netlify.app/api/form", action.payload);
        yield put(addUserSuccess(response.data));
    } catch (error) {
        console.error(error);
    }
}

export function* mySaga() {
    yield takeEvery("GET", getUser);
    yield takeEvery("POST", addUsers)
}