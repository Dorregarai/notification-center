import React from "react";
import DropdownContent from "../DropdownContent"
import './style.css';

class Dropdown extends React.Component{
    render(){
        return(
            <div className="dropdown">
                <span>Category</span>
                    <DropdownContent
                        getNotificationsWithFilter={this.props.getNotificationsWithFilter}
                        clearFilter={this.props.clearFilter}
                        filterIsRead={this.props.filterIsRead}
                        filterCategory={this.props.filterCategory}
                    />
            </div>
        )
    }
}
export default Dropdown;
