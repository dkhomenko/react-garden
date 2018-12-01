import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    return (
        <div>
            <h1>All Items</h1>
            <table>
                <tbody>
                    {props.items.map((itm) => <Item key={itm.id} {...itm} />)}
                </tbody>
            </table>
        </div>
    );
};

export default ItemList;