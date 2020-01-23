const initialstate = {
    count:10
}
function rootReducer(state=initialstate,action){
    switch (action.type) {
        case 'ADD': {
            return {
                count: state.count+1
            }
        }
        case 'SUB': {
            return {
                count: state.count-1
            }
        }
        default: return state;
    }
}
export default rootReducer;