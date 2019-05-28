import Table from './Table';
import {
    getNotifications,
    markNotificationAsRead,
    markAllNotificationsAsRead,
} from '../../actions/notifications';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        data: state.notifications.data,
        page: state.notifications.pagination.page,
        pagesCount: state.notifications.pagination.total
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getNotifications: (page, category, isRead) => dispatch(getNotifications(page, category, isRead, dispatch)),
        markNotificationAsRead: ID => dispatch(markNotificationAsRead(ID, dispatch)),
        markAllNotificationsAsRead: () => dispatch(markAllNotificationsAsRead(dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);