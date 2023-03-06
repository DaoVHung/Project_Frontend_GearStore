

const initState = {
    todos: [],
    page: ""
}

const dataProduct = (state = initState, action) => {
    switch (action.type) {
        case "get_success":
        //  console.log("vao data product",action.payload );
            return {
                ...state,
                todos: action.payload
            }
        case "get_inacive_succes":
            return {
                ...state,
                todos: action.payload
            }
        case "getDataSearch":
            return {
                ...state,
                todos: action.payload
            }
        case "GET_BY_CATALOG_SUCCESS":
            return {
                ...state,
                todos: action.payload
            }
        // case "GET_DETAIL_COMPLETE":
        //     return {
        //         ...state,
        //         todos: action.payload
        //     }
        default:
            return state;
    }
    console.log("state sau sag");

}
export default dataProduct