import {update_value} from '../actions/Action';
const personReducer = (state = {}, action) => {
    switch (action.type) {
        case update_value:
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