const initState = "";

const direction = (state = initState, action) => {
    switch (action.type) {
         case 'action_signin' :
            state = action.payload
         return state
         default:
            return state
    }
}
export default direction;