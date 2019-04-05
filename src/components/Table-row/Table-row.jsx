import React from "react";
import PropTypes from "prop-types";
import './style.css';

class Table extends React.Component {
    constructor() {
        const date = new Date().toLocaleString();
        super();
        this.state = {
            category: "warn",
            message: "some text!",
            date
        }
    }

    render() {
        return (
            <tr className="read">
                <td className={this.state.category}></td>
                <td>{this.state.category.toUpperCase()}</td>
                <td>{this.state.message}</td>
                <td>{this.state.date}</td>
            </tr>
        )
    }
}
export default Table;
