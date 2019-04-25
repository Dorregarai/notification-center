import React from "react";
import PropTypes from 'prop-types'
import TableRow from "../Table-row";
import Dropdown from "../Dropdown";
import './style.css';

class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
        };
    }

    handleNotificationClick = (notificationId) => {
        const dataWithReadNotification = this.state.data.map(notification => (
            notification.ID === notificationId ? { ...notification, isRead: true } : notification
        ));
        this.setState({ data: dataWithReadNotification });
    };

    /*handleMarkButtonClick = (allNotificationIds) => {
        this.state.data.map(notification => (
            notification.ID ===
        ))
    };*/

    renderNotification(notification) {
        return (
            <TableRow
                key={notification.ID} // read about this
                {...notification}
                onClick={() => this.handleNotificationClick(notification.ID)}
            />
        );
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
            category: PropTypes.string.isRequired, // must be array
            priority: PropTypes.string.isRequired, // must be array
            isPrivate: PropTypes.bool.isRequired

        })
    )
};

Table.defaultProps = {
    data: [
        {
            ID: 1,
            createdOn: new Date().toLocaleString(),
            isRead: false,
            readOn: new Date().toLocaleString(),
            text: 'Lorem 1',
            category: 'ERROR',
            priority: 'LOW',
            isPrivate: false,
        },
        {
            ID: 2,
            createdOn: new Date().toLocaleString(),
            isRead: false,
            readOn: new Date().toLocaleString(),
            text: 'Lorem 2',
            category: 'CRIT',
            priority: 'VERYLOW',
            isPrivate: false,
        },
        {
            ID: 3,
            createdOn: new Date().toLocaleString(),
            isRead: false,
            readOn: new Date().toLocaleString(),
            text: 'Lorem 3',
            category: 'INFO',
            priority: 'HIGH',
            isPrivate: false,
        }
    ]
};

export default Table;
