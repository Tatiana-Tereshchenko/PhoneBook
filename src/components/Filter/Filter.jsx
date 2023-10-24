import React, { Component } from "react";

class Filter extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <label>
                Filter contacts by name:
                <input type="text" value={value} onChange={onChange}/>
            </label>
        )
    }
}

export default Filter;