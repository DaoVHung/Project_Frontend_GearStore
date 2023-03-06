const initState = {
    names: ""
};
const takeUsername = (state = initState, action) => {


    switch (action.type) {
        case "action_take_userName":
            console.log("action", action);
            return {
                ...state,
                names: action.payload
            }
        default:
            return state;
    }
}
export default takeUsername