import React from "react";
import PropTypes from "prop-types";
import TableRow from "../Table-row";
import './style.css';

class Table extends React.Component{
    render(){
        return(
            <table className="table">
                <tr>
                    <td className="table color"></td>
                    <td>Category *button*</td>
                    <td>Message</td>
                    <td>Date</td>
                </tr>
                <TableRow/>
                <TableRow/>
            </table>
        )
    }
}
export default Table;
