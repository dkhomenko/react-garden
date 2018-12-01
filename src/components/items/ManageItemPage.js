import React, { Component } from 'react';
import ItemApi from '../../api/mockItemApi';
import ItemForm from './ItemForm';

class ManageItemPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            item: Object.assign({}, props.item),
            errors: {}
        };

        this.addItem = this.addItem.bind(this);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.clearFields = this.clearFields.bind(this);
    }

    onFieldChange(event) {
        this.setState({
            item: Object.assign(this.state.item, {[event.target.name]: event.target.value})
        });
    }

    addItem(e) {
        e.preventDefault();

        ItemApi.saveItem(this.state.item).then((savedItem) => {
            this.props.history.push('/items');
        });
    }

    clearFields() {
        this.setState({
            name: '',
            plantFamily: ''            
        });
    }

    render() {
        return (
            <div>
                <ItemForm item={this.state.item} addItem={this.addItem} onFieldChange={this.onFieldChange} />
            </div>
        );
    }
}

export default ManageItemPage;