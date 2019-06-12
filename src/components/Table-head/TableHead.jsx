import React from "react";
import './style.css';
import Dropdown from "../Dropdown";


class TableHead extends React.Component {
    render(){
        return(
            <tbody className="table">
                <tr>
                    <th className="table__color" />
                    <th className="table__category">
                        <Dropdown
                            getNotificationsWithFilter={this.props.getNotificationsWithFilter}
                            clearFilter={this.props.clearFilter}
                            filterIsRead={this.props.filterIsRead}
                            filterCategory={this.props.filterCategory}
                        />
                    </th>
                    <th className="table__text">Message</th>
                    <th className="table__date">Date</th>
                </tr>
            </tbody>
        )
    }
}

export default TableHead;