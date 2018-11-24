import React, { Component } from 'react';
import ItemList from './ItemList';
import AddItem from './AddItem';
import ItemApi from '../../api/mockItemApi';

class ItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };

        this.addItem = this.addItem.bind(this);
    }

    componentDidMount() {
        ItemApi.getAllItems().then((data) => {
            this.setState({ items: data });
        });
    }

    addItem(item) {
        ItemApi.saveItem(item).then((newItem) => {
            var newItems = this.state.items.concat(newItem);
            this.setState({ items: newItems });
        });
    }
    
    render() {
        return (
            <div>
                <ItemList items={this.state.items} />
                <AddItem addItem={this.addItem} />
            </div>
        );
    }
}

export default ItemsPage;