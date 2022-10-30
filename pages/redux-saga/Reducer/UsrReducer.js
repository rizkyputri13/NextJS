import * as ActionType from '../Constants/UsrConstant'


const getFromLocalStorage = (key) => {
    if (!key || typeof window === 'undefined') {
        return ""
    }
    return sessionStorage.getItem(key)
  }

const INIT_STATE = {
    UserProfile: getFromLocalStorage('profile')?JSON.parse(sessionStorage.getItem('profile')):null ,
    UserSignUp:{},
    message: ''
}

const UsrReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case ActionType.GET_SIGNIN_REQUEST:
            return state
        case ActionType.GET_SIGNIN_SUCCESS:
            return GetSigninSuccess(state, action)
        case ActionType.ADD_SIGNUP_REQUEST:
            return state
        case ActionType.ADD_SIGNUP_SUCCESS:
            return AddSignupSuccess(state, action)
        case ActionType.POST_SIGNOUT_REQUEST:
            return state
        case ActionType.POST_SIGNOUT_SUCCESS:
            return PushSignoutSuccess(state, action)
        case ActionType.MESSAGE_NOTIFICATION:
            return ShowMessage(state,action)
        default:
            return state
    }
}

const GetSigninSuccess = (state, action) => {
    return {
        ...state,
        UserProfile: action.payload ,
        message: ''
    }
}

const PushSignoutSuccess = (state, action) => {
    return {
        ...state,
        UserProfile: {},
        message: "",
    }
}

const AddSignupSuccess = (state, action) => {

    return {
        ...state,
        UserSignUp: action.payload,
    }
}

const ShowMessage = (state,action) =>{
    const {payload} = action
    return{
        ...state,
        message: payload.message
    }
}

export default UsrReducer