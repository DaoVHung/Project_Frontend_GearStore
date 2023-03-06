import { SwapCalls } from "@mui/icons-material"

const initState = []

const dataCatalog = (state = initState, action) => {
    switch (action.type) {
        case "GET_DATA_CATALOG":
            state = action.payload
            return state
        case "GET_LIST_SEARCH_CATALOG":
            state = action.payload
            return state
        case "GET_LIST_ACTIVE":
            state = action.payload
            return state
        default:
            return state;
    }
}
export default dataCatalog