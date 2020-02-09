import {update_value} from '../actions/Action';

const sportsReducer = (state = {}, action) => {
    switch (action.type) {
        case update_value:
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