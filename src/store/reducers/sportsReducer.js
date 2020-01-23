const sportsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'update':
            return {
                game: 'cricket'
            }
        case 'edit_game':
            return {
                game: 'cricket edit'
            }
        default: return state;
    }

}

export default sportsReducer;