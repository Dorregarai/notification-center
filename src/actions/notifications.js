import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import * as TYPES from './actionTypes';
import { call, put } from 'redux-saga/effects';
import { PER_PAGE } from '../components/Table/constants';

const apiGetNotifications = (page, isRead, category) => {
    return axios.get('http://localhost:3000/api/v1/notifications', {
        params: {
            perPage: PER_PAGE,
            page,
            isRead,
            category
        }
    })
        .then(response => response.data)
};

const apiMarkNotificationAsRead = (ID) => {
    return axios.put('http://localhost:3000/api/v1/notifications/' + ID)
                .then(response => response.data)
};

const apiMarkAllNotificationsAsRead = () => {
    return axios.put('http://localhost:3000/api/v1/notifications')
        .then(response => response.data)

};


export function* fetchGetNotifications(action) {
    try {
        const notifications = yield call(apiGetNotifications, action.page, action.isRead, action.category );
        yield put({ type: TYPES.GET_NOTIFICATIONS_SUCCESS, payload: notifications })
    } catch (error) {
        yield put({ type: TYPES.GET_NOTIFICATIONS_FAILURE, payload: error })
    }
}

export function* fetchMarkNotificationAsRead(action) {
    try {
        const notification = yield call(apiMarkNotificationAsRead, action.ID);
        yield put({ type: TYPES.MARK_NOTIFICATION_AS_READ_SUCCESS, payload: notification })
    } catch (error) {
        yield put({ type: TYPES.MARK_NOTIFICATION_AS_READ_FAILURE, payload: error })
    }
}

export function* fetchMarkAllNotificationsAsRead() {
    try {
        const notifications = yield call(apiMarkAllNotificationsAsRead);
        yield put({ type: TYPES.MARK_ALL_NOTIFICATIONS_AS_READ_SUCCESS, payload: notifications })
    } catch (error) {
        yield put({ type: TYPES.MARK_ALL_NOTIFICATIONS_AS_READ_FAILURE, payload: error })
    }
}
