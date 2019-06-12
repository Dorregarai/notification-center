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

    getNotificationsWithFilter = (page = 1, isRead = undefined, category = undefined) => {
        this.props.getNotifications(page, isRead, category)
    };

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

    clearFilter(){
        document.getElementsByName('isRead')[0].checked = false;
        document.getElementsByName('isRead')[1].checked = false;
        for(let i = 0; i < document.getElementsByName('category').length; i++){
            document.getElementsByName('category')[i].checked = false
        }
        this.getNotificationsWithFilter(1, undefined, undefined)
    }

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
                        getNotificationsWithFilter={this.getNotificationsWithFilter}
                        filterIsRead={this.filterIsRead}
                        filterCategory={this.filterCategory}
                        clearFilter={this.clearFilter}
                    />
                    {
                        this.props.data.map(notification => this.renderNotification(notification))
                    }
                </table>
                <Pagination
                    page={this.props.page}
                    pagesCount={this.props.pagesCount}
                    getNotifications={this.getNotificationsWithFilter}
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
