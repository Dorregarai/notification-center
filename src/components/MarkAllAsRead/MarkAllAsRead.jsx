import React from "react";
import './style.css';
import Pagination from "../Table/Table";

class MarkAllAsRead extends React.Component{
    render(){
        return(
            <button
                onClick={this.props.handleMarkAllAsReadButtonClick}
                className="mark">
                Mark all as read
            </button>
        )
    }
}

export default MarkAllAsRead;