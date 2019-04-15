import React from "react";
import PropTypes from "prop-types";
import './style.css';

class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mesState: this.props.mesState,
            category: this.props.category,
            message: this.props.message,
            date: this.props.date
        }
    }

    handleOnClick = () => {
        this.setState({mesState: "read"});
    };

    renderMessage(){
        return(
            <tr onClick={this.handleOnClick} className={this.state.mesState}>
                <td className={this.state.category+" color"}> </td>
                <td className="category">{this.state.category.toUpperCase()}</td>
                <td className="message">{this.state.message}</td>
                <td className="date">{this.state.date}</td>
            </tr>
        )
    }

    render() {
        return (
            <tbody className="table">
                { this.renderMessage() }
            </tbody>
        )
    }
}

/*TableRow.defineProperty(obj, 'key', {
    enumerable: false,
    configurable: false,
    writable: false,
    value: 'static'
});*/

TableRow.propTypes = {
            mesState: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
};

export default TableRow;
