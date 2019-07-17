import React from "react";
import PropTypes from 'prop-types'
import TableRow from "../Table-row";
import TableHead from "../Table-head";
import Pagination from "../Pagination";
import MarkAllAsRead from "../MarkAllAsRead";
import './style.css';

class Table extends React.Component{
    componentDidMount() {
        this.props.getNotifications(1)
    }

    handleNotificationClick = (ID) => {
        this.props.markNotificationAsRead(ID)
    };

    handleMarkAllAsReadButtonClick = () => {
        this.props.markAllNotificationsAsRead()
    };

    filterIsRead(){
        const filterIsRead = document.getElementsByName('isRead');
        if(filterIsRead[0].checked){
            return true
        }
        if(filterIsRead[1].checked){
            return false
        }
        return undefined
    }

    filterCategory(){
        const filterCategory = document.getElementsByName('category');
        if(filterCategory[0].checked){
            return 'CRIT'
        }
        if(filterCategory[1].checked){
            return 'WARN'
        }
        if(filterCategory[2].checked){
            return 'ERROR'
        }
        if(filterCategory[3].checked){
            return 'INFO'
        }
        if(filterCategory[4].checked){
            return 'DEBUG'
        }
    }

    clearFilter = () => {
        document.getElementsByName('isRead')[0].checked = false;
        document.getElementsByName('isRead')[1].checked = false;
        for(let i = 0; i < document.getElementsByName('category').length; i++){
            document.getElementsByName('category')[i].checked = false
        }
        this.props.getNotifications(1)
    };

    renderNotification(notification) {
        return (
            <TableRow
                key={notification.ID}
                {...notification}
                onClick={() => this.handleNotificationClick(notification.ID)}
            />
        );
    }

    render(){
        return(
            <div className="mainBlockOfTable">
                <table className="table">
                    <TableHead
                        getNotifications={this.props.getNotifications}
                        page={this.props.page}
                        filterIsRead={this.filterIsRead}
                        filterCategory={this.filterCategory}
                        clearFilter={this.clearFilter}
                    />
                    <tbody className="table-row_body">
                    {
                        this.props.data.map(notification => this.renderNotification(notification))
                    }
                    </tbody>
                </table>
                <Pagination
                    page={this.props.page}
                    pagesCount={this.props.pagesCount}
                    getNotifications={this.props.getNotifications}
                    filterIsRead={this.filterIsRead}
                    filterCategory={this.filterCategory}
                />
                <MarkAllAsRead
                    handleMarkAllAsReadButtonClick={this.handleMarkAllAsReadButtonClick}
                />
            </div>
        )
    }
}

Table.propTypes = {
    getNotifications: PropTypes.func.isRequired,
    markNotificationAsRead: PropTypes.func.isRequired,
    markAllNotificationsAsRead: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            ID: PropTypes.string.isRequired,
            createdOn: PropTypes.string.isRequired,
            isRead: PropTypes.bool.isRequired,
            readOn: PropTypes.string,
            text: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
            isPrivate: PropTypes.bool
        })
    )
};

Table.defaultProps = {
    data: []
};

export default Table;
