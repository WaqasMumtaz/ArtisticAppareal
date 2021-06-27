const userReducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_USER":
            return {
                ...state, user: action.user
            }
        case "REMOVE_USER":
            return {
                ...state, user: null
            }
        case "UPDATE_CITY":
            return {
                ...state, city:action.city
            }
        default: {
            return state;
        }
    }

}

export default userReducer;