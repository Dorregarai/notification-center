import React from "react";
import PropTypes from 'prop-types'
import TableRow from "../Table-row";
import Dropdown from "../Dropdown";
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


    renderNotification(notification) {
        return (
            <TableRow
                key={notification.ID}
                {...notification}
                onClick={() => this.handleNotificationClick(notification.ID)}
            />
        );
    }

    renderPaginationItem(textToDisplay, pageNumber, key) {
        return (
            <li key={key} className="pagination__page-item">
                <a className='pagination__page-link' onClick={() => this.props.getNotifications(pageNumber)}>
                    {textToDisplay}
                </a>
            </li>
        )
    }

    renderPagination = () => {
        const { page, pagesCount } = this.props;
        const pages = [];
        if (+page !== 1) {
            pages.push(this.renderPaginationItem('<', +page - 1, '<'))
        }

        pages.push(this.renderPaginationItem(1, 1, 'first'));

        if (+page - 3 > 1){
            pages.push(this.renderPaginationItem('...', '', 'leftDots'))
        }

        const pagesToDisplay = [+page - 2, +page - 1, +page, +page + 1, +page + 2];
        const minPages = pagesToDisplay.filter(pageNumber => pageNumber > 1 && pageNumber < pagesCount);
        const maxPages = pagesToDisplay.filter(pageNumber => pageNumber < pagesCount && pageNumber > 1);
        const minPage = Math.min(...minPages);
        const maxPage = Math.max(...maxPages);

        for (let i = minPage; i <= maxPage; i++){
            pages.push(this.renderPaginationItem(i, i, i));
        }

        if (+page + 3 < pagesCount){
            pages.push(this.renderPaginationItem('...', '', 'rightDots'))
        }

        pages.push(this.renderPaginationItem(pagesCount, pagesCount, pagesCount));

        if (+page !== pagesCount) {
            pages.push(this.renderPaginationItem('>', +page + 1, '>'));
        }

        return pages;
    };

    render(){
        return(
            <div>
                <table className="table">
                    <tbody className="table">
                    <tr>
                        <th className="table__color"> </th>
                        <th className="table__category"><Dropdown /></th>
                        <th className="table__text">Message</th>
                        <th className="table__date">Date</th>
                    </tr>
                    </tbody>
                    {
                        this.props.data.map(notification => this.renderNotification(notification))
                    }
                </table>
                <ul className="pagination">
                    {
                        this.renderPagination()
                    }
                </ul>
                <button onClick={this.handleMarkAllAsReadButtonClick} className="mark">Mark all as read</button>
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
