import axios from "axios";
import {PER_PAGE} from "../components/Table/constants";

export const getNotifications = (page, dispatch) => {
    axios.get('http://localhost:3000/api/v1/notifications',{
        params: {
            perPage: PER_PAGE,
            page
        },
    })
        .then((response) => {
            dispatch({
                type: 'GET_NOTIFICATIONS_SUCCESS',
                payload: {
                    notifications: response.data.notifications,
                    pagination: response.data.pagination
                }
            })
        });

    return { type: 'GET_NOTIFICATIONS_PENDING' }
};

export const markNotificationAsRead = (ID, dispatch) => {
    axios.put('http://localhost:3000/api/v1/notifications/' + ID)
        .then(() => {
            dispatch({
                type: 'MARK_NOTIFICATION_AS_READ_SUCCESS',
                payload: ID
            })
        });
    return { type: 'MARK_NOTIFICATION_AS_READ_PENDING' }
};

export const markAllNotificationsAsRead = (dispatch) => {
    axios.put('http://localhost:3000/api/v1/notifications/')
        .then(() => {
            dispatch({
                type: 'MARK_ALL_NOTIFICATIONS_AS_READ_SUCCESS',
            })
        });
    return { type: 'MARK_ALL_NOTIFICATIONS_AS_READ_PENDING' }
};