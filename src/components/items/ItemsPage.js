import React, { Component } from 'react';
import ItemList from './ItemList';
import ItemApi from '../../api/mockItemApi';

class ItemsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }

    componentDidMount() {
        ItemApi.getAllItems().then((data) => {
            this.setState({ items: data });
        });
    }
    
    render() {
        return (
            <div>
                <ItemList items={this.state.items} />
            </div>
        );
    }
}

export default ItemsPage;