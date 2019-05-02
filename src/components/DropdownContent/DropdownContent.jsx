import React from "react";
import './style.css';


class DropdownContent extends React.Component{
    render(){
        return(
            <div className="dropdown__content">
                <button className="dropdown__content__reset">Reset filter</button>
                <p className="dropdown__content__isRead"><input type="radio" name="isRead" value="Read"/>Read</p>
                <p><input type="radio" name="isRead" value="Unread"/>Unread</p>
                <p className="dropdown__content__category"><input type="radio" name="category" value="Critical"/>Critical</p>
                <p><input type="radio" name="category" value="Warn"/>Warn</p>
                <p><input type="radio" name="category" value="Success"/>Success</p>
                <p><input type="radio" name="category" value="Info"/>Info</p>
                <button className="dropdown__content__apply">Apply</button>
            </div>
        )
    }
}
export default DropdownContent;
