import React from "react";
import DropdownContent from "../DropdownContent"
import './style.css';

class Dropdown extends React.Component{
    render(){
        const { page, filterIsRead, filterCategory, getNotifications, clearFilter } = this.props;
        return(
            <div className="dropdown">
                <span>Category</span>
                    <DropdownContent
                        getNotifications={getNotifications}
                        page={page}
                        clearFilter={clearFilter}
                        filterIsRead={filterIsRead}
                        filterCategory={filterCategory}
                    />
            </div>
        )
    }
}
export default Dropdown;
