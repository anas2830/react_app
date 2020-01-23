const personReducer = (state = {}, action) => {
    switch (action.type) {
        case 'update':
            return {
                name: 'anas'
            }
        case 'edit_person':
            return {
                name: 'anas edit'
            }
    
        default: return state;
    }
}

export default personReducer;