import { call, put } from 'redux-saga/effects'
import RegionApi from '../../api/RegionApi'
import {
    GetRegionSuccess, GetRegionFailed, AddRegionSuccess, AddRegionFailed
    , DelRegionSuccess, DelRegionFailed, GetOneRegionSuccess, GetOneRegionFailed
    , EditRegionSuccess, EditRegionFailed
} from '../Action/RegionAction'

function* handleGetRegion() {
    try {
        const result = yield call(RegionApi.List)
        yield put(GetRegionSuccess(result))
    } catch (error) {
        yield put(GetRegionFailed(error))
    }
}

function* handleGetOneRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.FindOne, payload)
        yield put(GetOneRegionSuccess(result))
    } catch (error) {
        yield put(GetOneRegionFailed(error))
    }
}

function* handleDelRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.Delete, payload)
        yield put(DelRegionSuccess(payload))
    } catch (error) {
        yield put(DelRegionFailed(error))
    }
}

function* handleAddRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.Create, payload)
        yield put(AddRegionSuccess(result.data))
    } catch (error) {
        yield put(AddRegionFailed(error))
    }
}

function* handleEditRegion(action) {
    const { payload } = action
    try {
        const result = yield call(RegionApi.UpdateFile, payload)
        yield put(EditRegionSuccess(result.data))
    } catch (error) {
        yield put(EditRegionFailed(error))
    }
}

export {
    handleAddRegion,
    handleDelRegion,
    handleEditRegion,
    handleGetOneRegion,
    handleGetRegion
}