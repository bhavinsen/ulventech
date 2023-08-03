export const myReducer = (state = { users: [] }, action: any) => {
    switch(action.type){
        case "GET_SUCCESS" :
            return {
                ...state,
                users: action.users
            };
        case "ADD_USER_SUCCESS" :
            return {
                ...state,
                data: action.payload
            };
        case "LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        default :
            return state;
    }
};