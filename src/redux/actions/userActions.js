function setUser_a(user) {
    return {
        type: "SET_USER",
        user: user
    }
}

function setUserList_a(userList) {
    return {
        type: "SET_USER_LIST",
        userList: userList
    }
}

function setUserClick_a(userClick) {
    return {
        type: "SET_USER_CLICK",
        userClick: userClick
    }
}



export { setUser_a, setUserList_a, setUserClick_a }