import React from "react";
import DropdownContent from "../DropdownContent"
import './style.css';

class Dropdown extends React.Component{
    render(){
        return(
            <div className="dropdown">
                <span>Category</span>
                    <DropdownContent/>
            </div>
        )
    }
}
export default Dropdown;
