
const INIT_STATE = {
    posts : [],
    load : false,
}

const postsReducer = (state = INIT_STATE, action) =>{
        switch (action.type) {
            case "action_reset_data":{   
            }
            default :
            return state;

        }
}
export default postsReducer;