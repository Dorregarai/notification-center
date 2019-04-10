import React from "react";
import PropTypes from "prop-types";
import './style.css';

class TableRow extends React.Component {
    constructor(props) {
        const date = new Date().toLocaleString();
        super(props);
        this.state = {
            /*
            mesState: "unread",
            category: "warn",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            date
            */
            data: this.props.data
        }
    }

    handleOnClick = () => {
        this.state.data.mesState = "read"
    };

    renderMessage(data){
        return(
            <tr onClick={this.handleOnClick()} className={data.mesState}>
                <td className={data.category+" color"}> </td>
                <td className="category">{data.category.toUpperCase()}</td>
                <td className="message">{data.message}</td>
                <td className="date">{data.date}</td>
            </tr>
        )
    }

    render() {
        return (
            <tbody className="table">{
                this.state.data.map((elem) => {
                    return this.renderMessage(elem);
                })
            }
            </tbody>
        )
    }
}

TableRow.defaultProps = {
    data: [],
};
TableRow.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            mesState: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        })
    ).isRequired,
};

export default TableRow;
