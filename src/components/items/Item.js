import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <tr>
            <td><Link to={'/item/' + props.id}>Edit</Link></td>
            <td>{props.name}</td>
            <td>{props.plantFamily}</td>
            <td></td>
        </tr>
    );
};

export default Item;