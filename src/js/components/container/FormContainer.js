import React from "react";
import Input from "../presentational/Input.js";
import "../../../Style/style.css";


class FormContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            seo_title: "seo"
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        const { seo_title } = this.state;
        return (
            <form id="article-form">
                <Input
                    text="SEO title"
                    label="seo_title"
                    type="text"
                    id="seo_title"
                    value={seo_title}
                    handleChange={this.handleChange}
                />
            </form>
        );
    }
}
export default FormContainer;
