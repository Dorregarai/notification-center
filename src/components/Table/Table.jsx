import React from "react";
import TableRow from "../Table-row";
import Dropdown from "../Dropdown";
import './style.css';

class Table extends React.Component{
    render(){
        return(
            <table className="table">
                <tr>
                    <td className="color"> </td>
                    <td className="category"><Dropdown/></td>
                    <td className="message">Message</td>
                    <td className="date">Date</td>
                </tr>
                <TableRow/>
                <TableRow/>
            </table>
        )
    }
}
export default Table;
