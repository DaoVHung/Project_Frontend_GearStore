const initState = {
    carts : [],
    quantity : 0
    
}
const dataOrder = (state = initState, action) => {
    switch (action.type) {

        
        case "GET_LIST_STATE":
            console.log("action", action);
            return {
                ...state,
                carts: action.payload,
                quantity : action.payload.length
            }
        default:
            return state;
    }
}
export default dataOrder;