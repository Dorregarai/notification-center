import React from "react";
import './style.css';


class DropdownContent extends React.Component{
    handleApplyFilterClick = () => {
        const { page, filterIsRead, filterCategory, getNotifications } = this.props;
        getNotifications(page, filterIsRead(), filterCategory())
    };

    render(){
        const { clearFilter } = this.props;
        return(
            <div className="dropdown__content">
                <button
                    className="dropdown__content__reset"
                    onClick={() => clearFilter()}
                >
                    Reset filter</button>
                <p className="dropdown__content__isRead">
                    <input type="radio" name="isRead" id="isRead__true" value={true}/>
                    <label htmlFor="isRead__true">Read</label>
                </p>
                <p>
                    <input type="radio" name="isRead" id="isRead__false" value={false}/>
                    <label htmlFor="isRead__false">Unread</label>
                </p>
                <p className="dropdown__content__category">
                    <input type="radio" id="category__critical" name="category" value="CRITICAL"/>
                    <label htmlFor="category__critical">Critical</label>
                </p>
                <p>
                    <input type="radio" id="category__warn" name="category" value="WARN"/>
                    <label htmlFor="category__warn">Warn</label>
                </p>
                <p>
                    <input type="radio" id="category__error" name="category" value="ERROR"/>
                    <label htmlFor="category__error">Error</label>
                </p>
                <p>
                    <input type="radio" id="category__info" name="category" value="INFO"/>
                    <label htmlFor="category__info">Info</label>
                </p>
                <p>
                    <input type="radio" id="category__debug" name="category" value="DEBUG"/>
                    <label htmlFor="category__debug">Debug</label>
                </p>
                <button
                    className="dropdown__content__apply"
                    onClick={() => this.handleApplyFilterClick()}>Apply
                </button>
            </div>
        )
    }
}

export default DropdownContent;