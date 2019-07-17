import React from "react";
import './style.css';
import Dropdown from "../Dropdown";


class TableHead extends React.Component {
    render(){
        const { page, filterIsRead, filterCategory, getNotifications, clearFilter } = this.props;
        return(
            <tbody className="table">
                <tr>
                    <th className="table__color" />
                    <th className="table__category">
                        <Dropdown
                            getNotifications={getNotifications}
                            page={page}
                            clearFilter={clearFilter}
                            filterIsRead={filterIsRead}
                            filterCategory={filterCategory}
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