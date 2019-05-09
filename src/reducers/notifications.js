import { Notifications } from '../actions'

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
        case 'GET_NOTIFICATIONS_SUCCESS':
            return {
                ...state,
                data: action.payload.notifications,
                pagination: action.payload.pagination
            };
        case 'MARK_NOTIFICATION_AS_READ_SUCCESS':
            return {
                ...state,
                data: state.data.map(
                    function (element) {
                        if(action.payload === element.ID){
                            return { ...element, isRead: true }
                        }
                        return element
                    }
                )
            };
        case 'MARK_ALL_NOTIFICATIONS_AS_READ_SUCCESS':
            return {
                ...state,
                data: state.data.map(
                    function (element) {
                        return { ...element, isRead: true }
                    }
                )
            };
        default:
            return state
    }
};

export default notificationsReducer