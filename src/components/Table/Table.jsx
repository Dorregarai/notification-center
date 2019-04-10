import React from "react";
import TableRow from "../Table-row";
import Dropdown from "../Dropdown";
import './style.css';

class Table extends React.Component{
    render(){
        return(
            <table className="table">
                <tbody className="table">
                <tr>
                    <th className="color"> </th>
                    <th className="category"><Dropdown /></th>
                    <th className="message">Message</th>
                    <th className="date">Date</th>
                </tr>
                </tbody>
                <TableRow
                    mesState="unread"
                    category="info"
                    message="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    date={Date.now().toLocaleString()}
                />
                <TableRow />
            </table>
        )
    }
}
export default Table;
