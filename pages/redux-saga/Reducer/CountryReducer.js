import * as ActionType from '../Constants/CountryConstant'

const INIT_STATE = {
    countries:[],
    country:[]
}

const CountryReduce =(state = INIT_STATE,action) => {
    switch (action.type) {
        case ActionType.GET_COUNTRY_REQUEST:
            return {...state}
        case ActionType.GET_COUNTRY_SUCCESS:
            return GetCountrySuccessed(state,action)
        case ActionType.GETONE_COUNTRY_REQUEST:
            return {...state}
        case ActionType.GETONE_COUNTRY_SUCCESS:
            return GetOneCountrySuccessed(state,action)
        case ActionType.ADD_COUNTRY_REQUEST:
            return {...state}
        case ActionType.ADD_COUNTRY_SUCCESS:
            return AddCountrySuccessed(state,action)
        case ActionType.DEL_COUNTRY_REQUEST:
            return {...state}
        case ActionType.DEL_COUNTRY_SUCCESS:
            return DelCountrySuccessed(state,action)
        case ActionType.EDIT_COUNTRY_REQUEST:
            return {...state}
        case ActionType.EDIT_COUNTRY_SUCCESS:
            return EditCountrySuccessed(state,action)
        default:
            return state
    }
}

const GetCountrySuccessed = (state,action) => {
    return {
        ...state,
        countries: action.payload
    }
}

const GetOneCountrySuccessed = (state,action) =>{
    return {
        ...state,
        country:action.payload
    }
}

const DelCountrySuccessed = (state,action) => {
    const {payload} = action
    const filterCountry = state.countries.filter(el=>el.countryId !== payload)
    return {
        ...state,
        countries:[...filterCountry]
    }
}

const AddCountrySuccessed = (state,action)=>{
    const {payload} = action
    return{
        ...state,
        countries:[...state.countries, payload]
    }
}

const EditCountrySuccessed = (state,action) =>{
    const {payload}=action
    const filterCountry = state.countries.filter(el=>el.countryId !== payload.countryId)
    return {
        ...state,
        countries: [...filterCountry,payload]
    }
}

export default CountryReduce