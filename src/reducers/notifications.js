import { Notifications } from '../actions';
import * as TYPES from '../actions/actionTypes';

const notificationsReducer = (state = {
    pagination: {
        page: 1,
        perPage: 10,
        total: 10
    },
    data: []
},
                              action) => {
    switch (action.type) {
        case TYPES.GET_NOTIFICATIONS_REQUEST:
            return Object.assign({}, state,{
                pagination: action
            });
        case TYPES.GET_NOTIFICATIONS_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload.notifications,
                pagination: action.payload.pagination
            });

        case TYPES.MARK_NOTIFICATION_AS_READ_REQUEST:
            const currentID = action.ID;
            return Object.assign({}, state, {
                data: state.data.map(
                    function (element) {
                        if(currentID === element.ID){
                            return { ...element, isRead: true }
                        }
                        return element
                    }
                )
            });

        case TYPES.MARK_ALL_NOTIFICATIONS_AS_READ_REQUEST:
            return Object.assign({}, state, {
                data: state.data.map(
                    function (element) {
                            return { ...element, isRead: true }
                    }
                )
            });

        default:
            return state
    }
};

export default notificationsReducer
