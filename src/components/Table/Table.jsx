import React from "react";
import PropTypes from 'prop-types'
import TableRow from "../Table-row";
import Dropdown from "../Dropdown";
import './style.css';
import DropdownContent from "../Dropdown/Dropdown";

class Table extends React.Component{
    componentDidMount(page = 1, filterIsRead = undefined, filterCategory = undefined) {
        this.props.getNotifications(page, filterIsRead, filterCategory)
    }

    handleNotificationClick = (ID) => {
        console.log(this.props.pagesCount);
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
        this.componentDidMount(1)
    }

    handleApplyFilterClick = () => {
        this.componentDidMount(this.props.page, this.filterIsRead(), this.filterCategory())
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
                <a
                    className='pagination__page-link'
                   onClick={() => this.componentDidMount(
                       pageNumber,
                       this.filterIsRead(),
                       this.filterCategory()
                   )}
                >
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
                        <th className="table__category">
                            <div className="dropdown">
                                <span>Category</span>
                                <div className="dropdown__content">
                                    <button className="dropdown__content__reset" onClick={() => this.clearFilter()}>Reset filter</button>
                                    <p className="dropdown__content__isRead">
                                        <input type="radio" name="isRead" id="isRead" value={true}/>Read
                                    </p>
                                    <p>
                                        <input type="radio" name="isRead" id="isRead" value={false}/>Unread
                                    </p>
                                    <p className="dropdown__content__category">
                                        <input type="radio" id="category" name="category" value="CRITICAL"/>Critical
                                    </p>
                                    <p>
                                        <input type="radio" id="category" name="category" value="WARN"/>Warn
                                    </p>
                                    <p>
                                        <input type="radio" id="category" name="category" value="ERROR"/>Error
                                    </p>
                                    <p>
                                        <input type="radio" id="category" name="category" value="INFO"/>Info
                                    </p>
                                    <p>
                                    <input type="radio" id="category" name="category" value="DEBUG"/>Debug
                                    </p>
                                    <button
                                        className="dropdown__content__apply"
                                        onClick={this.handleApplyFilterClick}>Apply
                                    </button>
                                </div>
                            </div>
                        </th>
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
