import React from "react";
import PropTypes from 'prop-types'
import TableRow from "../Table-row";
import Dropdown from "../Dropdown";
import { PER_PAGE } from "./constants";
import axios from "axios";
import './style.css';

class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            currentPage: 2,
            countPage: 1
        };
    }

    componentDidMount() {
        this.getNotifications(this.state.currentPage)
    }

    getNotifications(page){
        axios.get('http://localhost:3000/api/v1/notifications',{
            params: {
                perPage: PER_PAGE,
                page
            },
        })
            .then((response) => {
                this.setState({
                    data: response.data.notifications,
                    countPage: response.data.pagination.total,
                    currentPage: +response.data.pagination.page
                });
            })
    }

    handleNotificationClick(ID) {
        axios.put('http://localhost:3000/api/v1/notifications/' + ID)
            .then(() => {
                this.setState({
                    data: this.state.data.map(
                        function (element) {
                            if(ID === element.ID){
                                return { ...element, isRead: true }
                            }
                            return element
                        }
                    )
                })
            })
    };

    handlePaginationClick(perPage = 10, page){   //TODO
        this.getNotifications(page)
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

    renderPaginationItem(textToDisplay, pageNumber, key) {
        return (
            <li key={key} className="page-item">
                <a className="page-link" onClick={() => this.getNotifications(pageNumber)}>
                    {textToDisplay}
                </a>
            </li>
        )
    }

    renderPagination(){
        const { currentPage, countPage } = this.state;
        const pages = [];
        if (currentPage !== 1) {
            pages.push(this.renderPaginationItem('<', currentPage - 1, '<'))
        }

        pages.push(this.renderPaginationItem(1, 1, 'first'));

        const pagesToDisplay = [currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2];
        const minPages = pagesToDisplay.filter(pageNumber => pageNumber > 1);
        const maxPages = pagesToDisplay.filter(pageNumber => pageNumber < countPage);
        const minPage = Math.min(...minPages);
        const maxPage = Math.max(...maxPages);

        for (let i = minPage; i <= maxPage; i++){
            pages.push(this.renderPaginationItem(i, i, i));
        }

        pages.push(this.renderPaginationItem(countPage, countPage, countPage));

        if (currentPage !== countPage) {
            pages.push(this.renderPaginationItem('>', currentPage + 1, '>'));
        }

        return pages;
    }

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
                        this.state.data.map(notification => this.renderNotification(notification))
                    }
                </table>
                <ul className="paginationMenu">
                    {
                        this.renderPagination()
                    }
                </ul>
                <button className="mark">Mark all as read</button>
            </div>
        )
    }
}

Table.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            ID: PropTypes.number.isRequired,
            createdOn: PropTypes.string.isRequired,
            isRead: PropTypes.bool.isRequired,
            readOn: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired,
            isPrivate: PropTypes.bool.isRequired

        })
    )
};

Table.defaultProps = {
    data: []
};

export default Table;
