import { combineReducers } from "redux"


const stateInit = {
    user: null,
    userList: [],
    statusList: [],
    userClick: null,
}

function rootReducer(state = stateInit, action) {

    if (action.type === "SET_USER_CLICK") {
        //action.targetChat
        let { userClick } = action
        return {
            ...state,
            userClick: userClick
        }
    }


    if (action.type === "SET_USER") {
        //action.targetChat
        let { user } = action
        return {
            ...state,
            user: user
        }
    }

    if (action.type === "SET_USER_LIST") {
        //action.targetChat
        let { userList } = action
        return {
            ...state,
            userList: userList
        }
    }


    if (action.type === "SET_STATUS_LIST") {
        //action.targetChat
        let { statusList } = action
        return {
            ...state,
            statusList: statusList
        }
    }

    //no action but reducer still run.
    //nothing happen
    return state
}

export default rootReducer