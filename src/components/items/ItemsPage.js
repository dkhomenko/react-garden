import React, { Component } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import ItemApi from '../../api/mockItemApi';

class ItemsPage extends Component {
    constructor(props) {
        super(props);
        
        var newItem = {
            name: '',
            plantFamily: ''
        };
        
        this.state = { 
            items: [], 
            newItem: newItem 
        };

        this.addItem = this.addItem.bind(this);
        this.onAddFieldChange = this.onAddFieldChange.bind(this);
        this.clearNewItem = this.clearNewItem.bind(this);
    }

    componentDidMount() {
        ItemApi.getAllItems().then((data) => {
            this.setState({ items: data });
        });
    }

    onAddFieldChange(event) {
        this.setState({
            newItem: Object.assign(this.state.newItem, {[event.target.name]: event.target.value})
        });
    }

    addItem(e) {
        e.preventDefault();

        ItemApi.saveItem(this.state.newItem).then((savedItem) => {
            var items = this.state.items.concat(savedItem);
            this.setState({ items: items });

            this.clearNewItem();
        });
    }

    clearNewItem() {
        this.setState({
            newItem: Object.assign(this.state.newItem, {
                name: '',
                plantFamily: ''
            })
        });
    }
    
    render() {
        return (
            <div>
                <ItemList items={this.state.items} />
                <AddItem item={this.state.newItem} addItem={this.addItem} onFieldChange={this.onAddFieldChange} />
            </div>
        );
    }
}

export default ItemsPage;