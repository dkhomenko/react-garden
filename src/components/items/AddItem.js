import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            plantFamily: ''
        };
        this.onFieldChange = this.onFieldChange.bind(this);
        this.addNew = this.addNew.bind(this);
    }
    onFieldChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    addNew(e) {
        e.preventDefault();

        var newItem = {
            name: this.state.name,
            plantFamily: this.state.plantFamily
        };

        this.props.addItem(newItem);
    }
    clear() {
        this.setState({
            name: '',
            plantFamily: ''
        });
    }
    render() {
        return (
            <div>
                <h1>Add New Item</h1>
                <form onSubmit={this.addNew}>
                    <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.onFieldChange} /> <br/>
                    <input type='text' name='plantFamily' placeholder='Plant Family' value={this.state.plantFamily} onChange={this.onFieldChange} /> <br/>
                    <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

export default AddItem;