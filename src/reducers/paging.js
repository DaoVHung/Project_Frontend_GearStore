const initState = ("") 
const dataPage = (state = initState, action)=>{
    if(action.type=="action_put_data_page"){
        state = action.payload
    }
    return state
}
export default dataPage