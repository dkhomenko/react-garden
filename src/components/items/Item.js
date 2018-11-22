import React from 'react';

const Item = (props) => {
    return (
        <div>
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.plantFamily}</div>
        </div>
    );
};

export default Item;