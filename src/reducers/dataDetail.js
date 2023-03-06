const initState = {
    todos: []
}

const dataDetail = (state = initState, action)=>{
    switch (action.type) {
        case "GET_DETAIL_COMPLETE":
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state;
    }
}
export default dataDetail;