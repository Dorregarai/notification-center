import React from "react";
import './style.css';
// TODO: read about БЭМ
class TableRow extends React.Component {
    getClassNameByCategory(category) {
        switch (category) {
            case 'DEBUG': return 'table-row__status__debug';
            case 'INFO' : return 'table-row__status__info';
            case 'ERROR': return 'table-row__status__error';
            case 'CRIT' : return 'table-row__status__crit';
            case 'WARN' : return 'table-row__status__warn';
        }
    }
    getClassNameByStatus(status){
        if(status) return 'table-row__isRead__true';
        return 'table-row__isRead__false'
    }
    /* TODO: Move className calculation to separate place */
    renderMessage(){
        return(
            <tr onClick={this.props.onClick} className={this.getClassNameByStatus(this.props.isRead)}>
                <td className={this.getClassNameByCategory(this.props.category) + " table-row__color"}></td>
                <td className="table-row__category">{this.props.category}</td>
                <td className="table-row__text">{this.props.text}</td>
                <td className="table-row__date">{this.props.createdOn}</td>
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

export default TableRow;