import React, { Component } from 'react';
import ItemList from './ItemList';
import ItemApi from '../../api/mockItemApi';
import { Link } from 'react-router-dom';

class ItemsPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            items: []
        };
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
                <Link to='/item'>Add Item</Link>
            </div>
        );
    }
}

export default ItemsPage;