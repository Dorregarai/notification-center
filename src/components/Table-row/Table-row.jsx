import React from "react";
import PropTypes from "prop-types";
import './style.css';

class Table extends React.Component {
    constructor() {
        const date = new Date().toLocaleString();
        super();
        this.state = {
            mesState: "unread",
            category: "warn",
            message: "some text!",
            date
        }
    }

    render() {
        return (
            <tr className={this.state.mesState}>
                <td className={this.state.category}> </td>
                <td className="row">{this.state.category.toUpperCase()}</td>
                <td className="row">{this.state.message}</td>
                <td className="row">{this.state.date}</td>
            </tr>
        )
    }
}
export default Table;
