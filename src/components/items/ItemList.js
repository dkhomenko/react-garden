import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    return (
        <div>
            <h1>All Items</h1>
            {props.items.map((itm) => <Item key={itm.id} {...itm} />)}
        </div>
    );
};

export default ItemList;