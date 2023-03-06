const initState = {
    detail : []
}
const dataOrderDetail = (state = initState, action) => {
    switch (action.type) {
        
        case "LIST_ORDER_DETAIL":
            console.log("", action.payload);
            return {
                ...state,
                detail: action.payload,
            }
        default:
            return state;
    }
}
export default dataOrderDetail;