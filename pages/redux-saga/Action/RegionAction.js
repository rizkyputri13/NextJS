import * as ActionType from '../Constants/RegionConstant'

export const GetRegionRequest = () => ({
    type: ActionType.GET_REGION_REQUEST

})

export const GetRegionSuccess = (payload) =>({
    type: ActionType.GET_REGION_SUCCESS,
    payload
})

export const GetRegionFailed = (payload) => ({
    type:ActionType.GET_REGION_FAILED,
    payload
})

export const DelRegionRequest = (payload) =>({
    type:ActionType.DEL_REGION_REQUEST,
    payload
})

export const DelRegionSuccess = (payload) => ({
    type:ActionType.DEL_REGION_SUCCESS,
    payload
})

export const DelRegionFailed =(payload)=>({
    type:ActionType.DEL_REGION_FAILED,
    payload
})

export const GetOneRegionRequest = (payload) => ({
    type: ActionType.GETONE_REGION_REQUEST,
    payload

})

export const GetOneRegionSuccess = (payload) =>({
    type: ActionType.GETONE_REGION_SUCCESS,
    payload
})

export const GetOneRegionFailed = (payload) => ({
    type:ActionType.GETONE_REGION_FAILED,
    payload
})

export const AddRegionRequest = (payload) =>({
    type:ActionType.ADD_REGION_REQUEST,
    payload
})

export const AddRegionSuccess = (payload) => ({
    type:ActionType.ADD_REGION_SUCCESS,
    payload
})

export const AddRegionFailed =(payload)=>({
    type:ActionType.ADD_REGION_FAILED,
    payload
})

export const EditRegionRequest = (payload) =>({
    type:ActionType.EDIT_REGION_REQUEST,
    payload
})

export const EditRegionSuccess = (payload) => ({
    type:ActionType.EDIT_REGION_SUCCESS,
    payload
})

export const EditRegionFailed =(payload)=>({
    type:ActionType.EDIT_REGION_FAILED,
    payload
})