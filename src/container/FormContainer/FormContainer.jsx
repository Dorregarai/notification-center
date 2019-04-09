import React from "react";
import Table from "../../components/Table";
import Header from "../../components/Header";
import MarkAllAsRead from "../../components/MarkAllAsRead";
import './style.css';

class FormContainer extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <Header />
                <Table />
                <MarkAllAsRead />
            </div>
        );
    }
}
export default FormContainer;
