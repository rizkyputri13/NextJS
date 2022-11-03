import * as ActionType from '../Constants/CountryConstant'

export const GetCountryRequest = () => ({
    type: ActionType.GET_COUNTRY_REQUEST

})

export const GetCountrySuccess = (payload) =>({
    type: ActionType.GET_COUNTRY_SUCCESS,
    payload
})

export const GetCountryFailed = (payload) => ({
    type:ActionType.GET_COUNTRY_FAILED,
    payload
})

export const DelCountryRequest = (payload) =>({
    type:ActionType.DEL_COUNTRY_REQUEST,
    payload
})

export const DelCountrySuccess = (payload) => ({
    type:ActionType.DEL_COUNTRY_SUCCESS,
    payload
})

export const DelCountryFailed =(payload)=>({
    type:ActionType.DEL_COUNTRY_FAILED,
    payload
})

export const GetOneCountryRequest = (payload) => ({
    type: ActionType.GETONE_COUNTRY_REQUEST,
    payload

})

export const GetOneCountrySuccess = (payload) =>({
    type: ActionType.GETONE_COUNTRY_SUCCESS,
    payload
})

export const GetOneCountryFailed = (payload) => ({
    type:ActionType.GETONE_COUNTRY_FAILED,
    payload
})

export const AddCountryRequest = (payload) =>({
    type:ActionType.ADD_COUNTRY_REQUEST,
    payload
})

export const AddCountrySuccess = (payload) => ({
    type:ActionType.ADD_COUNTRY_SUCCESS,
    payload
})

export const AddCountryFailed =(payload)=>({
    type:ActionType.ADD_COUNTRY_FAILED,
    payload
})

export const EditCountryRequest = (payload) =>({
    type:ActionType.EDIT_COUNTRY_REQUEST,
    payload
})

export const EditCountrySuccess = (payload) => ({
    type:ActionType.EDIT_COUNTRY_SUCCESS,
    payload
})

export const EditCountryFailed =(payload)=>({
    type:ActionType.EDIT_COUNTRY_FAILED,
    payload
})