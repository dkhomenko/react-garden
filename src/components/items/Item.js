import React from 'react';

const Item = (props) => {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.plantFamily}</td>
            <td></td>
        </tr>
    );
};

export default Item;