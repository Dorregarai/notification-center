import { takeEvery } from 'redux-saga/effects';
import * as TYPES from '../actions/actionTypes';
import {
    fetchGetNotifications,
    fetchMarkNotificationAsRead,
    fetchMarkAllNotificationsAsRead
} from '../actions/notifications';

function* mySaga() {
    yield takeEvery(TYPES.GET_NOTIFICATIONS_REQUEST, fetchGetNotifications);
    yield takeEvery(TYPES.MARK_NOTIFICATION_AS_READ_REQUEST, fetchMarkNotificationAsRead);
    yield takeEvery(TYPES.MARK_ALL_NOTIFICATIONS_AS_READ_REQUEST, fetchMarkAllNotificationsAsRead)
}

export default mySaga