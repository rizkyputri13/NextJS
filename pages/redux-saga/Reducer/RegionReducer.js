import * as ActionType from '../Constants/RegionConstant'

const INIT_STATE = {
    regions:[],
    region:[]
}

const RegionReduce =(state = INIT_STATE,action) => {
    switch (action.type) {
        case ActionType.GET_REGION_REQUEST:
            return {...state}
        case ActionType.GET_REGION_SUCCESS:
            return GetRegionSuccessed(state,action)
        case ActionType.GETONE_REGION_REQUEST:
            return {...state}
        case ActionType.GETONE_REGION_SUCCESS:
            return GetOneRegionSuccessed(state,action)
        case ActionType.ADD_REGION_REQUEST:
            return {...state}
        case ActionType.ADD_REGION_SUCCESS:
            return AddRegionSuccessed(state,action)
        case ActionType.DEL_REGION_REQUEST:
            return {...state}
        case ActionType.DEL_REGION_SUCCESS:
            return DelRegionSuccessed(state,action)
        case ActionType.EDIT_REGION_REQUEST:
            return {...state}
        case ActionType.EDIT_REGION_SUCCESS:
            return EditRegionSuccessed(state,action)
        default:
            return state
    }
}

const GetRegionSuccessed = (state,action) => {
    return {
        ...state,
        regions: action.payload
    }
}

const GetOneRegionSuccessed = (state,action) =>{
    return {
        ...state,
        region:action.payload
    }
}

const DelRegionSuccessed = (state,action) => {
    const {payload} = action
    const filterRegion = state.regions.filter(el=>el.regionId !== payload)
    return {
        ...state,
        regions:[...filterRegion]
    }
}

const AddRegionSuccessed = (state,action)=>{
    const {payload} = action
    return{
        ...state,
        regions:[...state.regions, payload]
    }
}

const EditRegionSuccessed = (state,action) =>{
    const {payload}=action
    const filterRegion = state.regions.filter(el=>el.regionId !== payload.regionId)
    return {
        ...state,
        regions: [...filterRegion,payload]
    }
}

export default RegionReduce