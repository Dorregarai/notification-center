import React from "react";
import './style.css';

class DropdownContent extends React.Component{
    render(){
        return(
            <div className="dropdown-content">
                <p><input type="radio" name="isRead" value="Read"/>Read</p>
                <p><input type="radio" name="isRead" value="Unread"/>Unread</p>
                <p><input type="radio" name="category" value="Critical"/>Critical</p>
                <p><input type="radio" name="category" value="Warn"/>Warn</p>
                <p><input type="radio" name="category" value="Success"/>Success</p>
                <p><input type="radio" name="category" value="Info"/>Info</p>
            </div>
        )
    }
}
export default DropdownContent;
