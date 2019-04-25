import React from "react";
import Table from "../../components/Table";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import './style.css';

class FormContainer extends React.Component {
    render() {
        return (
            <div className="formContainer">
                <Header />
                <Table />
                <Pagination />
            </div>
        );
    }
}
export default FormContainer;
