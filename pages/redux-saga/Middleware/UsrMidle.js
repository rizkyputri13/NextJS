import {call,put} from 'redux-saga/effects'
import UserApi from '../../api/UserApi'
import { doAddSignupFailed, doAddSignupSuccess, doGetSigninSuccess, doMessageNotification, doPushSignoutFailed, doPushSignoutSuccess } from '../Action/UsrAction'

function* handleUsrSignin(action) {
    const {payload} = action;
    try {
        const result = yield call(UserApi.signin,payload);
        if (Object.keys(result.data).length === 0){
            yield put(doMessageNotification({message : 'user or password not match, try again'}));
        }
        else{
            sessionStorage.setItem('access_token',result.data.access_token)
            const profile = yield call (UserApi.profile)
            sessionStorage.setItem('profile',JSON.stringify(profile.data))
            yield put(doGetSigninSuccess(profile.data))
        }     
    } catch (error) {
        yield put(doMessageNotification({message : 'user or password not match, try again'}));
    }
}

function* handleUsrSignout(action) {
    const {payload} = action;
    try {
        sessionStorage.clear();
        yield put(doPushSignoutSuccess(payload));
    } catch (error) {
        yield put(doPushSignoutFailed(error));
    }
}

function* handleUsrSignup(action) {
    const {payload} = action;
    try {
        const result = yield call(UserApi.signup,payload);
        yield put(doAddSignupSuccess(result.data));
    } catch (error) {
        yield put(doAddSignupFailed(error));
    }
}

export  {
    handleUsrSignin,
    handleUsrSignout,
    handleUsrSignup
}