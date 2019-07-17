import Table from './Table';
import { connect } from 'react-redux';
import * as TYPES from '../../actions/actionTypes'

function mapStateToProps(state) {
    return {
        data: state.notifications.data,
        page: state.notifications.pagination.page,
        pagesCount: state.notifications.pagination.total
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getNotifications: (page, isRead, category) => {
            dispatch({
                type: TYPES.GET_NOTIFICATIONS_REQUEST,
                page,
                isRead,
                category
            })
        },
        markNotificationAsRead: ID => dispatch({
            type: TYPES.MARK_NOTIFICATION_AS_READ_REQUEST,
            ID
        }),
        markAllNotificationsAsRead: () => dispatch({
            type: TYPES.MARK_ALL_NOTIFICATIONS_AS_READ_REQUEST
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);